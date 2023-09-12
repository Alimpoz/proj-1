import {AstonMartin} from "./m.js";
import {Spl} from "./m.js";
let wrapImg = document.createElement('div')
wrapImg.className = "wrapImg";
const body = document.querySelector("#body")
const mainButton = document.querySelector(".mainButton")
const wrapper = document.querySelector(".wrapper")
const finish = document.createElement("div")
finish.className ="finish"
export const massCars = []
export const massImg = ["AstonMartinC","AudiC","BMWC","BugattiC","BuickC","DaciaC","DodgeC","FiatC","FordС","GeelyС","GreatС","HondaС","MazdaС","MersedesС","OpelС","LexusС"]
export const massImgTwo = ["AstonMartin2С","Audi2С","BMW2С","Bugatti2C","Buick2С","Dacia2С","Dodge2С","Fiat2С","Ford2С","Geely2С","Great2С","Honda2С","Mazda2С","Mersedes2С","Opel2С","Lexus2С"]
mainButton.addEventListener("click",()=>{
    mainButton.remove(".mainButton") 
    wrapper.remove(".wrapper")
    body.append(wrapImg)
    AstonMartin(wrapImg)
    console.log()
})
export const AstonMartinC = document.createElement('div')
AstonMartinC.className = "carsImg";
AstonMartinC.id = "AstonMartin"

export const AudiC = document.createElement('div')
AudiC.className = "carsImg";
AudiC.id = "Audi"

export const BMWC = document.createElement('div')
BMWC.className = "carsImg";
BMWC.id = "BMW"

export const BugattiC = document.createElement('div')
BugattiC.className = "carsImg";
BugattiC.id = "Bugatti"

export const BuickC = document.createElement('div')
BuickC .className = "carsImg";
BuickC .id = "Buick"

export const DaciaC = document.createElement('div')
DaciaC.className = "carsImg";
DaciaC.id = "Dacia"

export const DodgeC = document.createElement('div')
DodgeC.className = "carsImg";
DodgeC.id = "Dodge"

export const FiatC = document.createElement('div')
FiatC.className = "carsImg";
FiatC.id = "Fiat"

export const FordС = document.createElement('div')
FordС.className = "carsImg";
FordС.id = "Ford"

export const GeelyС = document.createElement('div')
GeelyС.className = "carsImg";
GeelyС.id = "Geely"

export const GreatС = document.createElement('div')
GreatС.className = "carsImg";
GreatС.id = "Great"

export const HondaС = document.createElement('div')
HondaС.className = "carsImg";
HondaС.id = "Honda"

export const LexusС = document.createElement('div')
LexusС.className = "carsImg";
LexusС.id = "Lexus"

export const MazdaС = document.createElement('div')
MazdaС.className = "carsImg";
MazdaС.id = "Mazda"

export const MersedesС = document.createElement('div')
MersedesС.className = "carsImg";
MersedesС.id = "Mersedes"

export const OpelС = document.createElement('div')
OpelС.className = "carsImg";
OpelС.id = "Opel"
export const AstonMartin2С = document.createElement('div')
AstonMartin2С.className = "carsImg";
AstonMartin2С.id = "AstonMartin2"

export const Audi2С = document.createElement('div')
Audi2С.className = "carsImg";
Audi2С.id = "Audi2"

export const BMW2С = document.createElement('div')
BMW2С.className = "carsImg";
BMW2С.id = "BMW2"

export const Dacia2С = document.createElement('div')
Dacia2С.className = "carsImg";
Dacia2С.id = "Dacia2"

export const Bugatti2С = document.createElement('div')
Bugatti2С.className = "carsImg";
Bugatti2С.id = "Bugatti2"

export const Buick2С = document.createElement('div')
Buick2С.className = "carsImg";
Buick2С.id = "Buick2"

export const Dodge2С = document.createElement('div')
Dodge2С.className = "carsImg";
Dodge2С.id = "Dodge2"

export const Fiat2С = document.createElement('div')
Fiat2С.className = "carsImg";
Fiat2С.id = "Fiat2"

export const Ford2С = document.createElement('div')
Ford2С.className = "carsImg";
Ford2С.id = "Ford2"

