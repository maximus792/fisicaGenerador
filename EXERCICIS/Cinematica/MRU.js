const data = {
	cinematica: [
		{
			title: "Exercici simple MRU",
			enunciats: [
				"Un cotxe va a [v1]km/h, quan temps tardara en recorrer [d]m?",

				"A quina velocitat ha d'anar un cotxe per a recorrer [d]m en [t]s",

				"Quina distancia recorrera un cotxe a [v1]km/h en [t]s",

				"La velocitat de la llum al buit és, aproximadament, c=300.000 km/s. Quan triga a arribar la llum del Sol al planeta de la física dels alumnes de 4t d'ESO si aquests disten uns [km] Km? Expressa el resultat en microsegons",

				"Sabent que la velocitat del so és de 343,2 m/s, a quants quilòmetres de distància es produeix un tro que triga [t] minuts a sentir-se? <br> <b>NOTA: </b> Prenem com que els agents que intervenen en l'ona del so són negligibles",

				"Sabent que la velocitat del so és de 343,2 m/s, quant temps tardarà en arribar el so d'un alumne de 4t d'ESO cridant si aquest està a [km] megàmetres de distància? Expressa-ho en minuts <br> <b>NOTA: </b> Prenem com que els agents que intervenen en l'ona del so són negligibles",
			
			],
		},
		{
			title: "Dos cotxes que es troben MRU",
			enunciats: [
				"Dos cotxen estan separats per [d]m l'un de l'altre. Si el primer cotxe va a una velocitat de [v1]km/h i el segon va a [v2]km/h. Quan temps tardaran en trobar-se? A quina distancia es trobaran?",

				"Dos cotxen estan separats per [d]m l'un de l'altre. Si el primer cotxe va a una velocitat de [v1]km/h, a quina velocitat ha d'anar el segon cotxe per a que es trobin als [t] segons? A quina distancia es trobaran?",

				"Dos cotxen estan separats per [d]m l'un de l'altre. Si el primer cotxe va a una velocitat de [v1]km/h, a quina velocitat ha d'anar el segon cotxe per a que es trobin als [dist]m? Quan temps tardaran?",
			],
		},
	],
};

for (let i = 0; i < data.cinematica.length; i++) {
	var opt = document.createElement("option");

	opt.appendChild(document.createTextNode(data.cinematica[i].title));

	opt.value = i;

	document.querySelector(".select").appendChild(opt);
}

