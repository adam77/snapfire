// todo
// Max engaged. Support fire. FS.

var rollOff = {
    offset:5,
    pDiff:[0.008,0.032,0.069,0.114,0.166,0.221,0.166,0.144,0.069,0.032,0.008], 
    pDiffOrBetter:[1.0,0.993,0.961,0.892,0.778,0.612,0.391,0.225,0.109,0.040,0.008],    
    pDiffOrWorse:[1.0,0.993,0.961,0.892,0.778,0.612,0.391,0.225,0.109,0.040,0.008].reverse(),
    pWinRollOff:function(modifier) {
        if (modifier > 4) return 1;
        if (modifier < -4) return 0;
        return rollOff.pDiffOrBetter[rollOff.offset - (modifier-1)];
    },
    pLoseRollOff:function(modifier) {
        if (modifier > 4) return 0;
        if (modifier < -4) return 1;
        return rollOff.pDiffOrWorse[rollOff.offset - (modifier+1)];
    }
};

function Unit(size, toHit, hitDice, save, BMs, TSKNF, FS) {
    this.size = size;
    this.toHit = toHit;
    this.hitDice = hitDice;
    this.save = save;
    this.BMs = BMs;
    this.TSKNF = TSKNF;
    //this.FS = FS;
        
    this.totalDice = size * hitDice;
    this.pToHit = pOfRolling(toHit);
    this.pFailSave = 1 - pOfRolling(save);
}

Unit.prototype.toString = function() {
    return 'size:' + this.size + ', toHit:' + this.toHit + ', hitDice:' + this.hitDice + ', save:' + this.save + ', totalDice:' + this.totalDice + ', pToHit:' + dp3(this.pToHit) + ', pFailSave:' + dp3(this.pFailSave); 
}

function Assault(A,D) {
    this.A = A;
    this.D = D;    
    this.pUnsavedHitByA = A.pToHit * D.pFailSave;
    this.pUnsavedHitByD = D.pToHit * A.pFailSave;
}

Assault.prototype.toString = function() {
    return this.A + '\n' + this.D + 
        '\n' + 'pUnsavedHitByA:' + dp3(this.pUnsavedHitByA) + ', pUnsavedHitByD:' + dp3(this.pUnsavedHitByD);
}

Assault.prototype.workingString = function() {
    return 'pKillsByA:' + dp3All(this.pKillsA) + '\npKillsByD:' + dp3All(this.pKillsD) + '\npKillsAD:' + dp3Matrix(this.pKillsAD) +
        '\npDWipedOut:' + dp3(this.pModifier.pAutoWin) + '\npADWipeOut:' + dp3(this.pModifier.pAutoDraw) + '\npAWipedOut:' + dp3(this.pModifier.pAutoLose) +
        '\npModifier:' + printBuckets(this.pModifier.offset, this.pModifier.p);
}

Assault.prototype.resultString = function() {
    return 'pWinA:' + pc1(this.pWinA) + '\npDraw:' + pc1(this.pDraw) + '\npLose:' + pc1(this.pWinD);
}

Assault.prototype.calcResult = function() {
    this.pKillsA = enumerateKillsBinomial(this.A, this.D, this.pUnsavedHitByA);
    this.pKillsD = enumerateKillsBinomial(this.D, this.A, this.pUnsavedHitByD);
    this.pKillsAD = multiplyArrays(this.pKillsA, this.pKillsD);
    this.pModifier = modifierBuckets(this.pKillsAD, this.A, this.D);
    this.pWinA = calcWinProb(this.pModifier);
    this.pWinD = calcLoseProb(this.pModifier);
    this.pDraw = 1 - this.pWinA - this.pWinD;
}

function printBuckets(offset,vals) {
    var out = '\n';
    for (var i=0;i<vals.length;i++) {
        var x = i - offset;
        var sign = '&nbsp;'
        if (x>0) sign = '+';
        if (x<0) sign = '';
        if (x>-10 && x < 10) x = x + '&nbsp;';
        
        out += sign + x + ' ' + dp3(vals[i]) + '\n';
    }
    return out;
}