export const Geely2С = document.createElement('div')
Geely2С.className = "carsImg";
Geely2С.id = "Geely2"

export const Great2С = document.createElement('div')
Great2С.className = "carsImg";
Great2С.id = "Great2"

export const Honda2С = document.createElement('div')
Honda2С.className = "carsImg";
Honda2С.id = "Honda2"

export const Lexus2С = document.createElement('div')
Lexus2С.className = "carsImg";
Lexus2С.id = "Lexus2"

export const Mazda2С = document.createElement('div')
Mazda2С.className = "carsImg";
Mazda2С.id = "Mazda2"

export const Mersedes2С = document.createElement('div')
Mersedes2С.className = "carsImg";
Mersedes2С.id = "Mersedes2"

export const Opel2С = document.createElement('div')
Opel2С.className = "carsImg";
Opel2С.id = "Opel2"

AstonMartinC.addEventListener("click",() =>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("AstonMartinC") ===false &&  massImg.includes("AstonMartinC") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Aston-Martin.jpg"
        img.id = "AstonMartinC"
        AstonMartinC.append(img)
        const AMP = massCars.push("AstonMartinC")
        // setTimeout(() => {
        //     massCars.splice("AstonMartinC")
        //     img.remove(".img") 
        // },massCars.length>2);
    }
    if(massCars.includes("AstonMartinC")===true && massCars.includes("AstonMartin2С")===true){
        function sa16(){
            const a = massImg.indexOf("AstonMartinC")
        const a2 = massImgTwo.indexOf("AstonMartin2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        AstonMartinC.className = "removeImg";
        AstonMartin2С.className = "removeImg";
        }sa16()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})

