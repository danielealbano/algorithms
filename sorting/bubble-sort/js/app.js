function bubble_sort(data)
{
	var length = data.length;

	if (length < 2)
	{
		return;
	}

	for(var i = 0; i < length; i++)
	{
		for(var k = 0; k < length - 1 - i; k++)
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
bubble_sort(data);
console.log(data, data.length);

