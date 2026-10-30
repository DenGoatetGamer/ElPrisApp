import { API } from "../../Model/API.js"
export async function Strøm(){
    const KrLigeNu=document.createElement("H2")
    const KWH=document.createElement("P")
    const cirkelLogo=document.createElement("img")
    const app=document.getElementById("app")

    app.appendChild(KrLigeNu)
    app.appendChild(KWH)
    app.appendChild(cirkelLogo)
    
    cirkelLogo.src="assets/img/cirkelLogo.svg"
    KrLigeNu.innerText="Henter elpris..."
    KWH.innerText="PR. KWH"

    try {
        const data=await API()
        const now=Date.now()
        const currentPrice=data.find(period =>
            now >= Date.parse(period.time_start) &&
            now < Date.parse(period.time_end)
        )

        KrLigeNu.innerText=currentPrice
            ? `${currentPrice.DKK_per_kWh.toLocaleString("da-DK")} kr.`
            : "Ingen elpris tilgængelig lige nu"
    } catch (error) {
        console.error("Kunne ikke hente elprisen:", error)
        KrLigeNu.innerText="Kunne ikke hente elprisen"
    }
}