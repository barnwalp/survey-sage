function removeItem(array, item) {
	const index = array.indexOf(item);
  // only splice array when item is found
	if (index > -1) {
		array.splice(index, 1);
	}
	return array;
}

console.log(removeItem(['item 1', 'item 2', 'item 3'], 'item 2'));

module.exports = {
	removeItem
}
