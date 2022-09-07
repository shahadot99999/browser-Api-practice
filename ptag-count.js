//console.log('hello world');  
let count = 0;
const countField = document.getElementById('number');
const addNumber = () => {
    count++;
    countField.innerText = count;
    localStorage.setItem("counter", count);
    const getNumber = localStorage.getItem("counter");
    return getNumber;
}


