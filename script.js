const container = document.querySelector(".container")
const button = document.querySelector("#gridSize")
container.style.gridTemplateRows = `repeat(16, 1fr)`
container.style.gridTemplateColumns = `repeat(16, 1fr)`

const createGrid = (row, col) => {
    for(let i = 0; i < (row * col); i++) {
        const div = document.createElement("div")
        container.appendChild(div).classList.add(i + 1, "grid-items")
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
        div.addEventListener("mouseover", e => {
            div.style.backgroundColor = "black"
        })
    }
}
createGrid(16, 16)

button.addEventListener("click", e => {
    let gridNum = prompt("Choose a grid size between 1 and 100")
    if (gridNum === undefined || gridNum === null || gridNum === "") {
        gridNum = prompt("number is not between 1 and 100, please try again")
        return
    }
    while(gridNum > 100 || gridNum < 0) {
        gridNum = prompt("number is not between 1 and 100, please try again")
    }
    container.innerHTML= ""
    createGrid(gridNum, gridNum)
})