// // select button 
// let buttons = document.querySelectorAll('button')
// let result =  document.querySelector('input')
// // display the button on the screen
// buttons.forEach(button => {
//   button.addEventListener('click', display)
//  }
// );
// function display(){
//   if(this.textContent == '=')return;
//   result.textContent += this.textContent
// }

// //equal function
// document.querySelector('.equals').addEventListener('click',operation)
// function operation(){
//   result.textContent = eval(result.textContent )
// }

// let buttons = document.querySelectorAll('button')
// let result = document.querySelector('.rectangle')

// buttons.forEach(button => {
//   button.addEventListener('click', display)
// })
// function display(){
//   if(this.textContent =='=')return;
//   result.textContent += this.textContent
// }
// document.querySelector('.equals').addEventListener('click', expression)
// function expression(){
//   result.textContent = eval(result.textContent)
// }


//Initiate a empty div and be empty
function Calculator(displayElement){
  this.displayElement = displayElement
  this.currentValue = ''
}

//Add content to the div 
Calculator.prototype.append = function(value){
  if(value =='=')return;
  this.currentValue += value
  this.displayElement.textContent = this.currentValue
}

//calculate based off the div input
Calculator.prototype.calculate = function(){
  this.currentValue = String(
    Function(`return ${this.currentValue}`)()
  )
  this.displayElement.textContent = this.currentValue
}

const display = document.querySelector('.rectangle')
const calculator = new calculator(display)

document.querySelectorAll('button').forEach(buttons => buttons.addEventListener('click', ()=>{
  
}))