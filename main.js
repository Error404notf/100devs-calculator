let buttons = document.querySelectorAll('button')
let result = document.querySelector('.rectangle')

buttons.forEach(button =>{
  button.addEventListener('click', display)
})
function display(){
  if(this.textContent ==='=') return;
  result.textContent += this.textContent
}

document.querySelector('.equals').addEventListener('click', equal)
function equal(){
  try{
    result.textContent = eval(result.textContent.replace(/x/g, '*'))
  }catch {
    result.textContent = 'Error found'
  }
  
}