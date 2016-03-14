var ver=-5;
var hor=-5;

var pong = function() {
	var SELF = this;
	var interval;
	var interval_num = 1;
		
	this.init = function() {
		SELF.startup();
		SELF.bindEvents();
	}

	this.startup = function() {
		SELF.start_slider();
		SELF.start_ball();
	}
	
	this.start_slider = function() {
		$( "#speed" ).slider({
			value:1,
			min: 1,
			max: 10,
			step: 1,
			slide: function( event, ui ) {
				interval_num = ui.value;
				interval_num = 11 - interval_num;
				interval_num = interval_num * 3;
				console.log(interval_num);
				SELF.reset_ball();
				//$( "#amount" ).val( "$" + ui.value );
			}
		});
		$("#speed").slider(interval_num);
	}
	
	this.bindEvents = function() {
		$(document).off("keydown").on("keydown",function(e) {
			SELF.move_paddle(e);
		})
	}
	
	this.reset_ball = function() {
		clearInterval(interval);
		setTimeout(function() {
			console.log("resetting ball position");
			var ball = $("#ball");		
			ball.css({
				top:'50%',
				left:'50%'
			})
		},100);
		SELF.start_ball();		
	}
	
	this.getStartPositions = function() {
		ver = 5 - Math.floor((Math.random() * 10) + 1);
		hor = 5 - Math.floor((Math.random() * 10) + 1);
		
		console.log(ver, hor);
	}
	
	this.start_ball = function() {
		SELF.getStartPositions();
		interval = setInterval(function() {			
			SELF.move_ball(hor,ver);			
		},interval_num)
	}
	
	this.move_ball = function(hor1,ver1) {
		var ball = $("#ball");
		var paddle_left= $("#paddle_left");
		var paddle_right=$("#paddle_right");
		var paddle = $(".paddle");
		
		var oldY = parseInt(ball.css("top"));
		var oldX = parseInt(ball.css("left"));
		var ballW= parseInt(ball.css("width"));
		
		var pad_W= parseInt(paddle.css("width"));
		var pad_H= parseInt(paddle.css("height"));
		
		var pad_LT= parseInt(paddle_left.css("top"));
		var pad_LL= parseInt(paddle_left.css("left"));
		
		var pad_RT= parseInt(paddle_right.css("top"));
		var pad_RR= parseInt(paddle_right.css("right"));
		
		var border_R=parseInt($("#board").css("width"));
		
        var hor1=hor1;
		var ver1=ver1;
		//console.log("move",oldX,oldY, pad_RR, border_R);
		
		// Ball off top of border
		if (oldY <= 1) {
			 ver1=5;
		     hor1=hor1;
			 oldY=oldY+ver1;
			 }
			 
		else    // Ball off left side of border.
			if (oldX <= 1) {
			hor1=5;
			ver1=ver1;
			oldX=oldX+hor1;

			$("#player2_score").html(parseInt($("#player2_score").html())+1);
			SELF.reset_ball();
			}
		else    // Ball off bottom of border. (minus ball height)
			if (oldY >= (parseInt($("#board").css("height"))-parseInt(ball.css("height")) )) {
			hor1=hor1;
			ver1=-5;
			oldY=oldY+ver1;	
		    }
		else    // Ball off the right side of border. (minus ball width)
			if (oldX >= (parseInt($("#board").css("width"))-parseInt(ball.css("width")) )) {
			hor1=-5;
			ver1=ver1;
			oldX=oldX+hor1;
			$("#player1_score").html(parseInt($("#player1_score").html())+1);
				SELF.reset_ball();			
			}
		
			 
		else    // Ball off Left Paddle  (minus paddle width, and include paddle height)
			if ((oldX <= pad_LL+pad_W) && (oldY>= (pad_LT-parseInt(ball.css("width")))) && oldY < pad_LT+pad_H) {
			hor1=5;
			ver1=ver1;
			oldX=oldX+hor1;
			 }	 
		else    // Ball off Right  (minus paddle width, and ball width, include paddle height)
			if ((oldX >= (parseInt($("#board").css("width"))-parseInt(ball.css("width"))-pad_W-pad_RR) ) && (oldY >= (pad_RT) && oldY < pad_RT+pad_H)) {
			hor1=-5;
			ver1=ver1;
			oldX=oldX+hor1;
			 }

		
		//else if (oldX < (pad_LL+pad_W)){
			//$("#player2_score").html(parseInt($("#player2_score").html())+1);
			//clearInterval(interval);
			//SELF.move_ball(hor,ver);
		//}
		
	    else    // Ball continues on current trajectory
		
		{
			oldY=oldY+ver1;
			oldX=oldX+hor1;
		}

			ball.css({
				top:oldY,
				left:oldX
				})
				hor=hor1;
				ver=ver1;
			//console.log(oldX,oldY,hor,ver);
	    return(hor,ver);
	}
	
	this.move_paddle = function(e) {
		switch(e.which) {
			case 65:
				SELF.Paddle_Up($("#paddle_left"));
				break;
			case 90:
				SELF.Paddle_Down($("#paddle_left"));
				break;
			case 75:
				SELF.Paddle_Up($("#paddle_right"));
				break;
			case 77:
				SELF.Paddle_Down($("#paddle_right"));
				break;
		}
	}
	
	this.Paddle_Up = function(item) {
		oldY = item.css("top");
		if(parseInt(oldY) > 0) {
			item.css({
				top:parseInt(oldY)-5
			})
		}
	}
	
	this.Paddle_Down = function(item) {
		oldY = item.css("top");
		if(parseInt(oldY) < parseInt($("#board").css("height"))-parseInt(item.css("height"))-9) {
			item.css({
				top:parseInt(oldY)+9
			})	
		}
		//else {
		//	var newY = parseInt($("#board").css("height"))-parseInt(item.css("height"))-2;
		//	item.css({
		//		top:newY
		//	})				
		//}
	}
	
}

pong = new pong();
pong.init();