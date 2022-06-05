const data = {
    cinematica: [
        {
            title: "Exercicis Simples Forces pla horitzontal",
            enunciats:[
                "Un gat de [m] kg de massa és colpejat horitzontalment per un humà enrabiat amb una força de [F]N constant en un pla on el coeficient de fregament (μ) és [mu]. <br> Quina serà la seva acceleració?<br> <b>NOTA</b>Prenem la gravetat amb el valor de 9,8m/s<sup>2</sup>",
                
                "Un alumne del claver de 4t d'ESO de [M] estava mirant el mòbil a un pas de zebra, i un vehicle l'empeny constantment fenr-lo assolir una acceleració de [a] m/s<sup>2</sup>. <br><b>a)</b> Amb quina força l'està empenyent el vehicle? <br> <b>b)</b>Quina és la seva Força de Reacció? <br> <b>NOTA: </b>El Fregament és negligible",
                
                
                "Una grua eleva una massa [M] Kg mitjançant un cable q suporta una tensió de [T] N.<br> <b>a)</b>Quina és la màxima acceleració amb què es pot elevar? <br> <b>b)</b>Si s'eleva amb una acceleració de [ac]m/s<sup>2</sup>, quina tensió suportarà el cable?",

                

                
    
            ]
        },
        {
        title: "Exercicis Mitjans Forces pla horitzontal",
        enunciats: [
          "Un tren de [m] KG de massa i que va a [vo] km/h es troba a [d] m de distància d'un alumne de 4t d'ESO despistat que està al mig de la via!. Si frens del tren fan una força de [F] Newtons. Calcula:<br><br> a) Quin temps tardarà en frenar el tren? <br> b) Quan a quina distància s'aturarà per complet? <br> c) Atropellarà a l'alummne?<br><br> <b>Nota: </b>Potser has de fer anar els teus coneixements de cinemàtica per resoldre aquest problema!",   

          "En una màquina d'Atwood, dos cossos pengen de cadascun dels extrems de la corda, i pesen [m1]kg i [m2]kg respectivament. Inicialment estan a la mateixa alçada referencialment. Calcula:<br><b> a)</b> Acceleració del sistema i tensió de la corda. <br> <b>b)</b>Temps que triguen a separar-se les masses un metre. <br> <b>NOTA: </b>Recorda que a la màquina d'Atwood, només treballem amb un eix! <br> <img src='./img/fotoDinamica2.png' height='170px' alt='No es pot mostrar la foto'>",

          "Del costat dret d'un pla horitzontal penja un cos de [m3]Kg (m3) de massa mitjançant una corda que passa per una politja. A sobre del pla hi ha dos cossos de [m2]Kg (m2) i [m1]Kg (m1) agafats de la mateixa corda, un darrere de l'altre. Calcula:<br> <b>a)</b> Acceleració del sistema de partícules <br> <b>b)</b> Tensió de cadascuna de les cordes <br> <b>NOTA: </b>El fregament és negligible <br> <img src='./img/fotoDinamica3.png' height='170px' alt='No es pot mostrar la foto'>"
        ],
      },
      { 
        title: "Exercicis Pla Inclinat",
        enunciats: [
          "Un cos  de [m] KG de massa està al peu d'un pla inclinat de [g]° de pendent (α). Si al cos va amb una velocitat horitzontal de [vo] m/s, a quina altura arribarà tenint en compte que μ = [mu]? <br> <img src='./img/fotoDinamica1.png' height='170px' alt='No es pot mostrar la foto'>",

          "Un cos de [m] kg de massa llisca per un pla inclinat de [g] amb l'horitzontal. El coeficient de fregament entre el pla i el cos val [mu]. Calcula: <br> <b>a)</b> Distància recorreguda pel cos després de [t] s iniciat el moviment. <br> <b>b)</b> El temps que tarda en parar-se desde que el cos arriba al terra si el pla inclinat mesura [x] metres <br> <img src='./img/fotoDinamica4.jpeg' alt='No es pot mostrar la foto' height='200vh'>",
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
  
  function gen(dades) {
    showsol = false;
    document.querySelector(".showSol").innerHTML = "Mostrar Solució";
    ex.style.display = "none";
    document.querySelector(".showSol").style.backgroundColor = "white";
    document.querySelector(".showSol").style.color = "#198754";
    typeOfExercise = localStorage.getItem("typeOfExercise") ?
      localStorage.getItem("typeOfExercise") :
      document.querySelector(".select").value;
    enun = localStorage.getItem("enun") ?
      localStorage.getItem("enun") :
      ran(0, data.cinematica[typeOfExercise].enunciats.length);
    enun = parseInt(enun);
    console.log("sdsds" + typeOfExercise);
    document.querySelector(".solution").style.display = "none";
  
    $(".select option:eq(" + typeOfExercise + ")").prop("selected", true);
  
    //PROVES
  
    // typeOfExercise = 0;
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
          m = dades ? dades.m : ran(10, 25);
          F = dades ? dades.F : ran(45 , 95);
          mu = dades ? dades.mu : ran(2, 6) / 10;
  
          a=(F-mu*m*9.8)/m
          dades = {
            F,
            m,
            mu
          };
  
          localStorage.setItem("dades", JSON.stringify(dades));
  
          enunciat = subs(enunciat, enunciat.indexOf("[m]"), m);
          enunciat = subs(enunciat, enunciat.indexOf("[F]"), F);
          enunciat = subs(enunciat, enunciat.indexOf("[mu]"), mu)
          if(a<0){
            
            document.querySelector(".solution").innerHTML = `El gatet no es mourà, ja que la força és massa petita`;
          }
          else{
          document.querySelector(".solution").innerHTML = `L'acceleració del gatet serà ${a.toFixed(2)}m/s<sup>2</sup>`;
          }
          break;

          case 1:
            M = dades ? dades.M : ran(38, 60);
            a = dades ? dades.a : ran(25 , 55)/10;
    
            F=M*a
            N=M *9.8
            dades = {
              M,
              a
            };
    
            localStorage.setItem("dades", JSON.stringify(dades));
    
            enunciat = subs(enunciat, enunciat.indexOf("[M]"), M);
            enunciat = subs(enunciat, enunciat.indexOf("[a]"), a);
            
              document.querySelector(".solution").innerHTML = `<b> a) </b>La força amb la que l'està empenyent el vehicle és de ${F.toFixed(2)}N <br> <b>b)</b> La força Normal és de ${N.toFixed(2)}N, igual que el pes, ja que estem en un pla horitzontal.`;


          break;
          
          case 2:
            M = dades ? dades.M : ran(850, 2250);
            T = dades ? dades.T : ran( 12000, 20000);
            ac = dades ? dades.ac : ran( 150, 275)/100;
            a=(T-M*9.8)/M
            Te=M*ac+M*9.8
            
            dades = {
              M,
              T,
              ac
            };
    
            localStorage.setItem("dades", JSON.stringify(dades));
    
            enunciat = subs(enunciat, enunciat.indexOf("[M]"), M);
            enunciat = subs(enunciat, enunciat.indexOf("[T]"), T);
            enunciat = subs(enunciat, enunciat.indexOf("[ac]"), ac);


            
            if (a>0){

              document.querySelector(".solution").innerHTML = `<b> a) </b>L'acceleració amb la que elevarà el cos és de ${a.toFixed(2)}m/s<sup>2</sup> <br> <b>b)</b> La tensió que ha de suportar el cable amb aquesta acceleració és de ${Te.toFixed(2)}N`;
            }
            else{
              document.querySelector(".solution").innerHTML = `<b> a) </b> El cos es quedarà al terra, ja que la força que fa la tensió no és suficient. <br> <b>b)</b> La tensió que ha de suportar el cable amb aquesta acceleració és de ${Te.toFixed(2)}N`;

            }
            


          break;
          }
      }
      else if (typeOfExercise == 1){
        switch (parseInt(enun)){
          case 0:

            m = dades ? dades.m : ran(5000, 20000);
            vo = dades ? dades.vo : ran(100, 400);
            d = dades ? dades.d : ran(500, 2000);
            F = dades ? dades.F : ran(10000, 20000);
            
            dades = {m, vo, d, F};
            localStorage.setItem("dades", JSON.stringify(dades));

            enunciat = subs(enunciat, enunciat.indexOf("[d]"), d);
            enunciat = subs(enunciat, enunciat.indexOf("[m]"), m);
            enunciat = subs(enunciat, enunciat.indexOf("[vo]"), vo);
				    enunciat = subs(enunciat, enunciat.indexOf("[F]"), F);

            vo = vo/3.6;
            a = (-F)/m;
            
            t = -vo/a; //solució 1

            x = 0 + vo*t +1/2*a*t*t; // solució 2

            var attr;
            if (x >= d)
              attr = "El tren atropellarà a l'alumne.";
            else
              attr = "L'alumne no serà atropellat pel tren";
           
            document.querySelector(
              ".solution"
            ).innerHTML = `El temps que tardarà en frenar serà de ${t.toFixed(2)} segons.<br>El tren s'aturarà a ${x.toFixed(2)} m de distància<br>${attr}`;
            
            

            break;

          case 1:
            m1 = dades ? dades.m1 : ran(3, 25);
            m2 = dades ? dades.m2 : ran(3, 25);
            
            a=(m2*9.8-m1*9.8)/(m1+m2)
            t=Math.sqrt(1/Math.abs(a))
            dades = {m1,m2};
            
            localStorage.setItem("dades", JSON.stringify(dades));

            enunciat = subs(enunciat, enunciat.indexOf("[m1]"), m1);
            enunciat = subs(enunciat, enunciat.indexOf("[m2]"), m2);

            document.querySelector(".solution").innerHTML = `<b>a)</b>L'acceleració del sistema és de ${a.toFixed(2)}m/s<sup>2</sup>  &nbsp <b>Nota: </b> Hem agafat el sentit de l'eix de coordenades cap a la massa 2! <br> <b>b)</b> El sistema tardarà ${t.toFixed(2)} segons en separar-se &nbsp <b>Nota: </b>Si un es mou 0,5 metres els cossos es separaran 1 metre`;

            break;
        
          case 2:
            m1 = dades ? dades.m1 : ran(3, 25);
            m2 = dades ? dades.m2 : ran(3, 25);
            m3 = dades ? dades.m3 : ran(3, 25);
            
            a=(m3*9.8)/(m1+m2+m3)
            t1=m1*a
            t2=m2*a+t1
           
            dades = {m1,m2,m3};
            
            localStorage.setItem("dades", JSON.stringify(dades));

            enunciat = subs(enunciat, enunciat.indexOf("[m1]"), m1);
            enunciat = subs(enunciat, enunciat.indexOf("[m2]"), m2);
            enunciat = subs(enunciat, enunciat.indexOf("[m3]"), m3);

            document.querySelector(".solution").innerHTML = `<b>a)</b>L'acceleració del sistema de partícules és de ${a.toFixed(2)}m/s<sup>2</sup>  &nbsp <b>Nota: </b> Hem agafat el setnit de l'eix de coordenades cap a la massa 3! <br> <b>b)</b> La tensió entre la m1 i m2 és de ${t1.toFixed(2)} N i la d'entre la m2 i la m3 és de ${t2.toFixed(2)} N`;
           

            break;
            }
      
      }
      else if (typeOfExercise == 2){
        switch (parseInt(enun)){
          case 0:
            m = dades ? dades.m : ran(2, 20);
            g = dades ? dades.g : ran(10, 80);
            vo = dades ? dades.vo : ran(10, 100);
            mu = dades? dades.mu : ran(0, 1000)/1000;

            dades = {m, g, vo, mu};
            localStorage.setItem("dades", JSON.stringify(dades));

            enunciat = subs(enunciat, enunciat.indexOf("[g]"), g);
            enunciat = subs(enunciat, enunciat.indexOf("[m]"), m);
            enunciat = subs(enunciat, enunciat.indexOf("[vo]"), vo);
				    enunciat = subs(enunciat, enunciat.indexOf("[mu]"), mu);
            fg = g
            g = g*Math.PI/180;

            Fr = mu*m*9.8*Math.cos(g);
            console.log(Math.cos(g));
            console.log("fr", Fr);
            a = (-(Fr) - (m*9.8*Math.sin(g)))/m;
            console.log("a",a)
            t = (-vo)/a;
            console.log("t",t);
            x = 0 +vo*t + 1/2*a*t*t;
            console.log("x", x)
            h = x * Math.sin(g*Math.PI/180);


              document.querySelector(
                ".solution"
              ).innerHTML = `Primer trobarem la Fr que correspondrà a μmgcos(α) &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; ${mu}·${m}·9.8·cos(${fg}) = ${Fr.toFixed(2)} N
              <br>Després mitjançant la segona llei de Newton on ΣF = m·a  ; trobarem l'acceleració<br> <span id='formula1'></span> &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; <span id='formula2'></span>
              <br><br>Com que V = V<sub>o</sub> + a·t, sabrem que <span id='formula3'></span>  &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; <span id='formula4'></span><br>
              Després, aplicarem cinemàtica i obtindrem que la distància recorreguda és de ${x.toFixed(2)}.
              <br>Per tant, podrem dir que com que <span id='formula5'></span>&nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp;<span id='formula6'></span>&nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp;<span id='formula7'></span> metres l'altura`;
              katex.render("a = \\frac{-Fr -m*9.8*sin(\\alpha)}{m}", formula1);
              katex.render(`\\frac{-${Fr.toFixed(2)}- ${m}*9.8*sin(${fg})}{${m}} = ${a.toFixed(2)}\\space m/s^2`, formula2);
              katex.render("t = \\frac{-V_{o}}{a}",formula3);
              katex.render(`\\frac{${-vo}}{${a.toFixed(2)}} = ${t.toFixed(2)} s`, formula4);
              katex.render(`sin(\\alpha) = \\frac{x}{h}`, formula5);
              katex.render(`h = \\frac{x}{sin(\\alpha)}`,formula6);
              katex.render(`h = \\frac{${x.toFixed(2)}}{sin(${fg})} = ${h.toFixed(2)}`, formula7)
        
              //<br>Arribarà a una altura de ${h.toFixed(2)} metres.`;
            

          break;
          case 1:
            m = dades ? dades.m : ran(100, 300);
            g = dades ? dades.g : ran(55, 80);

            mu = dades ? dades.mu : ran(50, 600)/1000;
            x = dades? dades.x : ran(15, 30);
            t = dades? dades.t : ran(5, 20);

            dades = {m, g, mu, x, t};
            localStorage.setItem("dades", JSON.stringify(dades));

            enunciat = subs(enunciat, enunciat.indexOf("[g]"), g);
            enunciat = subs(enunciat, enunciat.indexOf("[m]"), m);
            enunciat = subs(enunciat, enunciat.indexOf("[mu]"), mu);
				    enunciat = subs(enunciat, enunciat.indexOf("[x]"), x);
            enunciat = subs(enunciat, enunciat.indexOf("[t]"), t);
              
            fg = g
            g = g*Math.PI/180
            Fr = mu * m * 9.8*Math.cos(g)
            a = (-(Fr) + m*9.8*Math.sin(g))/m
            x1 = 1/2*a*t*t // sol 1
            v = Math.sqrt(2*a*x)
            a1 = (mu*m*9.8)/m;
            t1 = -v/a1

            if (Fr > m*9.8*Math.sin(g))
            document.querySelector(
              ".solution"
            ).innerHTML = "El cos no cau ja que el Fregament que exerceix el pla sobre el cos és major a major a la força que fa el seu propi pés. Per contrarestar-ho hauriem de fer que l'angle sigui major."
            else {
            document.querySelector(
              ".solution"
            ).innerHTML = `<b>a)</b> <br>Primer de tot haurem de calcular la força de fregament.<br>
            <span id='formula1'></span> &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; <span id='formula2'></span>
            <br> Tot seguit, calcularem les acceleracions:
            <span id='formula3'></span> &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; <span id='formula4'></span><br>
            Ara aplicarem cinemàtica i trobarem la distàcia recorreguda prenent com a eix x el pla inclinat<br> <span id='formula5'></span> &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp;<span id='formula6'></span> <br> <b> b) </b> <br> Primer, trobem la velocitat final que el cos assolirà al arribar al final del pla inclinat: <br><span id='formula7'></span> &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; <span id='formula8'></span> <br>Ara trobem l'acceleració del cos que el fregament exerceix en el pla horitzontal (ja que ara estem al terra):<br> <span id='formula9'></span> &nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp; <span id='formula10'></span><br>Ara trobem el temps que tarda en parar-se des de que ha arribat al pla horitzontal, mitjançant la seva equació de la velocitat: <br><span id='formula11'></span>&nbsp;&nbsp; <span style="font-size:1.5rem;">&rarr;</span> &nbsp;&nbsp;<span id='formula12'></span>`;
            

            katex.render("Fr = \\mu*R",formula1);
            katex.render(`Fr = ${mu}*${(m*9.8).toFixed(2)}*sin(${fg}) = ${Fr.toFixed(2)} N`,formula2);
            katex.render(`a = \\frac{\\sum{F}}{m}`, formula3)
            katex.render(`a = \\frac{${-Fr.toFixed(2)} + ${m}*9.8*sin(${fg})}{${m}} = ${a.toFixed(2)} \\space m/s^2`, formula4);
            katex.render("X = X_{o}+V_{o}*t+\\frac{1}{2}*a*t^2", formula5)
            katex.render(`X = 0+0+\\frac{1}{2}*${a.toFixed(2)}*${t}^2 = ${x1.toFixed(2)} \\space m`, formula6);
            katex.render(`V= \\sqrt[2]{2*a*x}`, formula7);
            katex.render(`V= \\sqrt[2]{2*${a.toFixed(2)}*${x.toFixed(2)}} = ${v.toFixed(2)} \\space m/s`, formula8);
            katex.render("a = \\frac{\\sum{F}}{m}",formula9);
            katex.render(`a = \\frac{${mu}*${m}*9.8}{m} = ${a1.toFixed(2)} \\space m/s^2`,formula10);
            katex.render(`t = \\frac{-v}{a}`,formula11);
            katex.render(`t = \\frac{-${v.toFixed(2)}}{${a1.toFixed(2)}} = ${t.toFixed(2)} \\space s`,formula12);
            
            }
            
            



            
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