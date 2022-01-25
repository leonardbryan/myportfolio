const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',() => {
    document.body.classList.toggle('dark');
} );

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
let inputs = document.querySelectorAll('input');
let tArea = document.querySelectorAll('textarea');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    inputs.forEach(input => input.value = '');
    tArea.forEach(textarea => textarea.value = '');
    toast.show()
  })
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
