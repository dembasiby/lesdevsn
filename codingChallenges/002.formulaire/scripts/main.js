var $form = $('#formulaire');
var $bouton = $('#soumettre');
var inputFieldFilledCount = 0;

$bouton.get(0).disabled = true;

$form.on('keyup', 'input', function(e) {
  var self = e.target;
  var maxLength = +self.getAttribute('maxlength');

  if (self.value.length === maxLength) {
    self.blur();
    inputFieldFilledCount += 1;
    if (self.nextElementSibling) {
      self.nextElementSibling.focus();
      e.target = self.nextElementSibling;
    }
  }
  
  if (inputFieldFilledCount === 4) {
    $bouton.get(0).disabled = false;
  } 
});