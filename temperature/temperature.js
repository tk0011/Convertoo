document.getElementById('output-temp').style.visibility ='hidden';
document.getElementById('celInput').addEventListener('input', function(temp) {
    document.getElementById('output-temp').style.visibility ='visible';
    let cel = temp.target.value;
    document.getElementById('farOutput').innerHTML = (cel*(9/5)+ 32);
    document.getElementById('kelOutput').innerHTML = (cel*1 + 273.15);
});