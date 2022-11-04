function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let low = i;
		for (let j = i+1; j < array.length; j++) {
			if (array[j] < array[low]) {
				low=j;
			}
		}
		if (low != i) {
			let swap = array[i];
			array[i] = array[low];
			array[low] = swap;
		}	
	}
	return array;
}
/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
module.exports = selectionSort;
