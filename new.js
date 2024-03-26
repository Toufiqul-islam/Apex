let val =0;
function sum(){
    val = val +1;
    document.querySelector('.p0').innerHTML = val;
}
document.querySelector('.ajs1').addEventListener('click', sum);
document.querySelector('.ajs2').addEventListener('click', sum);
document.querySelector('.ajs3').addEventListener('click', sum);
document.querySelector('.ajs4').addEventListener('click', sum);