function ran(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function subs(string, index, subs) {
	return (
		string.substring(0, index) +
		subs +
		string.substring(string.indexOf("]", index) + 1)
	);
}

function calc2grad(a, b, c) {
	discriminante = Math.pow(b, 2) - 4 * a * c;
	if (discriminante < 0) {
		return [];
	} else if (discriminante == 0) {
		return [parseFloat(-b / (2 * a))];
	} else {
		return [
			parseFloat((-b + Math.sqrt(discriminante)) / (2 * a)),
			parseFloat((-b - Math.sqrt(discriminante)) / (2 * a)),
		];
	}
}

const ex = document.querySelector(".exercise");
const button = document.querySelector("#generar");
const showSol = document.querySelector(".showSol");

let showsol = false;
showSol.addEventListener("click", () => {
	showsol = !showsol;
	if (showsol) {
		document.querySelector(".showSol").innerHTML = "Amagar Solució";
		document.querySelector(".solution").style.display = "block";
		document.querySelector(".showSol").style.backgroundColor = "#198754";
		document.querySelector(".showSol").style.color = "white";
	  } else {
		document.querySelector(".showSol").innerHTML = "Mostrar Solució";
		document.querySelector(".solution").style.display = "none";
		document.querySelector(".showSol").style.backgroundColor = "white";
		document.querySelector(".showSol").style.color = "#198754";
	  }
});

window.onload = () => {
	console.log(JSON.parse(localStorage.getItem("dades")));
	gen(JSON.parse(localStorage.getItem("dades")));
};
$(".select").change(() => {
	localStorage.clear();
	gen();
});
button.addEventListener("click", () => {
	localStorage.clear();
	gen();
});

function gen(dades) {
	showsol = false;
	document.querySelector(".showSol").innerHTML = "Mostrar Solució";
	ex.style.display = "none";
	document.querySelector(".showSol").style.backgroundColor = "white";
    document.querySelector(".showSol").style.color = "#198754";
	typeOfExercise = localStorage.getItem("typeOfExercise")
		? localStorage.getItem("typeOfExercise")
		: document.querySelector(".select").value;
	enun = localStorage.getItem("enun")
		? localStorage.getItem("enun")
		: ran(0, data.cinematica[typeOfExercise].enunciats.length);
	enun = parseInt(enun);
	console.log("sdsds" + typeOfExercise);
	document.querySelector(".solution").style.display = "none";

	$(".select option:eq(" + typeOfExercise + ")").prop("selected", true);
	//PROBES

	//typeOfExercise = 1;
	// enun = 5;
	//document.querySelector(".solution").style.display = "block";

	localStorage.setItem("typeOfExercise", typeOfExercise);
	localStorage.setItem("enun", enun);
	console.log(
		"h " +
			localStorage.getItem("typeOfExercise") +
			" " +
			localStorage.getItem("enun")
	);

	console.log(`typeOfExercise: ${typeOfExercise}, enun: ${enun}`);

	var title = data.cinematica[localStorage.getItem("typeOfExercise")].title;
	var enunciat =
		data.cinematica[localStorage.getItem("typeOfExercise")].enunciats[enun];

	if (typeOfExercise == 0) {
		switch (parseInt(enun)) {
			case 0:
				d = dades ? dades.d : ran(100, 1500);
				v1 = dades ? dades.v1 : ran(5, 120);
				t = d / (v1 / 3.6);

				dades = { d, v1 };
				localStorage.setItem("dades", JSON.stringify(dades));

				enunciat = subs(enunciat, enunciat.indexOf("[d]"), d);
				enunciat = subs(enunciat, enunciat.indexOf("[v1]"), v1);

				document.querySelector(
					".solution"
				).innerHTML = `tardara ${t.toFixed(2)} segons`;

				break;

			case 1:
				d = dades ? dades.d : ran(500, 1500);
				t = dades ? dades.t : ran(5, 50);
				v1 = d / t;
				dades = { d, t };
				localStorage.setItem("dades", JSON.stringify(dades));
        

				enunciat = subs(enunciat, enunciat.indexOf("[d]"), d);
				enunciat = subs(enunciat, enunciat.indexOf("[t]"), t.toFixed(2));

				document.querySelector(".solution").innerHTML = `Ha d'anar a ${
					(v1 * 3.6).toFixed(2)
				}km/h`;

				break;

			case 2:
				t = dades ? dades.t : ran(5, 50);
				v1 = dades ? dades.v1 : ran(10, 120);
				d = (v1 / 3.6) * t;

				dades = { t, v1 };
				localStorage.setItem("dades", JSON.stringify(dades));

				enunciat = subs(enunciat, enunciat.indexOf("[v1]"), v1);
				enunciat = subs(enunciat, enunciat.indexOf("[t]"), t.toFixed(2));

				document.querySelector(".solution").innerHTML = `${d.toFixed(2)}m`;

				break;
			case 3:
					km = dades ? dades.km : ran(25000, 50000000);
					t= (km)/300000;
	
					dades = { km };
					localStorage.setItem("dades", JSON.stringify(dades));
	
					enunciat = subs(enunciat, enunciat.indexOf("[km]"), km)
	
					document.querySelector(".solution").innerHTML = `La velocitat de la llum tardarà ${(t*1000000).toFixed(2)} microsegons en arribar`;
	
					break;
				case 4:
						t = dades ? dades.t : ran(8, 250)/10;
						m= (t*60)*343.2;
		
						dades = { t };
						localStorage.setItem("dades", JSON.stringify(dades));
		
						enunciat = subs(enunciat, enunciat.indexOf("[t]"), t)
		
						document.querySelector(".solution").innerHTML = `El tro sona des d'una distància de ${m} metres`;
		
						break;

				case 5:
							km = dades ? dades.km : ran(6,75)/10;
							t= (km*1000000)/343.2;
			
							dades = { t };
							localStorage.setItem("dades", JSON.stringify(dades));
			
							enunciat = subs(enunciat, enunciat.indexOf("[km]"), km)
			
							document.querySelector(".solution").innerHTML = `El crit tardarà en arribar ${(t/60).toFixed(2)} minuts`;
			
							break;
		}
	} else if (typeOfExercise == 1) {
		switch (enun) {
			case 0:
				d = dades ? dades.d : ran(100, 1500);
				v1 = dades ? dades.v1 : ran(5, 120);
				v2 = dades ? dades.v2 : ran(5, 120);
				t = d / (v1 / 3.6 + v2 / 3.6);
				dist = (v1 / 3.6) * t;

				dades = { d, v1, v2 };
				localStorage.setItem("dades", JSON.stringify(dades));

				enunciat = subs(enunciat, enunciat.indexOf("[d]"), d);
				enunciat = subs(enunciat, enunciat.indexOf("[v1]"), v1);
				enunciat = subs(enunciat, enunciat.indexOf("[v2]"), v2);

				document.querySelector(
					".solution"
				).innerHTML = `Es troben als ${t.toFixed(
					2
				)} segons, a ${dist.toFixed(2)} metres del punt 0`;

				break;

			case 1:
				d = dades ? dades.d : ran(100, 1500);
				v1 = dades ? dades.v1 : ran(5, 120);
				v2 = dades ? dades.v2 : ran(5, 120);
				t = d / (v1 / 3.6 + v2 / 3.6);
				dist = (v1 / 3.6) * t;

				dades = { d, v1, v2 };
				localStorage.setItem("dades", JSON.stringify(dades));

				enunciat = subs(enunciat, enunciat.indexOf("[d]"), d);
				enunciat = subs(enunciat, enunciat.indexOf("[v1]"), v1);
				enunciat = subs(enunciat, enunciat.indexOf("[t]"), t.toFixed(2));

				document.querySelector(
					".solution"
				).innerHTML = `El segon cotxe té una velocitat de ${v2.toFixed(
					2
				)}km/h, i es troben a ${dist.toFixed(2)} metres del punt 0`;

				break;

			case 2:
				d = dades ? dades.d : ran(500, 3000);
				v1 = dades ? dades.v1 : ran(5, 80);
				dist = dades ? dades.dist : ran(d / 8, d - d / 10);
				t = dist / (v1 / 3.6);
				v2 = ((v1 / 3.6) * t - d) / -t;

				dades = { d, v1, dist };
				localStorage.setItem("dades", JSON.stringify(dades));

				enunciat = subs(enunciat, enunciat.indexOf("[d]"), d);
				enunciat = subs(enunciat, enunciat.indexOf("[v1]"), v1);
				enunciat = subs(
					enunciat,
					enunciat.indexOf("[dist]"),
					dist.toFixed(2)
				);

				document.querySelector(
					".solution"
				).innerHTML = `El segon cotxe ha d'anar a ${v2.toFixed(
					2
				)}km/h, i es troben als ${t.toFixed(2)} segons`;

				break;
		}
	}

	document.querySelector(".title").innerHTML =
		title + ` - Enunciat ${parseInt(enun) + 1}`;
	document.querySelector(".enunciat").innerHTML = enunciat;
	ex.style.display = "block";
}
/*
console.log(localStorage.getItem("v1"));
			if(localStorage.getItem("v1") === null) {
				localStorage.setItem("v1",v1)
			}
			else v1=localStorage.getItem("v1")
*/

//https://www.academiaalcover.es/curso/fisica-primero-bachillerato-cinematica/
