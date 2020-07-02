
const form = document.getElementById("form1");
const list = document.getElementById("display-data");







function checks(){
	let mainContainer = document.getElementById('display-data');

	alert("this is working");
	let userChoice = document.getElementById('userinput').value;
	let userChoice2 = document.getElementById('userinput2').value;
	
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userChoice},${userChoice2}&appid=82fd123d79163e1f5fd2c9df664e2c95&units=imperial`, {mode:'cors'})
	  .then(function(response) {
	  	return response.json();
	  })

	  
	  .then(function(response) {

	  	console.log(response);
	  	var li = document.createElement("li");

	  	const icon = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
		let dynamicMark = `

		<div class="container-fluid text-center">
			<div class="row">
				<div class="col-xs-12">
					<h1>${response.name}</h1>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12">
					<img src=${icon}>
					<h2>${response.weather[0].description}</h2>

				</div>

			</div>


			<div class="row">
				<div class="col-xs-12">
					<h3>Temp: ${response.main.temp}</h3>

				</div>

			</div>


			<div class="row">
				<div class="col-xs-12">
					<h3>WindSpeed: ${response.wind.speed}</h3>

				</div>
				
			</div>

		</div>
		<hr>



							
							`;


	  	li.innerHTML = dynamicMark;
	  	list.appendChild(li);


	  });
		
	form.reset();

}





function whiteout(){
	list.remove();
};


