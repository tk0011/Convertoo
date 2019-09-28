document.getElementById('output-speed').style.visibility ='hidden';
document.getElementById('kmhInput').addEventListener('input', function(speed) {
    document.getElementById('output-speed').style.visibility='visible';
    let kmh = speed.target.value;
    document.getElementById('milsecOutput').innerHTML = (kmh*0.27777778).toFixed(3);
    document.getElementById('kmsOutput').innerHTML = (kmh*0.00027778).toFixed(3);
    document.getElementById('kmMinOutput').innerHTML = (kmh*0.0166666667).toFixed(3);
    document.getElementById('metMinOutput').innerHTML = (kmh*16.6666666667).toFixed(3);
    document.getElementById('milHrOutput').innerHTML = (kmh*0.62137119).toFixed(3);
    document.getElementById('mHrOutput').innerHTML = (kmh*1000);
    
});


