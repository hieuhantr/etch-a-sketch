//query container & slider
const slider = document.querySelector('#slider')
const slidercontainer = document.querySelector('#slidercontainer')
console.log(slider)
//create output
const output = document.createElement('output')
output.innerHTML = slider.value + ' x ' + slider.value
slidercontainer.insertBefore(output, slider)

//query grid container
const container = document.querySelector("#container");
//style and create grid
container.style.display = 'grid';

//make grid & hover event
const makeGrid = () => {
    container.style['grid-template-columns'] = `repeat(${slider.value}, 1fr)`
    container.style['grid-template-rows'] = `repeat(${slider.value}, 1fr)`
    for (var row = 1; row <= slider.value; row++) {
        for (var column = 1; column <= slider.value; column++) {
            let square = document.createElement('div')
            square.classList.add('square')
            square.style.backgroundColor = 'lightblue'
            container.appendChild(square)
        }
    }
    const allSquares = document.querySelectorAll('.square')
    allSquares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'blue'
        })
    })
}
makeGrid();

//make output dynamic
const handleChange = () => {
    output.innerHTML = slider.value + ' x ' + slider.value;
    container.innerHTML = '';
    makeGrid();
}
slider.addEventListener('input', handleChange)

