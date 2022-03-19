/*const suma=(a,b) => {
    return a+b
};
alert(suma(1,2));

//utilizando un parametro nomas

const mul =n => n*2;
alert(mul(5))
//cuando este vacio

const vacio= ()=>alert("Hello");

alert (vacio());
//funciones flecha con condiciones
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();*/
//Reescribir las  funciones a funciones con flecha
/*function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );*/

  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

