let body=document.querySelector('body')
let divInterruptor=document.createElement('div')

let interruptor_off=document.createElement('img')

interruptor_off.setAttribute('src', 'img/interruptor_desligado.png')

let divLampada=document.createElement('div')

let lampada_off=document.createElement('img')
lampada_off.setAttribute('id', 'imagem');
lampada_off.setAttribute('src', 'img/desligada.png')

divInterruptor.append(interruptor_off)
divLampada.append(lampada_off)
body.append(divInterruptor)
body.append(divLampada)

interruptor_off.onclick= function(){

if(interruptor_off.src.match('desligado')){
    interruptor_off.src='img/interruptor_on.png';
    lampada_off.src='img/ligada.png';
    divInterruptor.style.background = '#ffff00';
    divLampada.style.background = '#ffff00';
    body.style.background = '#ffff00';

}else if(interruptor_off.src.match('on')){
    interruptor_off.src='img/interruptor_desligado.png';
    lampada_off.src='img/desligada.png';
    divInterruptor.style.background = '#000';
    divLampada.style.background = '#000';
    body.style.background = '#000';
}
}