AudiC.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("AudiC")===false &&  massImg.includes("AudiC") === true){
        console.log(massCars.length)
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Audi.jpg"
        img.id = "AudiC"
        AudiC.append(img)
        const AMP = massCars.push("AudiC")
    }
    if(massCars.includes("AudiC")===true && massCars.includes("Audi2С")===true){
        function sa15(){
            const a = massImg.indexOf("AudiC")
            const a2 = massImgTwo.indexOf("Audi2С")
            const as =massImg.splice(a,1)
            const as2 =massImgTwo.splice(a2,1)
            AudiC.className = "removeImg";
            Audi2С.className = "removeImg";
        }sa15()}
        // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
        //     massImgTwo.splice(0)
        //     massImg.splice(0)
        // }
})
BMWC.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("BMWC")===false &&  massImg.includes("BMWC") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/BMW.jpg"
        img.id = "BMWC"
        BMWC.append(img)
        const AMP = massCars.push("BMWC")
        // setTimeout(() => {
        //     massCars.splice("BMWC")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("BMWC")===true && massCars.includes("BMW2С")===true){
        function sa12(){
            const a = massImg.indexOf("BMWC")
        const a2 = massImgTwo.indexOf("BMW2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        BMWC.className = "removeImg";
        BMW2С.className = "removeImg";
        }sa12()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
BugattiC.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("BugattiC")===false &&  massImg.includes("BugattiC") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Bugatti.jpg"
        img.id = "BugattiC"
        BugattiC.append(img)
        const AMP = massCars.push("BugattiC")
        // setTimeout(() => {
        //     massCars.splice("BugattiC")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("BugattiC")===true && massCars.includes("Bugatti2C")===true){
        function sa11(){
            const a = massImg.indexOf("BugattiC")
        const a2 = massImgTwo.indexOf("Bugatti2C")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        BugattiC.className = "removeImg";
        Bugatti2С.className = "removeImg";
        }sa11()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
BuickC.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("BuickC")===false &&  massImg.includes("BuickC") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/buick.jpg"
        img.id = "BuickC"
        BuickC.append(img)
        const AMP = massCars.push("BuickC")
        // setTimeout(() => {
        //     massCars.splice("BuickC")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("BuickC")===true && massCars.includes("Buick2С")===true){
        function sa10(){
        const a = massImg.indexOf("BuickC")
        const a2 = massImgTwo.indexOf("Buick2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        BuickC.className = "removeImg";
        Buick2С.className = "removeImg";
        }sa10()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
DodgeC.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("DodgeC")===false &&  massImg.includes("DodgeC") === true){
    const img = document.createElement('img')
    img.className = "img";
    img.src = "./img/dodge.jpg"
    img.id = "DodgeC"
    DodgeC.append(img)
    const AMP = massCars.push("DodgeC")
        // setTimeout(() => {
        //     massCars.splice("DodgeC")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("DodgeC")===true && massCars.includes("Dodge2С")===true){
        function sa8(){
            const a = massImg.indexOf("DodgeC")
        const a2 = massImgTwo.indexOf("Dodge2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        DodgeC.className = "removeImg";
        Dodge2С.className = "removeImg";
        }sa8()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
DaciaC.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("DaciaC")===false &&  massImg.includes("DaciaC") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/dacia.jpg"
        img.id = "DaciaC"
        DaciaC.append(img)
        const AMP = massCars.push("DaciaC")
        // setTimeout(() => {
        //     massCars.splice("DaciaC")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("DaciaC")===true && massCars.includes("Dacia2С")===true){
        function sa9(){
            const a = massImg.indexOf("DaciaC")
        const a2 = massImgTwo.indexOf("Dacia2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        DaciaC.className = "removeImg";
        Dacia2С.className = "removeImg";
        }sa9()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
FiatC.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("FiatC")===false &&  massImg.includes("FiatC") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/fiat.jpg"
        img.id = "FiatC"
        FiatC.append(img)
        const AMP = massCars.push("FiatC")
        // setTimeout(() => {
        //     massCars.splice("FiatC")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("FiatC")===true && massCars.includes("Fiat2С")===true){
        function sa7 (){
            const a = massImg.indexOf("FiatC")
        const a2 = massImgTwo.indexOf("Fiat2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        FiatC.className = "removeImg";
        Fiat2С.className = "removeImg";
        }sa7()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
FordС.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("FordС")===false &&  massImg.includes("FordС") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/ford.jpg"
        img.id = "FordС"
        FordС.append(img)
        const AMP = massCars.push("FordС")
        // setTimeout(() => {
        //     massCars.splice("FordС")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("FordС")===true && massCars.includes("Ford2С")===true){
        function sa6(){
            const a = massImg.indexOf("FordС")
        const a2 = massImgTwo.indexOf("Ford2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        FordС.className = "removeImg";
        Ford2С.className = "removeImg";
        }sa6()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
GeelyС.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
if(massCars.includes("GeelyС")===false &&  massImg.includes("GeelyС") === true){
    const img = document.createElement('img')
    img.className = "img";
    img.src = "./img/geely.jpg"
    img.id = "GeelyС"
    GeelyС.append(img)
    const AMP = massCars.push("GeelyС")
    // setTimeout(() => {
    //     massCars.splice("GeelyС")
    //     img.remove(".img") 
    // },2000);
}
if(massCars.includes("GeelyС")===true && massCars.includes("Geely2С")===true){
    function sa5(){
        const a = massImg.indexOf("GeelyС")
    const a2 = massImgTwo.indexOf("Geely2С")
    const as =massImg.splice(a,1)
    const as2 =massImgTwo.splice(a2,1)
    GeelyС.className = "removeImg";
    Geely2С.className = "removeImg";
    }sa5()
}
// if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
//     massImgTwo.splice(0)
//     massImg.splice(0)
// }
})
GreatС.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
if(massCars.includes("GreatС")===false &&  massImg.includes("GreatС") === true){
    const img = document.createElement('img')
    img.className = "img";
    img.src = "./img/great.jpg"
    img.id = "GreatС"
    GreatС.append(img)
    const AMP = massCars.push("GreatС")
    // setTimeout(() => {
    //     massCars.splice("GreatС")
    //     img.remove(".img") 
    // },2000);
}
if(massCars.includes("GreatС")===true && massCars.includes("Great2С")===true){
    function sa4(){
    const a = massImg.indexOf("GreatС")
    const a2 = massImgTwo.indexOf("Great2С")
    const as =massImg.splice(a,1)
    const as2 =massImgTwo.splice(a2,1)
    GreatС.className = "removeImg";
    Great2С.className = "removeImg";
    }sa4()
}
// if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
//     massImgTwo.splice(0)
//     massImg.splice(0)
// }
})
HondaС.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("HondaС")===false &&  massImg.includes("HondaС") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/honda.jpg"
        img.id = "HondaС"
        HondaС.append(img)
        const AMP = massCars.push("HondaС")
        // setTimeout(() => {
        //     massCars.splice("HondaС")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("HondaС")===true && massCars.includes("Honda2С")===true){
        function sa3(){
            const a = massImg.indexOf("HondaС")
            const a2 = massImgTwo.indexOf("Honda2С")
            const as =massImg.splice(a,1)
            const as2 =massImgTwo.splice(a2,1)
            HondaС.className = "removeImg";
            Honda2С.className = "removeImg";
        }sa3()
        
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
LexusС.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("LexusС")===false &&  massImg.includes("LexusС") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Lexus.jpg"
        img.id = "LexusС"
        LexusС.append(img)
        const AMP = massCars.push("LexusС")
        // setTimeout(() => {
        //     massCars.splice("LexusС")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("LexusС")===true && massCars.includes("Lexus2С")===true){
        function sa13(){
            const a = massImg.indexOf("LexusС")
        const a2 = massImgTwo.indexOf("Lexus2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        LexusС.className = "removeImg";
        Lexus2С.className = "removeImg";
        }sa13()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
MazdaС.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("MazdaС")===false &&  massImg.includes("MazdaС") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Mazda.jpg"
        img.id = "MazdaС"
        MazdaС.append(img)
        const AMP = massCars.push("MazdaС")
    }
    if(massCars.includes("MazdaС")===true && massCars.includes("Mazda2С")===true){
        function sa14(){
            const a = massImg.indexOf("MazdaС")
        const a2 = massImgTwo.indexOf("Mazda2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        MazdaС.className = "removeImg";
        Mazda2С.className = "removeImg";
        }sa14()}
        // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
        //     massImgTwo.splice(0)
        //     massImg.splice(0)
        // }
})
MersedesС.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("MersedesС")===false &&  massImg.includes("MersedesС") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Mersedes.jpg"
        img.id = "MersedesС"
        MersedesС.append(img)
        const AMP = massCars.push("MersedesС")
        // setTimeout(() => {
        //     massCars.splice("MersedesС")
        //     img.remove(".img") 
        // },2000);
        
    }
    if(massCars.includes("MersedesС")===true && massCars.includes("Mersedes2С")===true){
        function sa2(){
            const a = massImg.indexOf("MersedesС")
        const a2 = massImgTwo.indexOf("Mersedes2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        MersedesС.className = "removeImg";
        Mersedes2С.className = "removeImg";
        }sa2()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
OpelС.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("OpelС")===false &&  massImg.includes("OpelС") === true){
        const ds = massCars.push("s")
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/opel.jpg"
        img.id = "OpelС"
        OpelС.append(img)
        const AMP = massCars.push("OpelС")
        // setTimeout(() => {
        //     massCars.splice("OpelС")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("OpelС")===true && massCars.includes("Opel2С")===true){
        function sa1(){
            const a = massImg.indexOf("OpelС")
        const a2 = massImgTwo.indexOf("Opel2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        OpelС.className = "removeImg";
        Opel2С.className = "removeImg";
        }sa1()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})





AstonMartin2С.addEventListener("click",() =>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("AstonMartin2С")===false &&  massImgTwo.includes("AstonMartin2С")===true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Aston-Martin.jpg"
        img.id = "AstonMartin2С"
        AstonMartin2С.append(img)
        const AMP = massCars.push("AstonMartin2С")
        // setTimeout(() => {
        //     massCars.splice("AstonMartin2С")
        //     img.remove(".img") 
        // },2000);Two
    }
    if(massCars.includes("AstonMartinC")===true && massCars.includes("AstonMartin2С")===true){
        function sa16(){
            const a = massImg.indexOf("AstonMartinC")
        const a2 = massImgTwo.indexOf("AstonMartin2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        AstonMartinC.className = "removeImg";
        AstonMartin2С.className = "removeImg";
        }sa16()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})



Audi2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }
if(massCars.includes("Audi2С")===false &&  massImgTwo.includes("Audi2С") === true){
    const img = document.createElement('img')
    img.className = "img";
    img.src = "./img/Audi.jpg"
    img.id = "Audi2С"
    Audi2С.append(img)
    const AMP = massCars.push("Audi2С")
    // setTimeout(() => {
    //     massCars.splice("Audi2С")
    //     img.remove(".img") 
    // },2000);
}
if(massCars.includes("AudiC")===true && massCars.includes("Audi2С")===true){
    function sa15(){
        const a = massImg.indexOf("AudiC")
        const a2 = massImgTwo.indexOf("Audi2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        AudiC.className = "removeImg";
        Audi2С.className = "removeImg";
    }sa15()}
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})









