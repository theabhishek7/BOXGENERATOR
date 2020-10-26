let button = document.getElementById("theBoxes");
button.addEventListener("click", myFunction);


let oldvalue = 0;
let i = 1;

function myFunction() {
    let n = document.getElementById('number').value;
    n = parseInt(oldvalue) + parseInt(n);
    for (; i <= n; i++) {
        let box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;

        oldvalue = document.getElementById('box').lastElementChild.innerHTML;
        console.log(oldvalue);
    }
}