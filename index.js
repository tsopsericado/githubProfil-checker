// const APIURL = "https:api.github.com/users/";
// const form = document.getElementById("form")
// const main = document.getElementById("main")
// const search = document.getElementById("search");

// //click search 
// form.addEventListener("submit", (e) =>{
//    e.preventDefault()
// })



function getprofilinfos() {
    fetch("https:api.github.com/users/").then((response) => response.json()).then((data)=> {
        console.log(data);
    }).catch((err) =>{
        console.log("profil infos not found", err)
    })
}