export function DatoP(date){
    const paragraph=document.createElement("p")
    const selectedDate=new Date(`${date}T12:00:00Z`)
    const formattedDate=new Intl.DateTimeFormat("da-DK", {
        timeZone:"UTC",
        day:"numeric",
        month:"long",
        year:"numeric"
    }).format(selectedDate)

    paragraph.innerText=`ElPRISEN D. ${formattedDate}`
    return paragraph
}