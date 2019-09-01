const sideMargin = 20;
const topMargin = 20;
const timeout = 155;

function createSubArray(arr, from, to) {
    let container = $('<div></div>').addClass('array-container');
    for (let i = from; i < to; i++) {
        let value = $('<p></p>').text($(arr.childNodes[i]).text());
        let element = $('<div></div>').addClass('array-element');
        container.append(element.append(value));
    }
    return container[0];
}


async function merge(arr1, arr2, target) {
    let i1 = 0, i2 = 0, i3 = 0;
    
    while (i1 < arr1.childNodes.length && i2 < arr2.childNodes.length) {
        if (parseInt($(arr1.childNodes[i1]).text()) <
            parseInt($(arr2.childNodes[i2]).text())
        ) {
            await animateMergeAlgorithmPlacement(
                arr1.childNodes[i1], 
                target.childNodes[i3]
            );
            $(target.childNodes[i3]).html(
                $(arr1.childNodes[i1]).html()
            );
            $(arr1.childNodes[i1++]).css('opacity', '0');
            $(target.childNodes[i3++]).css('background', '#21db37');
        }
        else {
            await animateMergeAlgorithmPlacement(
                arr2.childNodes[i2], 
                target.childNodes[i3]
            );
            $(target.childNodes[i3]).html(
                $(arr2.childNodes[i2]).html()
            );
            $(arr2.childNodes[i2++]).css('opacity', '0');
            $(target.childNodes[i3++]).css('background', '#21db37');
        }
    }
    while (i1 < arr1.childNodes.length) {
        await animateMergeAlgorithmPlacement(
            arr1.childNodes[i1], 
            target.childNodes[i3]
        );
        $(target.childNodes[i3]).html(
            $(arr1.childNodes[i1]).html()
        );
        $(arr1.childNodes[i1++]).css('opacity', '0');
        $(target.childNodes[i3++]).css('background', '#21db37');
    }
    while (i2 < arr2.childNodes.length) {
        await animateMergeAlgorithmPlacement(
            arr2.childNodes[i2], 
            target.childNodes[i3]
        );
        $(target.childNodes[i3]).html(
            $(arr2.childNodes[i2]).html()
        );
        $(arr2.childNodes[i2++]).css('opacity', '0');
        $(target.childNodes[i3++]).css('background', '#21db37');
    }
}

async function sort(arr) {

    // Base case

    if (arr.childNodes.length <= 1)
        return;

    // Divide array

    let middle = Math.floor(arr.childNodes.length / 2);
    let half1 = createSubArray(arr, 0, middle);
    let half2 = createSubArray(arr, middle, arr.childNodes.length);

    // Append and animate half 1

    $('section.animation-zone').append(half1);

    $(half1).css({
        'left': `${$(arr).position().left - sideMargin}px`,
        'top': `${$(arr).position().top + $(arr).height() + topMargin}px`
    });

    await animateDivision(half1, '+', topMargin);

    // Append and animate half 2

    $('section.animation-zone').append(half2);

    $(half2).css({
        'left': `${$(half1).position().left + $(half1).width() + sideMargin * 2}px`,
        'top': `${$(half1).position().top}px`
    });

    await animateDivision(half2, '-', topMargin);

    // sort resulting halves recursively

    await sort(half1);
    await sort(half2);

    await merge(half1, half2, arr);
}

function animateDivision(half, dir) {
    return new Promise(resolve => {
        half.animate({
            transform: [
                `translate(${dir}10px, ${-$(half).height() - topMargin}px)`,
                'translate(0, 0)'
            ]
        }, timeout);
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}

function animateMergeAlgorithmPlacement(element, target) {
    return new Promise(resolve => {
        element.animate({
            transform: [
                'translate(0, 0)',
                `translate(
                    ${$(target).offset().left - $(element).offset().left}px,
                    ${$(target).offset().top - $(element).offset().top}px
                )`
            ]
        }, timeout); 
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}
