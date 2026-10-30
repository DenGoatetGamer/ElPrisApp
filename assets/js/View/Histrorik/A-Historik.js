import { navbar } from "../NavBar.js"
import { CogSettings } from "../Forside/cogKnap.js"
import { H_Overskrift } from "./Historie_overskrift.js"
import { dato } from "./DateInput.js"
import { DatoP } from "./DatoP.js"
import { API } from "../../Model/API.js"


export async function HistorikSite() {
    
    let selectedDate = new Date().toISOString()
    const app=document.getElementById("app")
    let data=await API(selectedDate)
    console.log(data)
    app.innerHTML=""
    navbar()
    CogSettings()
    H_Overskrift()
    dato()
    // DatoP()
    const input=document.getElementById("input")
    
     input.addEventListener("change", async(e) => {
        selectedDate=e.target.value
        console.log(e.target.value)
        data=await API(selectedDate)
        console.log(data)
        if (input.value) {
            // heading.replaceChildren(DatoP(input.value))
            // DataInfo(input.value, result)
        }
    })

    data.forEach(element => {
        const Kl=document.createElement("P")
        const pris=document.createElement("P")
        const div=document.createElement("div")

        Kl.innerText=element.time_start.substring(11,16);
        pris.innerText=element.DKK_per_kWh
        
        div.appendChild(pris)
        div.appendChild(Kl)
        app.appendChild(div)

    });

    
}