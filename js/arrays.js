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

    if (replaced[0] !== '[' || replaced[replaced.length - 1] !== ']')
        throw "An array must be placed within square brackets: [0, 1, 2, ...]";

    for (let i = 1; i <= replaced.length - 4; i += 2) {
        if (isNaN(replaced[i]))
            throw `Parse Error: '${replaced[i]}' is not a number`;
        if (replaced[i + 1] !== ',')
            throw `Format Error: Numbers must be followed by comas, '${replaced[i + 1]}' is not a coma`;
    }
    if (isNaN(replaced[replaced.length - 2]))
        throw `Parse Error: '${replaced[replaced.length - 2]}' is not a number`;  

    return JSON.parse(replaced);
}