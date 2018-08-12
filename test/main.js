function myFunction(inputId) {
  let element = document.getElementById(inputId);
  let value = element.value;
  console.log(this);

  maxChar(value,inputId)
}

function maxChar(value, inputId) {
  let size = 4;

  if(value.length >= size){
    console.log(value,inputId+1);
    document.getElementById(inputId).blur(); 
    focusMe(inputId+1)
  }   
}

function focusMe(inputId) {
  if(inputId < 5){
    document.getElementById(inputId).focus(); 
  }
}