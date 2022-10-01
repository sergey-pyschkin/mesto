let openPopupButton = document.querySelector(".profile__edit-button"); //кнопка открытия попапа
let closePopupButton = document.querySelector(".popup__close"); //кнопка закрытия попапа
let popup = document.querySelector(".popup"); //Попап редактирования профиля
let nameProfile = document.querySelector(".profile__title"); //имя
let jobProfile = document.querySelector(".profile__subtitle"); //о себе
let namePopup = document.querySelector("#name"); //поле "имя" попапа
let jobPopup = document.querySelector("#job"); //поле "Род деятельности"
let form = document.querySelector(".popup__form"); //форма

//Функция открытия/закрытия попапа
function togglePopup() {
  if (popup.classList.contains("popup_opened") === false) {
    namePopup.value = nameProfile.textContent;
    jobPopup.value = jobProfile.textContent;
    popup.classList.add("popup_opened");
  } else {
    popup.classList.remove("popup_opened");
  }
}

function formSubmitHandler(event) {
  event.preventDefault();
  nameProfile.textContent = namePopup.value;
  jobProfile.textContent = jobPopup.value;
  togglePopup();
}

//обработчик отправки "формы"
form.addEventListener("submit", formSubmitHandler);

openPopupButton.addEventListener("click", togglePopup);
closePopupButton.addEventListener("click", togglePopup);
