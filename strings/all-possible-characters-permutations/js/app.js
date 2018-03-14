function permute(string) {
	var permutations = [ ],
	    array = string.split('');

	function _swap(array, t, f) {
		if (t == f) return;

		var temp = array[t];
		array[t] = array[f];
		array[f] = temp;
	}

	function _permute(array, index) {
		if (index == array.length) {
			permutations.push(array.join(''));
			return;
		}

		for(var i = index; i < array.length; i++) {
			_swap(array, i, index);
			_permute(array, index + 1);
			_swap(array, i, index);
		}
	}

	if (array.length == 0) {
		return [ ];
	}

	_permute(array, 0);

	return permutations;
}

console.log(permute("ABC"));

/*
ABC BAC CBA
*/