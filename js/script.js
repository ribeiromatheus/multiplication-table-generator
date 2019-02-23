var txtNumber = document.getElementById('txtNumber'),
    txtInterval = document.getElementById('txtInterval'),
    btnGenerate = document.getElementById('btnGenerate'),
    ans = document.getElementById('ans');

btnGenerate.addEventListener('click', onClick);

function onClick() {
    let count = 0;
    if (!validate(txtNumber.value)) {
        while (count <= txtInterval.value) {
            ans.innerHTML += parseFloat(txtNumber.value) + ' X ' + count + ' = ' + (parseFloat(txtNumber.value) * count) + '<br>';
            count++;
        }
    }
    return count;
}
//
function validate(number) {
    let ret = false;
    if (number == '') ret = true;
    else if (number != '' && ans != '') ans.innerHTML = '';
    return ret;
}