let openPopupButton = document.querySelector('.profile__edit-button'); //кнопка открытия попапа
let closePopupButton = document.querySelector('.popup__close'); //кнопка закрытия попапа
let popup = document.querySelector('.popup'); //Попап редактирования профиля
let nameProfile = document.querySelector('.profile__title'); //имя
let jobProfile = document.querySelector('.profile__subtitle');//о себе
let namePopup = document.querySelector('#name');//поле "имя" попапа
let jobPopup = document.querySelector('#job');//поле "Род деятельности"
let form = document.querySelector('.popup__form'); //форма

//Функция открытия/закрытия попапа
function openPopup() {
  if (popup.classList.contains('popup__opened') === false) {
    namePopup.value = nameProfile.textContent;
    jobPopup.value = jobProfile.textContent;
    popup.classList.add('popup__opened');
  }
  else {
    popup.classList.remove('popup__opened');
  }
}

//обработчик отправки "формы"
form.addEventListener('submit',
  function (event) {
      event.preventDefault();
      nameProfile.textContent = namePopup.value;
      jobProfile.textContent = jobPopup.value;
      openPopup();
  }
)

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', openPopup);
