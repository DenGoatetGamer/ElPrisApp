export async function API(selectedDate){
let date = selectedDate? new Date(selectedDate):new Date()
let year=date.getFullYear()
let month=date.getMonth()+1
let day=date.getDate()

    const res=await fetch(
        `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_DK2.json`
    )

    if (!res.ok) {
        throw new Error(`Elpris-API returnerede HTTP ${res.status}`)
    }

    const data=await res.json()
    return data


}