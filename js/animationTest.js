function createSubArray(arr, from, to) {
    let container = $('<div></div>').addClass('array-container');
    for (let i = from; i < to; i++) {
        let value = $('<p></p>').text(arr.childNodes[i].firstChild.innerHTML);
        let element = $('<div></div>').addClass('array-element');
        container.append(element.append(value));
    }
    return container;
}


function merge() {

}

async function sort(arr) {

    // Base case

    if (arr.childNodes.length <= 1)
        return;

    // Divide array

    let middle = Math.floor(arr.childNodes.length / 2);
    let half1 = createSubArray(arr, 0, middle);
    let half2 = createSubArray(arr, middle, arr.childNodes.length);

    const sideMargin = 20;
    const topMargin = 20;

    // Append and animate half 1

    $('section.animation-zone').append(half1);

    $(half1).css({
        'left': `${$(arr).position().left - sideMargin}px`,
        'top': `${$(arr).position().top + $(arr).height() + topMargin}px`
    });

    await animateDivision(half1[0], '+', topMargin);

    // Append and animate half 2

    $('section.animation-zone').append(half2);

    $(half2).css({
        'left': `${$(half1).position().left + $(half1).width() + sideMargin * 2}px`,
        'top': `${$(half1).position().top}px`
    });

    await animateDivision(half2[0], '-', topMargin);

    // sort resulting halves recursively

    await sort(half1[0]);
    // await sort(half2[0]);


}

function animateDivision(half, dir, topMargin) {
    return new Promise(resolve => {
        half.animate({
            transform: [
                `translate(${dir}10px, ${-$(half).height() - 10}px)`,
                'translate(0, 0)'
            ]
        }, 500);
        setTimeout(() => {
            resolve();
        }, 500);
    });
}
