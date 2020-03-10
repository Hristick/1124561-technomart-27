
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

  write_me_button.addEventListener("click", function(evt){
    evt.preventDefault();
    popup_form.classList.add("modal-show");
  });

  close_form.addEventListener("click", function(evt){
    evt.preventDefault();
    popup_form.classList.remove("modal-show");
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
  