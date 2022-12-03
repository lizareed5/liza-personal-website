const h2 = document.createElement("h2");
h2.textContent = "i'm liza";
document.querySelector("body").appendChild(h2);

function show() {
    document.getElementById('fullGarden')
        .style.display = "block";
    document.getElementById('gardenButton')
        .style.display = "none";
}