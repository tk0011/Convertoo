
document.getElementById('output-weight').style.visibility ='hidden';
document.getElementById('kgInput').addEventListener('input', function(weight) {
    document.getElementById('output-weight').style.visibility='visible';
    let kg = weight.target.value;
    document.getElementById('milgramOutput').innerHTML = (kg*1000000)
    document.getElementById('gramsOutput').innerHTML = (kg*1000)
    document.getElementById('poundsOutput').innerHTML = (kg/0.45359237).toFixed(3);
    document.getElementById('ozOutput').innerHTML = (kg/0.02834952).toFixed(3);
    document.getElementById('tonnesOutput').innerHTML = (kg/1000).toFixed(3);
});


