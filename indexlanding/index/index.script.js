function loadSlider() {
    slidePrev();
}

function slidePrev() {
    document.getElementById('secondSlider').style = 'animation: slider-Right-To-Mid 0.75s forwards ease-in-out;';
    document.getElementById('firstSlider').style = 'animation: slider-Mid-To-Left 0.75s forwards ease-in-out;';
}

function slideNext() {
    document.getElementById('firstSlider').style = 'animation: slider-Left-To-Mid 0.75s forwards ease-in-out;';
    document.getElementById('secondSlider').style = 'animation: slider-Mid-To-Right 0.75s forwards ease-in-out;';
}