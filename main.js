const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',() => {
    document.body.classList.toggle('dark');
} );

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
let inputs = document.querySelectorAll('input')
let nameField = document.getElementById('floatingInput')
let emailField = document.getElementById('floatingPassword')
let textareaField = document.getElementById('floatingTextarea2')
let tArea = document.querySelectorAll('textarea')

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// function checkEmail(){
//   if(emailField.value.match(pattern)){
//     emailField.classList.remove('border-danger');
//     emailField.classList.add('border-success');
//   }
//   else{
//     emailField.classList.remove('border-success');
//     emailField.classList.add('border-danger');    
//   }
// }

if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var c = 0;
 
    if(nameField.value == '' || nameField.value == null){
      nameField.classList.remove('border-success');
      nameField.classList.add('border-danger');
      c++;
    }
    else{
      nameField.classList.remove('border-danger');
      nameField.classList.add('border-success');
    }

    if(emailField.value.match(pattern)){
      emailField.classList.remove('border-danger');
      emailField.classList.add('border-success');
    }
    else{
      emailField.classList.remove('border-success');
      emailField.classList.add('border-danger');   
      c++; 
    }

    if(textareaField.value == '' || textareaField.value == null){
      textareaField.classList.remove('border-success');
      textareaField.classList.add('border-danger');
      c++;
    }

    else{
      textareaField.classList.remove('border-danger');
      textareaField.classList.add('border-success');
    }

    if(c == 0) {
      var toast = new bootstrap.Toast(toastLiveExample)
      inputs.forEach(input => input.value = '');
      tArea.forEach(textarea => textarea.value = '');
      textareaField.classList.remove('border-success');
      emailField.classList.remove('border-success');
      nameField.classList.remove('border-success');
      textareaField.classList.remove('border-danger');
      emailField.classList.remove('border-danger');
      nameField.classList.remove('border-danger');
      toast.show()
    }
    
  })
}


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
