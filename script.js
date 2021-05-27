// opdracht 1
const animalButtons = document.getElementsByClassName("big-five-button");
const arrayBigFive = Array.from(animalButtons);
const spottedAnimals = document.getElementById("spotted-animals-list");

arrayBigFive.forEach(function(animal){
        animal.addEventListener("click", addToSpottedList);
})

function addToSpottedList(event){
        const index = (arrayBigFive.indexOf(event.target));
        console.log(index);
        const animal = arrayBigFive[index].textContent;
        const newLi = document.createElement("li");
        const node = document.createTextNode(animal);
        newLi.appendChild(node);
        newLi.classList.add("spotted-animals-list-item");
        spottedAnimals.appendChild(newLi);
}

// nakijken opdracht 1
// opdracht 1
const animalButtons = document.querySelectorAll(".big-five-button");
​
const spottedAnimals = document.querySelector("#spotted-animals-list");
​
animalButtons.forEach(function (animalButton) {
    animalButton.addEventListener("click", addToSpottedList);
})
​
function addToSpottedList(event) {
    const newP = document.createElement("p");
    newP.innerHTML = event.target.innerHTML;
    const newLi = document.createElement("li");
    newLi.appendChild(newP);
    newLi.classList.add("spotted-animals-list-item");
    spottedAnimals.appendChild(newLi);
}

// opdracht 2
const removeFirstItemBtn = document.getElementById("remove-first-item-button");

removeFirstItemBtn.addEventListener("click", removeFirst);

function removeFirst(){
        if (spottedAnimals.hasChildNodes()){
        spottedAnimals.removeChild(spottedAnimals.childNodes[0]);
        };
}

// opdracht 3
const removeAllBtn = document.getElementById("remove-all-button");

removeAllBtn.addEventListener("click", removeAll);

function removeAll() {
        spottedAnimals.innerHTML= "";
}


