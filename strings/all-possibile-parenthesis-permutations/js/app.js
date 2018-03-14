function permute(number) {
	var permutations = [ ],
	    array;

	function _swap(array, t, f) {
		if (t == f) return;

		var temp = array[t];
		array[t] = array[f];
		array[f] = temp;
	}

	function _permute(array, counter, index) {
		if (counter < 0) {
			return; 
		}

		if (index == array.length) {
			var string = array.join('');
			if (!!permutations[string] == false) {
				permutations[string] = true;
			}
			return;
		}

		for(var i = index; i < array.length; i++) {
			_swap(array, i, index);
			_permute(array, counter + (array[index] == ')' ? -1 : 1) , index + 1);
			_swap(array, i, index);
		}
	}

	if (number == 0) {
		return [ ];
	}

	array = (new Array(number + 1).join('(') + new Array(number + 1).join(')')).split('');

	_permute(array, 0, 0);

	return Object.keys(permutations);
}

console.log(permute(3));
