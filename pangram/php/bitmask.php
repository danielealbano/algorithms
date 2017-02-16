<?php

function createBitmaskFromString($string) {
	$bitmask = 0;
	$len = strlen($string);
	for($i = 0; $i < $len; $i++) {
		$char = (ord($string{$i}) & 0xDF) - 65;
		if ($char < 0 || $char > 26) {
			continue;
		}
		$bitmask |= 0x01 << $char;
	}

	return $bitmask;
}

function isPangramBitmask($bitmaskAlphabet, $string) {
	return createBitmaskFromString($string) == $bitmaskAlphabet;
}

$alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
$string = "The quick brown fox jumps over the lazy dog";

$bitmaskAlphabet = createBitmaskFromString($alphabet);
var_dump(isPangramBitmask($bitmaskAlphabet, $string));
