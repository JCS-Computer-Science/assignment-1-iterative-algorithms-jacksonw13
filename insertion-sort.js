function insertionSort(array) {
	for (let index = 1; index < array.length; index++) {
		let current = array[index]; 
		let j = index-1;
		while ((j > -1) && (current < array[j])) {
			array[j+1] = array[j]
			j--;
		}
		array[j+1] = current;
	}
	return array;
}
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
module.exports = insertionSort;
