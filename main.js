// select button 
let buttons = document.querySelectorAll('button')
let result =  document.querySelector('.rectangle')
// display the button on the screen
buttons.forEach(button => {
  button.addEventListener('click', display)
 }
);
function display(){
  if(this.textContent == '=')return;
  result.textContent += this.textContent
}

//equal function
document.querySelector('.equals').addEventListener('click',operation)
function operation(){
  result.textContent = eval(result.textContent )
}