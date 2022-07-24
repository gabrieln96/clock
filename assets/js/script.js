const horas = document.getElementById ('horas');
const minutos = document.getElementById ('minutos');
const segundos = document.getElementById ('segundos');
const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
const mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();


    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

   

})

const data = new Date();
const d = new Date();
document.getElementById("demo").innerHTML = semana[d.getDay()];
document.getElementById (d.getDate() + " de " + mes[data.getMonth()]+ " de " + d.getFullYear() )

