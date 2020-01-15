(function(){
    let actualizarHora = function(){
        let fecha= new Date(),
            hora= fecha.getHours(),
            minutos= fecha.getMinutes(),
            segundos= fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            anio= fecha.getFullYear(),
            ampm;
    let pHoras= document.getElementById('horas'),
        pAMPM = document.getElementById('ampm'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pAnio = document.getElementById('anio');

    let semana = ['Domingo', 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        pDiaSemana.textContent= semana[diaSemana];
        pDia.textContent= dia;
    let meses=['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pMes.textContent= meses[mes];
        pAnio.textContent=anio;

        if(hora>=12){
            hora=hora-12;
            ampm= 'PM';
        }
        else{
            ampm='AM';
        }
        if(hora==0){
            hora=12;
        }
        if(minutos<10){
            minutos= "0" + minutos;
        }
        if(segundos<10){
            segundos= "0" + segundos;
        }
        if(hora<10){
            hora= "0" + hora;
        }
        pHoras.textContent= hora;
        pAMPM.textContent=ampm;
        pMinutos.textContent=minutos;
        pSegundos.textContent=segundos;
    };
    actualizarHora();
    let intervalo= setInterval(actualizarHora,1000);
}());