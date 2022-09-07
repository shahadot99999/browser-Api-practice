//console.log('hello world');
document.getElementById('btn-name-click').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    localStorage.setItem('name', nameValue);
})

document.getElementById('btn-age-click').addEventListener('click', function () {

    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    alert(ageValue);

    localStorage.setItem('age', ageValue);
})

document.getElementById('btn-name-remove').addEventListener('click', function () {
    localStorage.removeItem('name');
})

document.getElementById('btn-age-remove').addEventListener('click', function () {
    localStorage.removeItem('age');
})

document.getElementById('clear-element').addEventListener('click', function () {
    localStorage.clear();
})

const myObject = {
    FirstName: "Abraham",
    lastName: "Linkon",


}

window.localStorage.setItem("myObject", JSON.stringify(myObject));

let newObject = window.localStorage.getItem("myObject");
console.log(JSON.parse(newObject));