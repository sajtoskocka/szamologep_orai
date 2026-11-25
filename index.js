let elsoSzamjegySzovege = "" /* valtozot létrehotuk es beallitottuk az erteket nullara */
let masodikSzamjegySzovege = ""
let muvelet = ""    

const szamok = document.getElementsByClassName("szam")
const fosok = document.getElementsByClassName("fos")
const kiiro = document.getElementById("kiirato")
const egyenlo = document.getElementById("egyenlo")
console.log(szamok[0].textContent)

for (let index = 0; index < szamok.length; index++) {
    szamok[index].addEventListener("click", beir)
}




function beir(event){
    /* az input mezőben írja be a számokat amikre kattintunk */
    console.log(event.target)
    console.log(event.target.textContent)
    console.log
    kiiro.value += event.target.textContent  /* az input elembe beleírja annak az elemnek az értékét amire rákattintunk */
    /* input elemnek value ja van */
}

/* ha rákattintunl egy műveleti jelre */


for (let index = 0; index < fosok.length; index++) {

    fosok[index].addEventListener("click", muveletElvegzese)
}


function muveletElvegzese(event
){
    elsoSzamjegySzovege = kiiro.value
    console.log(elsoSzamjegySzovege)
    console.log(event.target.textContent)
    muvelet = event.target.textContent
    kiiro.value = ""
}

/* az egyenloseg jel müködése 
1. ha rakkattintunk a = jelre
2. akkor a masodikSzamjegySzovege */


egyenlo.addEventListener("click", szamolas)

function szamolas(){
    masodikSzamjegySzovege = kiiro.value
    let eredmeny = 0
    if (muvelet== "+"){
        eredmeny = Number(elsoSzamjegySzovege) + Number(masodikSzamjegySzovege)
    }
    else if(muvelet == "-"){
        eredmeny = Number(elsoSzamjegySzovege) - Number(masodikSzamjegySzovege)
    }
    else if(muvelet == "*"){
        eredmeny = Number(elsoSzamjegySzovege) * Number(masodikSzamjegySzovege)
    }
    else if(muvelet == "/" && masodikSzamjegySzovege != 0){
        eredmeny = Number(elsoSzamjegySzovege) / Number(masodikSzamjegySzovege)
    }
    
    kiiro.value = eredmeny


}

const torles = document.getElementById("torles")

torles.addEventListener("click", kitorles)

function kitorles(){
    kiiro.value = ""
    elsoSzamjegySzovege = ""
}