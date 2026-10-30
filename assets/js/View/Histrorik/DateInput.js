export function dato(){
    const app=document.getElementById("app")
    const input=document.createElement("input")

    input.id="input"
    input.type="date"
    input.min="18"
    // input.max="7"
    app.appendChild(input)
}