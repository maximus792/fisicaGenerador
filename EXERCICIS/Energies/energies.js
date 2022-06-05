const data = {
  cinematica: [
    {
      title: "Exercicis Simples Energies - Cinètica",
      enunciats: [
        "Calcula l'energia cinètica dels sistemes físics següents:<br>a) Una persona de [p] kg que camina a una velocitat de [v] m/s.",
        "Calcula l'energia cinètica dels sistemes físics següents:<br>Un ciclista de [p] kg de massa que circula per una pista a la velocitat de [v] km/h.",
        "Calcula l'energia cinètica dels sistemes físics següents:<br>Un avió de [p] kg de massa que voli a la velocitat de [v] km/h.",

        "Un motorista que circula per una autovia a la velocitat de [v1] km/h té una energia cinètica de [J] J. D'altra banda, un camió de [p] kg de massa circula a la velocitat de [v2] km/h. Quin dels dos sistemes té una energia cinètica més gran? Quant pesa el motorista?",
        "Calculeu l'energia cinètica d'un cotxe de massa [p] Kg que circula amb una velocitat de [v] km/h.",

        "Un cotxe de massa [p] Kg té una energia cinètica de [J] J calcular la velocitat del cotxe a Km/h.",

        "Un cotxe de massa [p] Kg partint del repòs arriba a una velocitat de [v] m/s quina seria la seva energia cinètica?",

        "Un cotxe de massa [p] Kg té una velocitat de [v] m/s. quina seria la seva energia cinètica? frena i la seva velocitat es redueix a la meitat, quina és ara la seva energia cinètica?",
      ],
    },
    {
      title: "Exercicis Simples Energies - Potencial",
      enunciats: [
        "Calculeu l'energia potencial d'un saltador de trampolí si la vostra massa és de [p] kg i està sobre un trampolí de [h] m d'alçada sobre la superfície de l'aigua.",

        
        
        "Un ocell de massa [p] g està posat en una branca d'un arbre, si l'ocell té una energia potencial de [J] J calcular l'alçada de la branca.",
        
        
        
        "Una paracaigudista es llança en caiguda lliure des de [h] m d'alçada. Si la massa, amb el seu equip, és de [p] kg, quant valdrà la seva energia potencial a l'hora d'obrir el paracaigudes si l'obre quan ha baixat [hf]m?",
        
        "Una grua aixeca un paquet de [p] kg des del terra a una alçada de [h] metres. Calculeu el treball realitzat per la grua.",

        "Calculeu l'energia potencial: Un escalador de [p] kg de massa sobre la paret vertical d'una muntanya a [h] m d'alçada.",

        "Calculeu l'energia potencial: Una antena de comunicacions de [p] kg de massa en una torre a [h] m sobre el terra.",

        "Calculeu l'energia potencial: Una pilota de [p] g de massa sobre una cadira a una alçada de [h] cm.",
      ],
    },
    {
        title: "Exercicis Simples Energies - Mecànica",
        enunciats: [
            "Calculeu l'energia mecànica d'un avió de [p] tones que sobrevoli l'oceà a una velocitat de [v] km/h i una altitud sobre el nivell del mar de [h] km.",

            "Es deixa caure lliurement una pilota de tennis de [p] g de massa des d'una alçada de [h] m. partint del repòs. <br>a) Calcula la seva energia mecànica abans de deixar-la anar. <br>b) Amb quina velocitat arriba la pilota de tennis a terra?",
        ]
    },
  ],
};

