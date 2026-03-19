let urlSearch = window.location.search
// let url = window.location.href

if (urlSearch.includes("?")) {
    console.log(urlSearch);
    let kerdes = urlSearch.split("?")[1]
    // console.log("kerdes: ", kerdes)
    let kerdesParok = kerdes.split("&")
    console.log(kerdesParok);
    let fovaros = ""
    let vizeses = ""
    for (let i = 0; i < kerdesParok.length; i++) {
        console.log(kerdesParok[i]);
        if (kerdesParok[i].startsWith("fovaros")) {
            fovaros = kerdesParok[i].split("=")[1] 

        } else if (kerdesParok[i].startsWith("vizeses")) {
            vizeses = kerdesParok[i].split("=")[1]
            console.log("VIZESÉS", vizeses);
            
        }


    }
    let latnivalok = []
    let latnivalokSzoveg = ""
    for (let i = 0; i < kerdesParok.length; i++) {
        if (kerdesParok[i].startsWith("latnivalo")) {
            latnivalok.push(kerdesParok[i].split("=")[1])
        }
    }

let vizesesEredmenye = document.getElementById("vizeses_eredmenye")
if(vizeses === "Gullfoss") {
    vizesesEredmenye.innerHTML = `<p style="color: green;">A választott vízesés (${vizeses}) a helyes válasz!</p>`
}else{
    vizesesEredmenye.innerHTML = `<p style="color: red;">A választott vízesés (${vizeses}) nem a helyes válasz!</p>`
}

    latnivalokSzoveg = latnivalok.join(", ")
    console.log(latnivalok);
    console.log(latnivalokSzoveg);

    let felhasznaloBevitelEredmenye = document.getElementById("felhasználói_input")
    felhasznaloBevitelEredmenye.innerHTML = `
<h3>A felhasználó válasza</h3>
    <p>1. ${fovaros}</p>
    <p>2. ${vizeses}</p>
    <p>3. ${latnivalokSzoveg}</p>
    `
}
