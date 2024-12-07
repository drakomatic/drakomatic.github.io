var projects = [
    {
        "Name": "What's my pokemon type?",
        "Desc": "A little website I made that turns your name (or any text) into a pokemon type!",
        "Link": "./whatsmypokemontype/",
        "img": "./whatsmypokemontype/PreviewLogo.png"
    }
]

function loadprojs(){
    //get template so we can copy it for each project
    var template = document.getElementById("project-template")
    var listdiv = document.getElementById("mcont") 

    for (var proj in projects){
        var copy = template.content.cloneNode(true);
        copy.querySelector('a').href = projects[proj].Link
        copy.querySelector('h3').innerText = projects[proj].Name
        copy.querySelector('p').innerText = projects[proj].Desc
        copy.querySelector('.project-img').src = projects[proj].img
        listdiv.appendChild(copy)
    }
}