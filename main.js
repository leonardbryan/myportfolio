// tooptip
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// toggle button for Dark Mode theme
const secLinks = document.querySelector(".navbar-nav");
const dmBgNavBar = document.querySelector("#dmNavBar");
const dmName = document.querySelector("#dmName");
const bgIcon = document.querySelector("#bgIcon");
const changeColor = document.querySelector("#moonIcon");
bgIcon.addEventListener("click", function(){
  changeColor.classList.toggle("text-secondary");
  bgIcon.classList.toggle("bg-white");
  dmName.classList.toggle("text-light");
  dmBgNavBar.classList.toggle("bg-secondary");
  secLinks.classList.toggle("text-whites");
})



class Tao {

    constructor (firstName,lastName,bt){
      this.firstName = firstName;
      this.lastName = lastName;
      this.bt = bt;
    }

    getFullname(){
      
      return `${this.firstname} ${this.lastName} ${this.bt}`;
    }
}

const tao1 = new Tao("Leonard","Bryan",1);
const tao2 = new Tao("Mark","Winston",2);
console.log(tao1.firstName);
