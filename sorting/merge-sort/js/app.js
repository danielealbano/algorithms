function merge_sort(data)
{
	var i = 0, l = 0, r = 0;

	var half = data.length >> 1;

	var left = data.slice(0); 
	var right = left.splice(half, left.length - half);

	if (data.length > 2)
	{
		merge_sort(left);
		merge_sort(right);
	}


	while (i < data.length && l < left.length && r < right.length)
	{
		data[i++] = left[l] < right[r] ? left[l++] : right[r++];
	}

	var isLeft = l < left.length;

	if (isLeft || r < right.length)
	{
		var source = isLeft ? left : right;
		var sourceIndex = isLeft ? l : r;

		while(sourceIndex < source.length)
		{
			data[i++] = source[sourceIndex++]
		}
	}
}

//var data = [ 3, 67, 2, 78, 456, 7, 2, 43, 67, 7425, 856, 7, 9, 24, 67];
var data = [ 1, 8, 9, 4, 5, 6, 1, 2, 3, 6, 7, 8, 6, 7 ];

console.log(data, data.length);
merge_sort(data);
console.log(data, data.length);

