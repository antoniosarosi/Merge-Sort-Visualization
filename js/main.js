$(document).ready(() => {

    const defaultArray = [2, 4, 1, 6, 3, 7, 5, -1, -3, 20, 0, -15, -7, 25, 14];

    let arrayContainer = $('<div></div>').addClass('array-container');

    for (i of defaultArray) {
        let value = $('<p></p>').text(i);
        let element = $('<div></div>').addClass('array-element');
        arrayContainer.append(element.append(value));
    }

    $('section.animation-zone').append(arrayContainer);

    $(arrayContainer).css(
        'left',
        $('section.animation-zone').width() / 2
        - $(arrayContainer).width() / 2 + 'px'
    );

    // Sort button

    $('#sort').click(() => {
        sort(arrayContainer[0]);
    });

});
