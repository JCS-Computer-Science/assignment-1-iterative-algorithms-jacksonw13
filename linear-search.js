function linearSearch(array, searchTerm) {
	for (let index = 0; index < array.length; index++) {
		if (array[index] == searchTerm) {
			return index;
		}
	}
}
/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */
module.exports = linearSearch;
