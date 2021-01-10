let _isDarkTheme;

window.onload = () => {
	_isDarkTheme = JSON.parse(window.localStorage.getItem('isDarkTheme')) || false;
	document.body.classList.add(getTheme(_isDarkTheme));
	setTimeout(() => {
		document.body.classList.remove('preload');
	}, 500);
};

const getTheme = isDarkTheme => {
	return isDarkTheme ? 'dark' : 'light';
}

document.body.addEventListener('dblclick', () => {
	document.body.classList.replace(getTheme(_isDarkTheme), getTheme(!_isDarkTheme));
	_isDarkTheme = !_isDarkTheme;
	window.localStorage.setItem('isDarkTheme', _isDarkTheme);
});