for (let i = 0; i < data.cinematica.length; i++) {
  var opt = document.createElement("option");

  opt.appendChild(document.createTextNode(data.cinematica[i].title));

  opt.value = i;

  document.querySelector(".select").appendChild(opt);

  //$(".dropwdown-menu").append(`<li><a class="dropdown-item" href="#">${data.cinematica[i].title}</a></li>`)
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
function expo(e) {
  return (
    e.toExponential(2).replace("e", " · 10<sup>").replace("+", "") + "</sup>"
  );
}

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

  //PROVES

  // typeOfExercise = 0;
  //enun = 1;
  // document.querySelector(".solution").style.display = "block";

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
        p = dades ? dades.p : ran(50, 120);
        v = dades ? dades.v : ran(5, 20) / 10;

        J = (p * Math.pow(v, 2)) / 2;
        dades = {
          p,
          v,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[v]"), v);

        document.querySelector(
          ".solution"
        ).innerHTML = `L'energia cinètica és ${J.toFixed(2)}J`;

        break;

      case 1:
        p = dades ? dades.p : ran(70, 100);
        v = dades ? dades.v : ran(20, 70);

        J = (p * Math.pow(v / 3.6, 2)) / 2;
        dades = {
          p,
          v,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[v]"), v);

        document.querySelector(
          ".solution"
        ).innerHTML = `L'energia cinètica és ${J.toFixed(2)}J`;

        break;

      case 2:
        p = dades ? dades.p : ran(7000, 100000);
        v = dades ? dades.v : ran(300, 700);

        J = (p * Math.pow(v / 3.6, 2)) / 2;
        dades = {
          p,
          v,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[v]"), v);

        document.querySelector(
          ".solution"
        ).innerHTML = `L'energia cinètica és ${expo(J)}J`;

        break;

      case 3:
        v1 = dades ? dades.v1 : ran(100, 120);
        J1 = dades ? dades.J1 : ran(100, 200) * Math.pow(10, 3);
        p = dades ? dades.p : ran(3000, 4500);
        v2 = dades ? dades.v2 : ran(70, 100);

        m = 2 * (J1 / Math.pow(v1 / 3.6, 2));
        J2 = 0.5 * p * Math.pow(v2 / 3.6, 2);

        dades = {
          v1,
          J1,
          p,
          v2,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[v1]"), v1);
        enunciat = subs(enunciat, enunciat.indexOf("[J]"), expo(J1));
        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[v2]"), v2);

        document.querySelector(
          ".solution"
        ).innerHTML = `<span id="formula1"></span> &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; <span id="formula2"></span> &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; 
        El motorista té una massa de <b>${m.toFixed(2)} Kg </b>
        
        <br><br>El camió té una energia cinètica de <b>${expo(J2)} J</b>. `;
        katex.render(`m=2·\\frac{J}{v^2}`, formula1);
        katex.render(`m=2·\\frac{${J1}}{${(v1 / 3.6).toFixed(2)}^2}`, formula2);
        if (J2 > J1)
          document.querySelector(
            ".solution"
          ).innerHTML += `Per tant el camió té més energia cinètica`;
        else
          document.querySelector(
            ".solution"
          ).innerHTML += `Per tant el motorista té més energia cinètica`;

        break;

        case 4:
        p = dades ? dades.p : ran(700, 1500);
        v = dades ? dades.v : ran(50, 120);

        J = (p * Math.pow(v / 3.6, 2)) / 2;
        dades = {
          p,
          v,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[v]"), v);

        document.querySelector(
          ".solution"
        ).innerHTML = `L'energia cinètica és ${expo(J)}J`;

        break;

        case 5:
        p = dades ? dades.p : ran(700, 1500);
        J = dades ? dades.J : ran(600, 700)*Math.pow(10,3);

        v= Math.sqrt(2*J/p)
        dades = {
          p,
          J,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[J]"), J);

        document.querySelector(
          ".solution"
        ).innerHTML = `Aïllem la velocitat &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; <span id="formula"></span> &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp;  La velocitat és ${(v*3.6).toFixed(2)} km/h<br><br><b>Recorda passar de m/s a Km/h!</b>`;
        katex.render(`v=\\sqrt{\\frac{2·J}{m}}`,formula)

        break;

        case 6:
        p = dades ? dades.p : ran(700, 1500);
        v = dades ? dades.v : ran(20, 30);

        J = (p * Math.pow(v, 2)) / 2;
        dades = {
          p,
          v,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[v]"), v);

        document.querySelector(
          ".solution"
        ).innerHTML = `Apliquem la fórmula: <span id="formula"></span>&nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp;Ec = ${expo(J)} J.`;

        katex.render(`Ec=\\frac{1}{2}mv^2`,formula)

        break;

        case 7:
        p = dades ? dades.p : ran(700, 1500);
        v = dades ? dades.v : ran(20, 30);

        J = (p * Math.pow(v, 2)) / 2;
        J2 = (p * Math.pow(v/2, 2)) / 2;
        dades = {
          p,
          v,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[v]"), v);

        document.querySelector(
          ".solution"
        ).innerHTML = `Apliquem la fórmula: <span id="formula"></span>&nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp;Ec = ${expo(J)} J. Ec<sub>2</sub> = ${expo(J2)} J
        <br><br><b>Recorda que per calcular l'Energia Cinètica en la meitat, has de dividir la velocitat entre 2, no l'Energia Cinètica!</b>`;

        katex.render(`Ec=\\frac{1}{2}mv^2`,formula)

        break;
    }
  }
  else if (typeOfExercise == 1) {
    switch (parseInt(enun)) {
      case 0:
        p = dades ? dades.p : ran(50, 100);
        h = dades ? dades.h : ran(5, 20);

        J = p*9.8*h
        dades = {
          p,
          h,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[h]"), h);

        document.querySelector(
          ".solution"
        ).innerHTML = `L'energia potencial és ${expo(J)}J`;

        break;

        case 1:
        p = dades ? dades.p : ran(400, 600);
        J = dades ? dades.J : ran(20, 100);

        h = J/(9.8*(p/1000))
        dades = {
          p,
          J,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[J]"), J);

        document.querySelector(
          ".solution"
        ).innerHTML = `L'altura és de ${h.toFixed(2)}m`;

        break;

        case 2:
        h = dades ? dades.h : ran(3000, 5000);
        p = dades ? dades.p : ran(70, 100);
        hf = dades ? dades.hf : ran(1000, 2000);

        hd= h-hf
        pot=p*9.8*hd
        dades = {
          h,
          p,
          hf,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[h]"), h);
        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
        enunciat = subs(enunciat, enunciat.indexOf("[hf]"), hf);

        document.querySelector(
          ".solution"
        ).innerHTML = `Si ha baixat ${hf} m, es trobarà a una alçada de ${hd} m (${h}m-${hf}m), per tant l'energia potencial és de ${expo(pot)} J.`;

        break;

        case 3:
        h = dades ? dades.h : ran(5, 10);
        p = dades ? dades.p : ran(100, 300);

        
        pot=p*9.8*h
        dades = {
          h,
          p,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[h]"), h);
        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);

        document.querySelector(
          ".solution"
        ).innerHTML = `W=Ef-Ei &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; W=${h} · 9,8 · ${p} - 0 &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; W=${expo(pot)} J`;

        break;

        case 4:
        h = dades ? dades.h : ran(200, 400);
        p = dades ? dades.p : ran(70, 100);

        
        pot=p*9.8*h
        dades = {
          h,
          p,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[h]"), h);
        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);

        document.querySelector(
          ".solution"
        ).innerHTML = `Ep=${expo(pot)} J`;

        break;

        case 5:
        h = dades ? dades.h : ran(50, 200);
        p = dades ? dades.p : ran(200, 400);

        
        pot=p*9.8*h
        dades = {
          h,
          p,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[h]"), h);
        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);

        document.querySelector(
          ".solution"
        ).innerHTML = `Ep=${expo(pot)} J`;

        break;

        case 6:
        h = dades ? dades.h : ran(300, 400);
        p = dades ? dades.p : ran(30, 50);

        
        pot=(p/1000)*9.8*(h/100)
        dades = {
          h,
          p,
        };

        localStorage.setItem("dades", JSON.stringify(dades));

        enunciat = subs(enunciat, enunciat.indexOf("[h]"), h);
        enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);

        document.querySelector(
          ".solution"
        ).innerHTML = `Ep=${pot.toFixed(1)} J<br><br><b>Recordeu passar les unitats al Sistema Internacional!</b>`;

        break;
    }}
    else if (typeOfExercise == 2) {
        switch (parseInt(enun)) {
          case 0:
            p = dades ? dades.p : ran(15, 20);
            h = dades ? dades.h : ran(8, 12);
            v = dades ? dades.v : ran(700, 900);
    
            J = ((p*1000)*9.8*(h*1000)) + (0.5*(p*1000)*Math.pow(v/3.6,2))
            dades = {
              p,
              h,
              v,
            };
    
            localStorage.setItem("dades", JSON.stringify(dades));
    
            enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
            enunciat = subs(enunciat, enunciat.indexOf("[h]"), h);
            enunciat = subs(enunciat, enunciat.indexOf("[v]"), v);
    
            document.querySelector(
              ".solution"
            ).innerHTML = `Em = Ec + Ep &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; Em=${expo(J)} J<br><br><b>Recordeu passar les unitats al Sistema Internacional!</b>`;
    
            break;

            case 1:
            p = dades ? dades.p : ran(50, 70);
            h = dades ? dades.h : ran(10, 30)/10;
    
            Em=(p/1000)*9.8*h
            v= Math.sqrt((2*Em)/(p/1000))
            dades = {
              p,
              h,
            };
    
            localStorage.setItem("dades", JSON.stringify(dades));
    
            enunciat = subs(enunciat, enunciat.indexOf("[p]"), p);
            enunciat = subs(enunciat, enunciat.indexOf("[h]"), h);
    
            document.querySelector(
              ".solution"
            ).innerHTML = `
            a) Em=mgh &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; Em= ${Em.toFixed(2)} J.
            <br>
            b) Em = Ep + Ec &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; Em = Ec + 0 &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; <span id="formula1"></span> &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; <span id="formula2"></span>
            <br><br><b>Recordeu passar les unitats al Sistema Internacional!</b>`;
                
            katex.render(`Ec=\\frac{1}{2}mv^2`,formula1)
            katex.render(`v=\\sqrt{\\frac{2·${Em.toFixed(2)}}{${p/1000}}}`,formula2)
            break;
        }}

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
