
document.getElementById('output-time').style.visibility ='hidden';
document.getElementById('hrInput').addEventListener('input', function(time) {
    document.getElementById('output-time').style.visibility='visible';
    let hr = time.target.value;
    document.getElementById('secOutput').innerHTML = (hr*60*60)
    document.getElementById('minOutput').innerHTML = (hr*60)
    document.getElementById('dayOutput').innerHTML = (hr/24).toFixed(3);
});