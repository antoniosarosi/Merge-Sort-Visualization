$(document).ready(() => {
    function appendElement(value) {
		let arrayElement = $("<div></div>").addClass("array-element");
		let number = $("<p></p>").text(value);
		arrayElement.html(number);
		$("div.array-container").append(arrayElement);
    }
    
    let defaultArray = [12, 1, 5, 8, 9, 3, 7, 2, 6, 4, 11, 10];

    for (i of defaultArray)
        appendElement(i);

    // Sort button

    $('#sort').click(() => {
        console.log(defaultArray);
        sort(defaultArray);
        console.log(defaultArray);
    });
});
