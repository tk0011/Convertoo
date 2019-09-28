document.getElementById('output-area').style.visibility ='hidden';
document.getElementById('mInput').addEventListener('input', function(area) {
    document.getElementById('output-area').style.visibility='visible';
    let m = area.target.value;
    document.getElementById('sqmOutput').innerHTML = (m*0.092903).toFixed(3);
    document.getElementById('sqkmOutput').innerHTML = (m*9.290304*(Math.pow(10,-8)))
    document.getElementById('sqyOutput').innerHTML = (m*0.111111).toFixed(5);
    document.getElementById('HOutput').innerHTML = (m/107639.104)
    document.getElementById('AOutput').innerHTML = (m/43560)
    document.getElementById('sqmilOutput').innerHTML = (m*3.5870064*(Math.pow(10, -8)))
    document.getElementById('sqiOutput').innerHTML = (m*144);
});


