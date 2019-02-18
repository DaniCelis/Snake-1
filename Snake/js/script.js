
var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio(){
	jugando = true;
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");
	serpiente = new Serpiente();
	calacas = [new Calaca(), new Calaca()];
	run();	
	
	$('#instrucciones').click(function(){
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });
    
    $('#close').click(function(){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
    
    $("#iniciar").click(function(){	
		if(jugando==false)
			inicio();	
	});
}

function capturaTeclado(event){
	if(event.which==38 || event.which==87)
		serpiente.actualizar('arriba');
	if(event.which==40 || event.which==83)
		serpiente.actualizar('abajo');
	if(event.which==39 || event.which==68)
		serpiente.actualizar('derecha');
	if(event.which==37 || event.which==65)
		serpiente.actualizar('izquierda');
	
}

function run(){ 
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");
		 
	if(jugando){  
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);

		serpiente.dibujar(contextoBuffer);
		for(i=0;i<calacas.length;i++){
			calacas[i].dibujar(contextoBuffer);
		//	calacas[i].actualizar();
			if(serpiente.colision(calacas[i].x,calacas[i].y)){
				for(i=0;i<calacas.length;i++){
					calacas[i].actualizar();
				}
				serpiente.sprite = 4;
				serpiente.puntos +=1;
				$('#pierde')[0].play();
			}
		}
		
		if(serpiente.puntos >= 200)
			jugando = false;
		
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
		
	}else{
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
		contextoBuffer.fillStyle = "#ffffff";
		//serpiente.sprite = 3;
		serpiente.vida = 0;
		//serpiente.dibujar(contextoBuffer);
		contextoBuffer.font = "50px sans-serif";
		contextoBuffer.fillText("GAMEOVER", 300, 440);
		contextoBuffer.fillStyle = "#ff0000";
		contextoBuffer.font = "15px sans-serif";
		contextoBuffer.fillText("try again", 550, 460);
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		//contexto.drawImage(buffer, 0, 0);
	}
	
}


