
document.querySelectorAll(".open-map").forEach(function() {
  var link = document.querySelector(".open-map");
  var popup = document.querySelector(".popup");
  var close = popup.querySelector(".close-map");

  link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
  close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
});
    
document.querySelectorAll(".write-me").forEach(function() {
  var write_me_button = document.querySelector(".write-me");
  var popup_form = document.querySelector(".popup-form");
  var close_form = document.querySelector(".close-form");
  var first_name = popup_form.querySelector("[id=name]");
  var e_mail = popup_form.querySelector("[id=e-mail]");
  var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("first_name");
  } catch (err) {
    isStorageSupport = false;
  }

  write_me_button.addEventListener("click", function(evt){
    evt.preventDefault();
    popup_form.classList.add("modal-show");
    first_name.focus();
    if (storage) {
      first_name.value = storage;
      e_mail.focus();
    } else {
      first_name.focus();
    }
  });

  close_form.addEventListener("click", function(evt){
    evt.preventDefault();
    popup_form.classList.remove("modal-show");
    popup_form.classList.remove("modal-error");

  });
  popup_form.addEventListener("submit", function (evt) {
    if (!first_name.value || !e_mail.value) {
      evt.preventDefault();
      popup_form.classList.remove("modal-error");
      popup_form.offsetWidth = popup_form.offsetWidth;
      popup_form.classList.add("modal-error");
      console.log("Нужно ввести логин и пароль");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("first_name", first_name.value);
      }
    } 
  });    
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
        if (popup_form.classList.contains("modal-show")) {
          popup_form.classList.remove("modal-show");
          popup_form.classList.remove("modal-error");
        }
      }
    }); 
});

document.querySelectorAll(".buy-modal").forEach(function() {
  var popup_in_cart = document.querySelector(".popup-in-cart");
  var buy_link = document.querySelector(".buy-modal");
  var close_form_catalog = document.querySelector(".close-form-catalog");

  buy_link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup_in_cart.classList.add("modal-show");
  });

  close_form_catalog.addEventListener("click", function(evt){
    evt.preventDefault();
    popup_in_cart.classList.remove("modal-show");
  });
});
