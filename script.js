
function calculate() {
    const input = document.querySelector("input").value
    const inches = parseInt(input)
    const meters = inches * 0.0254
    const result = inches + " inches = " + meters + " meters"
    const screen = document.querySelector("p")
    screen.textContent = result
}


const btn = document.querySelector("button")
btn.onclick = calculate