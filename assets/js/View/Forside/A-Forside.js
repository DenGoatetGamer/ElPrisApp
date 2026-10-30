import { CogSettings } from "./cogKnap.js";
import { NuTid } from "./NuTid.js";
import { Overskrift } from "./Overskrift.js";
import { Strøm } from "./StrømTeller.js";
import { navbar } from "../NavBar.js";
const app=document.getElementById("app")
export function forside(){

    
    app.innerHTML=""
    navbar()
    CogSettings()
    Overskrift()
    Strøm()
    NuTid()
}