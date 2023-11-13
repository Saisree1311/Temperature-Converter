let celsius = document.getElementById('cel');
let fahrenheit = document.getElementById('far');
let kelvin = document.getElementById('kel')
celsius.oninput= () =>{
    let result =(parseFloat(celsius.value) * 9)/5 +32;
    fahrenheit.value = parseFloat(result.toFixed(2));
    kelvin.value = 273 + parseInt(celsius.value);
};
fahrenheit.oninput = ()=>{
    celsius.value = ((parseFloat(fahrenheit.value)- 32)*(5/9)).toFixed(2);
    kelvin.value =  ((parseFloat(fahrenheit.value)- 32)*(5/9) + 273.15).toFixed(2);
};
kelvin.oninput = ()=>{
    fahrenheit.value = (1.8* (parseFloat(kelvin.value) - 273.15) + 32).toFixed(2);
    celsius.value = ((parseFloat(kelvin.value))-273.15).toFixed(2);
};