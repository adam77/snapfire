// Opt-in mobile view. The classic view stays the default. The user turns the
// mobile view on or off with a button that only touch screens show.
// Load this script in the head, before any style or script that reads the
// "mobile" class, so that the page does not render twice.
(function() {
	var KEY = 'armyforgeMobile';
	var on = false;
	try { on = localStorage.getItem(KEY) === '1'; } catch (e) {}

	if (on) {
		document.documentElement.className += ' mobile';
		// without this tag a phone renders the page at desktop width, which is the classic view
		var meta = document.createElement('meta');
		meta.name = 'viewport';
		meta.content = 'width=device-width, initial-scale=1';
		document.head.appendChild(meta);
	}

	document.addEventListener('DOMContentLoaded', function() {
		var button = document.createElement('button');
		button.type = 'button';
		button.id = 'viewToggle';
		button.textContent = on ? 'Classic view' : 'Mobile view';
		button.onclick = function() {
			try { localStorage.setItem(KEY, on ? '0' : '1'); } catch (e) {}
			// a reload is the only reliable way to remove the viewport tag again
			location.reload();
		};
		document.body.insertBefore(button, document.body.firstChild);
	});
})();
