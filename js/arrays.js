/**
 * Deletes all div.array-container from DOM
 * @public
 */
function removeAll() {
	$('div.array-container').remove();
}

/**
 * Creates and appends a jquery container with the given array
 * @public
 * @param {array} arr - array to be displayed
 * @returns {Jquery Object} 
 */
function displayArray(arr) {
    removeAll();
	let $arrayContainer = $("<div></div>").addClass("array-container");
	for (i of arr) {
		let $value = $("<p></p>").text(i);
		let $element = $("<div></div>").addClass("array-element");
		$arrayContainer.append($element.append($value));
	}
	$("section.animation-zone").append($arrayContainer);

	function center() {
		$arrayContainer.css(
			"left",
			$("section.animation-zone").width() / 2 -
				$arrayContainer.width() / 2 +
				"px"
		);
	}
	center();
    $(window).resize(center);
    
    return $arrayContainer;
}

/**
 * Parses and converts a string to an array
 * @public
 * @param {string} str - string to be converted into an array
 */
function parse(str) {
    let replaced = str.replace(/\s/g, '');
    return JSON.parse(replaced);
}