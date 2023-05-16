<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$newContents = $_POST['contents'];
	file_put_contents('file', $newContents);
	echo 'File updated';
}
?>
