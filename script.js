var estado ="";
var temperatura= Math.round(Math.random()*(40-15)+parseInt(15));
var humedad=Math.round(Math.random()*(100-10)+parseInt(10));
var ph= Math.round(Math.random()*(10-0)+parseInt(1));

// Comprobación de temperatura
if (14<temperatura<=20){
    t="Temperatura Baja";
}
if (20<temperatura<=35)
{
    t="Temperatura Normal";
}
if (temperatura>35)
{
    t="Temperatura Alta";
}
// Comprobación de humedad
if (10<humedad<=40){
    h="Humedad Baja";
}
if (40<humedad<=80)
{
    h="Humedad Normal";
}
if (humedad>80)
{
    h="Humedad Alta";
}
// Comprobación de pH
if (ph >= 0 && ph <= 6){
    p="solucion es acida";
}
if (ph==7)
{
    p=" solucion es neutra,";
}
if (ph >= 8 && ph <= 14){
{
    p="solucion es alcalina,";
}
}


document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);
});



document.getElementById('datos').addEventListener("click",()=>{
    leer_datos(temperatura,humedad,ph);
    
});




function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

function leer_datos(temperatura, humedad,ph){
    document.getElementById('temp').value=temperatura;
    document.getElementById('hume').value=humedad;
    document.getElementById('ph').value=ph;
    document.getElementById('texto').value="El invernadero tiene"+" "+t+" "+"y"+ " "+h+" "+"y" + "  " +p;

    
}

// Asegúrate de que el navegador sea compatible con la Web Speech API
if ('speechSynthesis' in window) {
    // Configura el idioma en inglés
    var utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'en-US';

    // Establece la función `decir` para usar el objeto `utterance`
    function decir(texto) {
        utterance.text = texto;
        speechSynthesis.speak(utterance);
    }
} else {
    // La Web Speech API no es compatible con el navegador
    console.log("La Web Speech API no es compatible con este navegador.");
}
