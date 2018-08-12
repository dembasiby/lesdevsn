var inputs = document.getElementById('inputs');
var bouton = document.getElementById('soumettre');
var inputFieldFilledCount = 0;

bouton.disabled = true;

inputs.addEventListener('keyup', function(e) {
  
  var self = this;
  // La longueur maximale alloué est 4.
  if (self.value.length === 4) {
    self.blur();
    inputFieldFilledCount += 1;
    
    if (self.nextElementSibling) {
      self.nextElementSibling.focus();
      self = (self.nextElementSibling);
    }
  }

  if (inputFieldFilledCount === 4) {
    bouton.disabled = false;
  }
});
