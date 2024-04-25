

let val1 = + document.querySelector("#value1").value
let val2 = + document.querySelector("#value2").value

let result = val1 + val2

document.querySelector("#value1").addEventListener('input', function (e) {
    val1 = + e.target.value;
    console.log(val1);
    result = val1 + val2
    document.querySelector("#output").textContent = result;
    
})


document.querySelector("#value2").addEventListener("input" , function (e) {
    val2 = + e.target.value;
    console.log(val2)
    result = val1 + val2
    document.querySelector("#output").textContent = result;

})


document.querySelector("#output").textContent = result;

console.log(val1, val2, result);