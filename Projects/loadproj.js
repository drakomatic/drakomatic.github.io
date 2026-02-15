class project{
    constructor(Name, Description, Link, Image){
        this.Name = Name
        this.Description = Description
        this.Link = Link
        this.Image = Image
    }
}

var projects = [
    new project(
        "Fetchmon",
        "A discord bot written in rust themed after Renamon from hit series Digimon by Bandai Namco.",
        "https://github.com/drakomatic/Fetchmon",
        "/Projects/external/FetchmonBanner.png"
    ),
    new project(
        "LyntCleaner",
        "A plugin for now defunct social media website Lynter, meant to make it a bit easier on the eyes. It's source code is now public to be reused if someone rehosts or remakes the website.",
        "https://github.com/drakomatic/LyntCleaner/tree/main/Shared",
        "/Projects/external/LyntCleanerBanner.png"
    ),
    new project(
        "What's my pokemon type?",
        "A little website I made that turns your name (or any text) into a pokemon type!",
        "./whatsmypokemontype/",
        "./whatsmypokemontype/PreviewLogo.png"
    )
]

function loadprojs(){
    //get template so we can copy it for each project
    var template = document.getElementById("project-template")
    var listdiv = document.getElementById("mcont") 

    for (var proj in projects){
        var copy = template.content.cloneNode(true);
        copy.querySelector('a').href = projects[proj].Link
        copy.querySelector('h3').innerText = projects[proj].Name
        copy.querySelector('p').innerText = projects[proj].Description
        copy.querySelector('.project-img').src = projects[proj].Image
        listdiv.appendChild(copy)
    }
}