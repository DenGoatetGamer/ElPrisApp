import { API } from "../../Model/API.js"

export async function NuTid(){
    const Tid=document.createElement("p")
    const app=document.getElementById("app")

    Tid.innerText="Henter tidspunkt..."
    app.appendChild(Tid)

    try {
        const data=await API()
        const now=Date.now()
        const currentPeriod=data.find(period =>
            now >= Date.parse(period.time_start) &&
            now < Date.parse(period.time_end)
        )

        if (!currentPeriod) {
            Tid.innerText="Intet aktuelt tidsinterval i API-dataene"
            return
        }

        const formatter=new Intl.DateTimeFormat("da-DK", {
            timeZone:"Europe/Copenhagen",
            hour:"2-digit",
            minute:"2-digit"
        })

        Tid.innerText=`${formatter.format(new Date(currentPeriod.time_start))} - ${formatter.format(new Date(currentPeriod.time_end))}`
    } catch (error) {
        console.error("Kunne ikke hente tidspunktet:", error)
        Tid.innerText="Kunne ikke hente tidspunktet"
    }
}
