import { forside } from "./Forside/A-Forside.js"
import { HistorikSite } from "./Histrorik/A-Historik.js"

export function navbar(){
const logo=document.createElement("img")
const Oversigt=document.createElement("button")
const LigeNu=document.createElement("button")
const Historik=document.createElement("button")
const nav=document.createElement("nav")
const knapdiv=document.createElement("div")

const app=document.getElementById("app")

nav.appendChild(logo)
knapdiv.appendChild(Oversigt)
knapdiv.appendChild(LigeNu)
knapdiv.appendChild(Historik)
nav.appendChild(knapdiv)
app.appendChild(nav)

Oversigt.innerText="Oversigt"
LigeNu.innerText="Lige Nu"
Historik.innerText="Historik"

nav.id="navbar"
Historik.id="HKnap"
LigeNu.id="LKnap"
Oversigt.id="OKnap"
logo.id="logo"


logo.src="assets/img/MainLogo.svg"

LigeNu.addEventListener("click", () =>{
        forside()
        console.log("hej")
    })
        
Historik.addEventListener("click", () =>{
        HistorikSite()
        console.log("hej")
    
    })
}






