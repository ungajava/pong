<!doctype html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Pong</title>

		<meta name="viewport" content="width=device-width">
		<link rel="stylesheet" href="vendor/jquery-ui/jquery-ui.min.css">		
		<link rel="stylesheet" href="vendor/jquery-ui/jquery-ui.theme.min.css">
		<link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="assets/css/style.css">
	</head>
	<body>
		<div id="container">
			<div id="board">
				<div class="paddle" id="paddle_right"></div>
				<div class="paddle" id="paddle_left"></div>
				<div id="ball"><i class="fa fa-futbol-o"></i></div>
			</div>
			<div id="controls">
				<label>Speed</label>
				
				<div id="speed"></div>
				<div id="speed_readout"></div>
			</div>
			<div id="score_card">
				<div class="player">
					Player 1
				</div>
				<div class="player">
					Player 2
				</div>
				<div class="score" id="player1_score">
					0
				</div>
				<div class="score" id="player2_score">
					0
				</div>				
			</div>
		</div>
	</body>
	<script src="vendor/jquery/jquery-2.2.1.min.js"></script>		
	<script src="vendor/jquery-ui/jquery-ui.min.js"></script>
	<script src="assets/js/script.js"></script>	
</html>	