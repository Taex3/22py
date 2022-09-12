$('.balloon').on('click', function (event) {
    var balloon = $(this);

    // Size
    var size = balloon.width() + 10;
    if (size > 420)
        size = 200;
    balloon.width(size);
    balloon.height(size);
    balloon.css('border-radius', size.toString() + 'px');

    // Color
    var currentColor = balloon.css('background-color');
    var newColor;
    if (currentColor === 'rgb(255, 0, 0)') // red
        newColor = 'green';
    else if (currentColor === 'rgb(0, 128, 0)') // green
        newColor = 'blue';
    else
        newColor = 'red';
    balloon.css('background-color', newColor);
});

$('.balloon').on('mouseleave', function (event) {
    var balloon = $(this);

    // Size
    var size = balloon.width() - 5;
    if (size < 200)
        size = 200;
    balloon.width(size);
    balloon.height(size);
    balloon.css('border-radius', size.toString() + 'px');

    // Color
    var currentColor = balloon.css('background-color');
    var newColor;
    if (currentColor === 'rgb(255, 0, 0)') // red
        newColor = 'blue';
    else if (currentColor === 'rgb(0, 128, 0)') // green
        newColor = 'red';
    else
        newColor = 'green';
    balloon.css('background-color', newColor);
});