function modifierBuckets(pKillsAD, A, D) {
    var pAutoWin = 0;
    var pAutoDraw = 0;
    var pAutoLose = 0;
    var pModifier = [];
        
    var maxKillsByA = pKillsAD.length - 1;
    var maxKillsByD = pKillsAD[0].length - 1;
    var minModifier = -maxKillsByD - 4;
    var maxModifier = maxKillsByA + 4;
    var offset = -minModifier;
    
    for (var i=0; i < 1+maxModifier-minModifier; i++) {
        pModifier[i] = 0;
    }    
    
    
    for (var x=0; x<pKillsAD.length; x++) {
        for (var y=0; y<pKillsAD[x].length; y++) {
            var pOutcome = pKillsAD[x][y];
            if (x>=D.size && y>=A.size) {
                pAutoDraw += pOutcome;
            }
            else if (x >= D.size) {
                pAutoWin += pOutcome;
            }
            else if (y >= A.size) {
                pAutoLose += pOutcome;
            }
            else {
                // result
                var remainingA = A.size - y;
                var remainingD = D.size - x;
                // work out bonus (from perspective of A)
                var killBonus = x - y; // kills by A - kills by D
                var moreUnitsBonus = calcUnitsBonus(remainingA, remainingD);
                var bmBonus = calcBMBonus(A,D);
                var bonus = killBonus + moreUnitsBonus + bmBonus;                
                console.log(x+':'+y+ ' kill:'+killBonus+' unit:'+moreUnitsBonus+' bm:'+bmBonus);
                // add pOutcome to rollOff modifier
                pModifier[offset+bonus] += pOutcome;
            }
        }
    }   
    
    return {offset:offset, p:pModifier, pAutoWin:pAutoWin, pAutoLose:pAutoLose, pAutoDraw:pAutoDraw};    
}

function calcLoseProb(modifierProbs) {
    var pLose = modifierProbs.pAutoLose;
    for (var i=0; i<modifierProbs.p.length; i++) {
        var modifier = i - modifierProbs.offset;
        var pLoseX = modifierProbs.p[i] * rollOff.pLoseRollOff(modifier);
        pLose += pLoseX;
    }
    return pLose;   
}

function calcWinProb(modifierProbs) {
    var pWin = modifierProbs.pAutoWin;    
    for (var i=0; i<modifierProbs.p.length; i++) {
        var modifier = i - modifierProbs.offset;
        var pWinX = modifierProbs.p[i] * rollOff.pWinRollOff(modifier);
        pWin += pWinX;
    }
    return pWin;   
}

function calcBMBonus(A,D) {
    var bonus = (A.BMs==0?1:0) + (D.BMs==0?-1:0);
    var BMsA = A.TSKNF ? Math.floor(A.BMs / 2) : A.BMs;
    var BMsD = D.TSKNF ? Math.floor(D.BMs / 2) : D.BMs;
    if (BMsA < BMsD) bonus += 1;
    if (BMsD < BMsA) bonus -= 1;
    return bonus;
}

function calcUnitsBonus(remainingA, remainingD) {
    if (remainingA > remainingD*2) return 2;
    if (remainingA > remainingD) return 1;
    if (remainingA*2 < remainingD) return -2;
    if (remainingA < remainingD) return -1;
    return 0;
}


function enumerateKillsBinomial(A, D, pUnsavedHitByA) {
   var pKills = [];
   var trials = A.totalDice;
   var pSuccess = pUnsavedHitByA;

   for (var x=0; x<=A.totalDice && x<=D.size; x++) {
      if (x < D.size) {
         pKills[x] = binomialEqual( trials, pSuccess, x ); 
      }
      else {
         pKills[x] = binomialEqualOrGreater( trials, pSuccess, x ); 
      }
   }
   return pKills;   
}




///////////////////////////////////////////////////////////////////////////////



function doAssault() {
    var unitA = new Unit(
        parseInt($F('sizeA')),
        parseInt($F('toHitA')),
        parseInt($F('diceA')),
        parseInt($F('saveA')),
        parseInt($F('BMsA')),
        $('TSKNFA').checked,false);
       // $F('firstStrikeA'));
    var unitD = new Unit(
        parseInt($F('sizeD')),
        parseInt($F('toHitD')),
        parseInt($F('diceD')),
        parseInt($F('saveD')),
        parseInt($F('BMsD')),
        $('TSKNFD').checked,false);
   //     $F('firstStrikeD'));    
    var assault = new Assault(unitA, unitD);
    assault.calcResult();
    var msg = assault.resultString() + '\n\n\n\n' + assault + '\n\n' + assault.workingString();
    $('result').update( msg.replace(/\n/g,'<br>') );  
    
    console.log(dp3(0.00000000001));
}

function testAssault() {
    var unitA = new Unit(4, 3, 1, 4, 0, true);
    var unitD = new Unit(16, 5, 1, 5, 0, false);    
    var assault = new Assault(unitA, unitD);
    assault.calcResult();
    console.log(assault.toString());
    var msg = assault + '\n\n' + assault.resultString();
    $('result').update( msg.replace(/\n/g,'<br>') );
}



