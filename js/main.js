$(document).ready(() => {

    // Create default array
    const defaultArray = [2, 8, 1, 6, 3, 7, 5, -1, 4, -3, -5];
    let arrayContainer = $('<div></div>').addClass('array-container');

    for (i of defaultArray) {
        let value = $('<p></p>').text(i);
        let element = $('<div></div>').addClass('array-element');
        arrayContainer.append(element.append(value));
    }
    $('section.animation-zone').append(arrayContainer);

    // Center default array
    function centerArray() {
        $(arrayContainer).css(
            'left',
            $('section.animation-zone').width() / 2
            - $(arrayContainer).width() / 2 + 'px'
        );
    }
    centerArray();
    $(window).resize(centerArray);

    // Sort button

    $('#sort').click(() => {
        sort(arrayContainer[0]);
    });

});
