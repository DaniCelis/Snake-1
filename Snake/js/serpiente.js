function Serpiente(){
	this.x = 310;
	this.y = 15;
	this.img = [$("#abajo")[0],$("#arriba")[0],$("#izquierda")[0],$("#derecha")[0],$("#salto")[0]];
	this.sprite = 0;
	this.vida = 100;
	this.puntos = 0;
	
	this.dibujar = function(ctx){
		var img = this.img[this.sprite];
		var x = this.x;
		var y = this.y;
		ctx.drawImage(img, x, y);
		ctx.save();
		ctx.fillStyle = "#ffffff";
		ctx.font = "12px sans-serif";
		ctx.fillText("puntos: "+ this.puntos, x, y + 65);
		ctx.fillText("Comelona", x-8, y-5);
		if(this.sprite==4){
			ctx.fillStyle = "#ff0000";
			ctx.font = "20px sans-serif";
			ctx.fillText("YEIII!!!!", x+65, y + 25);
		}
		ctx.restore();
	}
	
	this.actualizar = function(accion){
		if(accion=="arriba"){
			this.y -= 10;
			this.sprite = 1;
		}
		if(accion=="abajo"){
			this.y += 10;
			this.sprite = 0;
		}
		if(accion=="izquierda"){
			this.x -= 10;
			this.sprite = 2;
		}
		if(accion=="derecha"){
			this.x += 10;
			this.sprite = 3;
		}
		this.x = (640 + this.x)%640;
		this.y = (480 + this.y)%480;

	}
	
	this.colision = function(x,y){
		var distancia=Math.sqrt( Math.pow( (x-this.x), 2)+Math.pow( (y-this.y),2));
		if(distancia>this.img[this.sprite].width)
		   return false;
		else
		   return true;	
	}
}
