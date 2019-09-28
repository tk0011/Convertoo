document.getElementById('output-length').style.visibility ='hidden';
document.getElementById('mInput').addEventListener('input', function(length) {
    document.getElementById('output-length').style.visibility='visible';
    let m = length.target.value;
    document.getElementById('kmOutput').innerHTML = (m*0.001).toFixed(3);
    document.getElementById('milOutput').innerHTML = (m*1000);
    document.getElementById('feetOutput').innerHTML = (m*3.2808399).toFixed(3);
    document.getElementById('inchesOutput').innerHTML = (m*39.37007874).toFixed(3);
    document.getElementById('centiOutput').innerHTML = (m*100);
    document.getElementById('milesOutput').innerHTML = (m*0.00062137).toFixed(4);
    document.getElementById('yardsOutput').innerHTML = (m*1.0936133).toFixed(3);
});


