const container = document.querySelector("#container");
container.style.display = 'grid';
container.style['grid-template-columns'] = 'repeat(16, 1fr)';
container.style['grid-template-rows'] = 'repeat(16, 1fr)';
console.log(container)

for (var row = 1; row <= 16; row++) {
    for (var column = 1; column <= 16; column++) {
        let square = document.createElement('div')
        square.classList.add('square')
        square.style.backgroundColor = 'lightgreen'
        container.appendChild(square)
    }
}

const allSquares = document.querySelectorAll('.square')
allSquares.forEach( square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = 'black'
    })
})


