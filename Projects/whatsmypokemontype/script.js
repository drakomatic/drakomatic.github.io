// The array content is an link to an image, which will make this prettier, look at the comments for each type
var Types = ["https://www.serebii.net/pokedex-bw/type/normal.gif", // Normal
    "https://www.serebii.net/pokedex-bw/type/fire.gif", // Fire
    "https://www.serebii.net/pokedex-bw/type/water.gif", // Water
    "https://www.serebii.net/pokedex-bw/type/electric.gif", // Electric
    "https://www.serebii.net/pokedex-bw/type/grass.gif", // Grass
    "https://www.serebii.net/pokedex-bw/type/ice.gif", // Ice
    "https://www.serebii.net/pokedex-bw/type/fighting.gif", // Fighting
    "https://www.serebii.net/pokedex-bw/type/poison.gif", // Poison
    "https://www.serebii.net/pokedex-bw/type/ground.gif", // Ground
    "https://www.serebii.net/pokedex-bw/type/flying.gif", // Flying
    "https://www.serebii.net/pokedex-bw/type/psychic.gif", // Psychic
    "https://www.serebii.net/pokedex-bw/type/bug.gif", // Bug
    "https://www.serebii.net/pokedex-bw/type/rock.gif", // Rock
    "https://www.serebii.net/pokedex-bw/type/ghost.gif", // Ghost
    "https://www.serebii.net/pokedex-bw/type/dragon.gif", // Dragon
    "https://www.serebii.net/pokedex-bw/type/dark.gif", // Dark
    "https://www.serebii.net/pokedex-bw/type/steel.gif", // Steel
    "https://www.serebii.net/pokedex-bw/type/fairy.gif"]; // Fairy

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function MakeTypeImage(type, parent){
    var NewImg = document.createElement("img")
    NewImg.src = type
    NewImg.className = "Typeimg"
    parent.appendChild(NewImg)
}

function UpdateBox(){
    var Namebox = document.getElementById("Namebox");
    var DivParent = document.getElementById("TypeImages");

    var numtypes = Types.length - 1

    var currentHash = Math.abs(Namebox.value.hashCode())
    
    var FirstType = Types[currentHash % numtypes]
    var SecondType = Types[Math.floor(currentHash * 137 / 200) % numtypes]

    DivParent.innerHTML = ""

    if (FirstType == SecondType) {
        //text.innerText = FirstType
        MakeTypeImage(FirstType, DivParent)
    } else {
        //text.innerText = FirstType + " and " + SecondType
        MakeTypeImage(FirstType, DivParent)
        MakeTypeImage(SecondType, DivParent)
    }
}