BMW2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("BMW2С")===false &&  massImgTwo.includes("BMW2С") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/BMW.jpg"
        img.id = "BMW2С"
        BMW2С.append(img)
        const AMP = massCars.push("BMW2С")
        // setTimeout(() => {
        //     massCars.splice("BMW2С")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("BMWC")===true && massCars.includes("BMW2С")===true){
        function sa12(){
            const a = massImg.indexOf("BMWC")
        const a2 = massImgTwo.indexOf("BMW2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        BMWC.className = "removeImg";
        BMW2С.className = "removeImg";
        }sa12()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
Bugatti2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("Bugatti2C")===false &&  massImgTwo.includes("Bugatti2C") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Bugatti.jpg"
        img.id = "Bugatti2С"
        Bugatti2С.append(img)
        const AMP = massCars.push("Bugatti2C")
        // setTimeout(() => {
        //     massCars.splice("Bugatti2C")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("BugattiC")===true && massCars.includes("Bugatti2C")===true){
        function sa11(){
            const a = massImg.indexOf("BugattiC")
        const a2 = massImgTwo.indexOf("Bugatti2C")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        BugattiC.className = "removeImg";
        Bugatti2С.className = "removeImg";
        }sa11()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
Buick2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("Buick2С")===false &&  massImgTwo.includes("Buick2С") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/buick.jpg"
        img.id = "Buick2С"
        Buick2С.append(img)
        const AMP = massCars.push("Buick2С")
        // setTimeout(() => {
        //     massCars.splice("Buick2С")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("BuickC")===true && massCars.includes("Buick2С")===true){
        function sa10(){
        const a = massImg.indexOf("BuickC")
        const a2 = massImgTwo.indexOf("Buick2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        BuickC.className = "removeImg";
        Buick2С.className = "removeImg";
        }sa10()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
Dodge2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("Dodge2С")===false &&  massImgTwo.includes("Dodge2С") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/dodge.jpg"
        img.id = "Dodge2С"
        Dodge2С.append(img)
        const AMP = massCars.push("Dodge2С")
        // setTimeout(() => {
        //     massCars.splice("Dodge2С")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("DodgeC")===true && massCars.includes("Dodge2С")===true){
        function sa8(){
            const a = massImg.indexOf("DodgeC")
        const a2 = massImgTwo.indexOf("Dodge2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        DodgeC.className = "removeImg";
        Dodge2С.className = "removeImg";
        }sa8()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
Dacia2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
if(massCars.includes("Dacia2С")===false &&  massImgTwo.includes("Dacia2С") === true){
    const img = document.createElement('img')
    img.className = "img";
    img.src = "./img/dacia.jpg"
    img.id = "Dacia2С"
    Dacia2С.append(img)
    const AMP = massCars.push("Dacia2С")
    // setTimeout(() => {
    //     massCars.splice("Dacia2С")
    //     img.remove(".img") 
    // },2000);
}
if(massCars.includes("DaciaC")===true && massCars.includes("Dacia2С")===true){
    function sa9(){
        const a = massImg.indexOf("DaciaC")
    const a2 = massImgTwo.indexOf("Dacia2С")
    const as =massImg.splice(a,1)
    const as2 =massImgTwo.splice(a2,1)
    DaciaC.className = "removeImg";
    Dacia2С.className = "removeImg";
    }sa9()
}
// if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
//     massImgTwo.splice(0)
//     massImg.splice(0)
// }
})
Fiat2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
if(massCars.includes("Fiat2С")===false &&  massImgTwo.includes("Fiat2С") === true){
    const img = document.createElement('img')
    img.className = "img";
    img.src = "./img/fiat.jpg"
    img.id = "Fiat2С"
    Fiat2С.append(img)
    const AMP = massCars.push("Fiat2С")
    // setTimeout(() => {
    //     massCars.splice("Fiat2С")
    //     img.remove(".img") 
    // },2000);
}
if(massCars.includes("FiatC")===true && massCars.includes("Fiat2С")===true){
    function sa7 (){
        const a = massImg.indexOf("FiatC")
    const a2 = massImgTwo.indexOf("Fiat2С")
    const as =massImg.splice(a,1)
    const as2 =massImgTwo.splice(a2,1)
    FiatC.className = "removeImg";
    Fiat2С.className = "removeImg";
    }sa7()
}
// if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
//     massImgTwo.splice(0)
//     massImg.splice(0)
// }
})
Ford2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
if(massCars.includes("Ford2С")===false &&  massImgTwo.includes("Ford2С") === true){
    const img = document.createElement('img')
    img.className = "img";
    img.src = "./img/ford.jpg"
    img.id = "Ford2С"
    Ford2С.append(img)
    const AMP = massCars.push("Ford2С")
    // setTimeout(() => {
    //     massCars.splice("Ford2С")
    //     img.remove(".img") 
    // },2000);
}
if(massCars.includes("FordС")===true && massCars.includes("Ford2С")===true){
    function sa6(){
        const a = massImg.indexOf("FordС")
    const a2 = massImgTwo.indexOf("Ford2С")
    const as =massImg.splice(a,1)
    const as2 =massImgTwo.splice(a2,1)
    FordС.className = "removeImg";
    Ford2С.className = "removeImg";
    }sa6()
}
// if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
//     massImgTwo.splice(0)
//     massImg.splice(0)
// }
})
Geely2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("Geely2С")===false &&  massImgTwo.includes("Geely2С") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/geely.jpg"
        img.id = "Geely2С"
        Geely2С.append(img)
        const AMP = massCars.push("Geely2С")
        // setTimeout(() => {
        //     massCars.splice("Geely2С")
        //     img.remove(".img") 
        // },2000);
        }
        if(massCars.includes("GeelyС")===true && massCars.includes("Geely2С")===true){
            function sa5(){
                const a = massImg.indexOf("GeelyС")
            const a2 = massImgTwo.indexOf("Geely2С")
            const as =massImg.splice(a,1)
            const as2 =massImgTwo.splice(a2,1)
            GeelyС.className = "removeImg";
            Geely2С.className = "removeImg";
            }sa5()
        }
        // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
        //     massImgTwo.splice(0)
        //     massImg.splice(0)
        // }
})
Great2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("Great2С")===false &&  massImgTwo.includes("Great2С") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/great.jpg"
        img.id = "Great2С"
        Great2С.append(img)
        const AMP = massCars.push("Great2С")
        // setTimeout(() => {
        //     massCars.splice("Great2С")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("GreatС")===true && massCars.includes("Great2С")===true){
        function sa4(){
        const a = massImg.indexOf("GreatС")
        const a2 = massImgTwo.indexOf("Great2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        GreatС.className = "removeImg";
        Great2С.className = "removeImg";
        }sa4()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
Honda2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("Honda2С")===false &&  massImgTwo.includes("Honda2С") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/honda.jpg"
        img.id = "Honda2С"
        Honda2С.append(img)
        const AMP = massCars.push("Honda2С")
        // setTimeout(() => {
        //     massCars.splice("Honda2С")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("HondaС")===true && massCars.includes("Honda2С")===true){
        function sa3(){
            const a = massImg.indexOf("HondaС")
            const a2 = massImgTwo.indexOf("Honda2С")
            const as =massImg.splice(a,1)
            const as2 =massImgTwo.splice(a2,1)
            HondaС.className = "removeImg";
            Honda2С.className = "removeImg";
        }sa3()
        
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
Lexus2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("Lexus2С")===false &&  massImgTwo.includes("Lexus2С") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Lexus.jpg"
        img.id = "Lexus2С"
        Lexus2С.append(img)
        const AMP = massCars.push("Lexus2С")
        // setTimeout(() => {
        //     massCars.splice("Lexus2С")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("LexusС")===true && massCars.includes("Lexus2С")===true){
        function sa13(){
            const a = massImg.indexOf("LexusС")
        const a2 = massImgTwo.indexOf("Lexus2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        LexusС.className = "removeImg";
        Lexus2С.className = "removeImg";
        }sa13()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
Mazda2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("Mazda2С")===false &&  massImgTwo.includes("Mazda2С") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Mazda.jpg"
        img.id = "Mazda2С"
        Mazda2С.append(img)
        const AMP = massCars.push("Mazda2С")
        // setTimeout(() => {
        //     massCars.splice("Mazda2С")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("MazdaС")===true && massCars.includes("Mazda2С")===true){
        function sa14(){
            const a = massImg.indexOf("MazdaС")
        const a2 = massImgTwo.indexOf("Mazda2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        MazdaС.className = "removeImg";
        Mazda2С.className = "removeImg";
        }sa14()}
        // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
        //     massImgTwo.splice(0)
        //     massImg.splice(0)
        // }
})
Mersedes2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
        const s = massCars.indexOf("s")
        massCars.splice(s,1)
        }
    if(massCars.includes("Mersedes2С")===false &&  massImgTwo.includes("Mersedes2С") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/Mersedes.jpg"
        img.id = "Mersedes2С"
        Mersedes2С.append(img)
        const AMP = massCars.push("Mersedes2С")
        // setTimeout(() => {
        //     massCars.splice("Mersedes2С")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("MersedesС")===true && massCars.includes("Mersedes2С")===true){
        function sa2(){
            const a = massImg.indexOf("MersedesС")
        const a2 = massImgTwo.indexOf("Mersedes2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        MersedesС.className = "removeImg";
        Mersedes2С.className = "removeImg";
        }sa2()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
Opel2С.addEventListener("click",()=>{
    const ds = massCars.push("s")
    if(massCars.length>2){
        Spl()
        massCars.splice(0)
    }if(massCars.includes("s")===true){
    const s = massCars.indexOf("s")
    massCars.splice(s,1)
    }
    if(massCars.includes("Opel2С")===false &&  massImgTwo.includes("Opel2С") === true){
        const img = document.createElement('img')
        img.className = "img";
        img.src = "./img/opel.jpg"
        img.id = "Opel2С"
        Opel2С.append(img)
        const AMP = massCars.push("Opel2С")
        // setTimeout(() => {
        //     massCars.splice("Opel2С")
        //     img.remove(".img") 
        // },2000);
    }
    if(massCars.includes("OpelС")===true && massCars.includes("Opel2С")===true){
        function sa1(){
            const a = massImg.indexOf("OpelС")
        const a2 = massImgTwo.indexOf("Opel2С")
        const as =massImg.splice(a,1)
        const as2 =massImgTwo.splice(a2,1)
        OpelС.className = "removeImg";
        Opel2С.className = "removeImg";
        }sa1()
    }
    // if (massCars.length===2 && massImg.length===1 && massImgTwo.length ===1){
    //     massImgTwo.splice(0)
    //     massImg.splice(0)
    // }
})
const hod = []
const cards2 = document.querySelector(".img")
const carsImg = document.querySelector(".carsImg")
body.addEventListener("click",()=>{
    console.log(massImg)
    console.log(massImgTwo)
    console.log(massCars)
    if(massCars.length ===2){
        hod.push(1)
        const ps = hod.length
        if (massImg.length===0 && massImgTwo.length ===0){
            wrapImg.remove(".wrapImg")
            body.append(finish)
            massCars.splice(0)
            finish.innerHTML =`<h2 class="h2Finish">Финиш! Вы прошли игру за ${hod.length} хода</h2>`
        }
    }
})

//Fiat2C,BMW2C,Dacia2C,

