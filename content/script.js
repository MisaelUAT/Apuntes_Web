// operationSystem();
// dateName();

// function dateName(){
// let date= prompt("¿What date is now?");
// let name = prompt("¿What is your name?");
    
    
// //     Control of the Days
    
// switch (date){
    
//            case "Lunes":
//                 alert("Welcome " + name + " Today is " + date);
//             break;
//             case "Martes":
//                 alert("Welcome " + name + " Today is " + date);
//             break;
//             case "Miercoles":
//                 alert("Welcome " + name + " Today is " + date);
//             break;
//             case "Jueves":
//                alert("Welcome " + name + " Today is " + date);
//             break;
//            case "Viernes":
//                 alert("Welcome " + name + " Today is " + date);
//             break;
    
//             default:
//                 alert("I sorry not validate")
//            break;
//     }
//  }

//  function operationSystem(){
//     let numberOne= prompt("¿What is your number one?");
//     let numberTwo= prompt("What is your number two");
//      let operation= prompt("1. Suma \n" + "2. Resta \n" + "3. Multiplicacion \n" + "4. Division \n")
//     numberOne= parseInt(numberOne);
//     numberTwo= parseInt(numberTwo);
//     let result;
    
//     if(operation== 1){
//          result= numberOne + numberTwo
//         alert(result);
//     }

//     else if(operation== 2){

//         result= numberOne - numberTwo;
//         alert(result)
//     }
//     else if(operation== 3){

//         result= numberOne * numberTwo;
//         alert(result)
//     }
//     else if(operation== 4){

//         result= numberOne / numberTwo;
//         alert(result)
//     }
// }



// Declaracion de Variables
let retry;
let i;
let position_initial;
let position_sum;
let valueCal;
let acumulate;
//Declaracion de Arrays
let valueCalfn = [];
let calification = [
  "Estadistica Aplicada",
  "Calculo",
  "Sistemas Operativos",
  "Sistemas de Informacion Cliente",
  "Habilidades de Expresion Internacional",
  "Programacion Intermedia",
  "Medio Ambiente y Desarrollo Sustentable"
];

//Menu Simple
do {
  let registration = prompt("Insert of the Registration");
//Pequeño FIltro de chequeo
  if (registration.includes("a2223410") == true) {
    calificationMateries();
  } 
  
  else {
    alert("Access Denied\n"); 
  }
  retry= prompt("Resgitrer New User \n 1. Yes\n 2. No")
  if(retry== 1){
      retry= 1;

  }

  if(retry== 0){

    alert("Thank you");
    retry= 0;
  }
  
} while (retry == 1);

//Funcion de Calcular Promedio
function calificationMateries() {
  for (i = 0; i < calification.length; i++) {
        valueCal = prompt(`Calification of the ${calification[i]}`);
          valueCal = parseInt(valueCal);
          if (valueCal >= 60) {
                switch (true) {
                  case valueCal === 60:
                    alert("¡Thanks for the participating!");
                    valueCalfn.push(valueCal);
                    acumulate= valueCalfn.reduce(function(position_initial,position_sum){
                      return position_initial + position_sum;

                    },0);

                    break;

                  case valueCal >= 60 && valueCal <= 79:
                    alert("¡Good!");
                    valueCalfn.push(valueCal);
                    acumulate= valueCalfn.reduce(function(position_initial,position_sum){
                    return position_initial + position_sum;
                    },0);
                    break;

                  case valueCal >= 80 && valueCal <= 89:
                    alert("¡Very Good!");
                    valueCalfn.push(valueCal);
                    acumulate= valueCalfn.reduce(function(position_initial,position_sum){
                      return position_initial + position_sum;
                    },0);
                    break;

                  case valueCal >= 90 && valueCal <= 100:
                    alert("¡Congralutation!");
                    valueCalfn.push(valueCal);
                    acumulate= valueCalfn.reduce(function(position_initial,position_sum){
                      return position_initial + position_sum;
                    },0);
                    break;
                }
              
          } else {
            alert("Thank you for the participating");
            valueCalfn.push(valueCal);
            acumulate= valueCalfn.reduce(function(position_initial,position_sum){
                      return (position_initial + position_sum);
                    },0);
        }

  }

    //Operaciones Finales y Impresion
    acumulate= acumulate/ 7;
    acumulate= parseInt(acumulate);
    alert("Tu calificacion final es: " + acumulate);
}







