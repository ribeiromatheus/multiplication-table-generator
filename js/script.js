var txtNumber = document.getElementById('txtNumber'),
    btnGenerate = document.getElementById('btnGenerate'),
    ans = document.getElementById('ans');


btnGenerate.addEventListener('click', generate);

function generate() {
    let count = 0;
    if (!validate(txtNumber.value)) {
        while (count <= 10) {
            ans.innerHTML += count + ' X ' + parseFloat(txtNumber.value) + ' = ' + (count * parseFloat(txtNumber.value)) + '<br>';
            count++;
        }
        count = 0;
    }
    return count;
}

function validate(number) {
    let ret = false;
    if (number == '') ret = true;
    return ret;
}