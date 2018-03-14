function quick_sort(data)
{
	function internal_quick_sort(data, offset, length)
	{
		if (length <= 1)
		{
			return;
		}

		var pivot = data[parseInt(Math.random() * data.length)];

		var exitFromLoop = false;
		for (var i = 0; i < data.length && exitFromLoop == false; i++)
		{
			if (data[i] >= pivot)
			{
				for (var k = 0; k < data.length; k++)
				{
					if (data[k] <= pivot)
					{
						var temp = data[i];
						data[i] = data[k];
						data[k] = temp;
					}
				}
			}
		}

		var half = length >> 1;
		internal_quick_sort(data, 0, half);
		internal_quick_sort(data, half, length - half);
	}

	internal_quick_sort(data, 0, internal_quick_sort.length);
}

var data = [ 1, 8, 9, 4, 5, 6, 1, 2, 3, 6, 7, 8, 6, 7 ];
//var data = [ 3, 67, 2, 78, 456, 7, 2, 43, 67, 7425, 856, 7, 9, 24, 67];

console.log(data, data.length);
quick_sort(data);
console.log(data, data.length);
