window.addEventListener('load', function() {
	var fileContentsSpan = document.getElementById('file-contents');
	var toggleFileCheckbox = document.getElementById('toggle-file');
	var initialFileContents = getFileContents();

	// Set the initial file contents
	fileContentsSpan.textContent = initialFileContents;

	// Add an event listener to the toggle file checkbox
	toggleFileCheckbox.addEventListener('change', function() {
		var newFileContents = toggleFileContents(initialFileContents);
		fileContentsSpan.textContent = newFileContents;
		updateFileContents(newFileContents);
	});

	// Function to get the initial contents of the file
	function getFileContents() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'file', false);
		xhr.send(null);
		return xhr.responseText;
	}

	// Function to toggle the contents of the file
	function toggleFileContents(contents) {
		if (contents === '0') {
			return '1';
		} else {
			return '0';
		}
	}

	// Function to update the contents of the file
	function updateFileContents(newContents) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'update_file.php', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send('contents=' + newContents);
	}
});
