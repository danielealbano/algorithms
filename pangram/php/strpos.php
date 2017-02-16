<?php

function isPangramStrpos($alphabet, $string) {
	$string = strtoupper($string);

	$len = strlen($alphabet);
	for($i = 0; $i < $len; $i++) {
		if (strpos($string, $alphabet{$i}) === false) {
			return false;
		}
	}

	return true;
}

$alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
$string = "The quick brown fox jumps over the lazy dog";

var_dump(isPangramStrpos($alphabet, $string));
