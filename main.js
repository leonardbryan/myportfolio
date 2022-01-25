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

if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var c = 0;

    if(nameField.value == '' || nameField.value == null){
      nameField.classList.add('border-danger');
      c++;
    }
    else{
      nameField.classList.add('border-success');x
    }

    if(emailField.value == '' || emailField.value == null){
      emailField.classList.add('border-danger');
      c++;
    }
    else{
      emailField.classList.add('border-success');
    }

    if(textareaField.value == '' || textareaField.value == null){
      textareaField.classList.add('border-danger');
      c++;
    }

    else{
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
