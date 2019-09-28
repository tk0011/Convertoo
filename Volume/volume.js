document.getElementById('output-volume').style.visibility ='hidden';
document.getElementById('mInput').addEventListener('input', function(volume) {
    document.getElementById('output-volume').style.visibility='visible';
    let m = volume.target.value;
    document.getElementById('milLOutput').innerHTML = (m*1000)
    document.getElementById('USoOutput').innerHTML = (m*33.814).toFixed(3);
    document.getElementById('UKoOutput').innerHTML = (m*35.195).toFixed(3);
    document.getElementById('USpOutput').innerHTML = (m* 2.113).toFixed(3);
    document.getElementById('UKpOutput').innerHTML = (m*1.76).toFixed(3);
    document.getElementById('USgOutput').innerHTML = (m/3.785).toFixed(3);
    document.getElementById('UKgOutput').innerHTML = (m/4.546).toFixed(3);
});


