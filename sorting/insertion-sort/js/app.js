function insertion_sort(data)
{
	var length = data.length;

	if (length < 2)
	{
		return;
	}

	for(var i = 1; i < length; i++)
	{
		for(var k = i - 1; k >= 0; k--)
		{
			if (data[k + 1] < data[k])
			{
				var temp = data[k];
				data[k] = data[k + 1];
				data[k + 1] = temp;
			}
		}
	}
}

var data = [ 3, 67, 2, 78, 456, 7, 2, 43, 67, 7425, 856, 7, 9, 24, 67];

console.log(data, data.length);
insertion_sort(data);
console.log(data, data.length);

