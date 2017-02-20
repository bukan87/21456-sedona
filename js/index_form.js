var showHideButton = document.querySelector(".btn.show_hide");
var form = document.querySelector(".search");

function shoHideSearchForm(event){
  event.preventDefault();
  form.classList.toggle("show_search");
}

showHideButton.addEventListener("click", shoHideSearchForm);

document.addEventListener("DOMContentLoaded", shoHideSearchForm);
