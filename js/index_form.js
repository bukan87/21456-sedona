var showHideButton = document.querySelector(".btn.show_hide");

showHideButton.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector(".search");
  form.classList.toggle("show_search");
});
