let sorted = false;

$(document).ready(() => {

	// Sort button

	$("#sort").click(() => {
        if (sorted) {
            $('section.errors p').text('Already sorted!');
            return;
        }
        $("section.errors p").text("");
        let $array = getArrayValue();
        sort($array[0]);
        sorted = true;
    });
    
    // Unsort button

    $("#unsort").click(() => {
        if (!sorted) {
            $("section.errors p").text("Already unsorted!");
            return;
        }
        $("section.errors p").text("");
        let sortedArray = $('div.array-container')[0];
        let unsortedArray = [];
        for (let i = sortedArray.childNodes.length - 1; i >= 0 ; i--)
            unsortedArray.push($(sortedArray.childNodes[i]).text());
        unsort(unsortedArray);
        sorted = false;
    });
});
