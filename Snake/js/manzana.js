function aleatorio(piso,techo){
	return Math.floor(Math.random() * (techo - piso + 1)) + piso;
}

function Calaca(x,y){
	
	
	this.img = $("#manzana")[0];	
		
	this.x = aleatorio(0,620);
	this.y = aleatorio(100,330);
	//this.velocidad = 0;
	//while(this.velocidad == 0)
		//this.velocidad=aleatorio(-3,3);
	this.dibujar = function(ctx){
		var img = this.img;
		ctx.drawImage(img,this.x,this.y);
	}
	
	this.actualizar = function(){
		this.x = aleatorio(0,620);
		this.y = aleatorio(100,330);
	}
}
