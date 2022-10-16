const popupProfileOpenButton = document.querySelector(".profile__edit-button");
const popupProfileCloseButton = document.getElementById("edit__close-button");
const popupAddOpenButton = document.querySelector(".profile__add");
const popupAddCloseButton = document.getElementById("add__close-button");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__subtitle");
const namePopup = document.querySelector("#editName");
const jobPopup = document.querySelector("#editJob");
const formEdit = document.querySelector("#edit-form");
const formAdd = document.querySelector("#add-form");
const namePlace = document.querySelector("#addName");
const placeImg = document.querySelector("#addLink");
const caseElement = document.querySelector(".places");
const cardTemplate = document.querySelector("#card-template").content;
const popupOpenImage = document.querySelector(".popup_image");
const popupOpenImageCloseButton = document.getElementById("image-close-button");
const popupImage = popupOpenImage.querySelector(".popup__place");
const popupName = popupOpenImage.querySelector(".popup__title-image");
const popups = document.querySelectorAll(".popup");

function keyHandler(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function clickClose(event) {
  if (event.target.classList.contains("popup")) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__error",
  errorClass: "popup__input_type_error",
};

enableValidation(config);

const initialCards = [
  {
    name: "Карачаевск",
    link: "./images/karachayevsk.jpg",
  },
  {
    name: "Гора Эльбрус",
    link: "./images/Gora-elbrus.jpg",
  },
  {
    name: "Домбаи",
    link: "./images/dombai.jpg",
  },
  {
    name: "Гора Эльбрус",
    link: "./images/Gora-elbrus.jpg",
  },
  {
    name: "Домбаи",
    link: "./images/dombai.jpg",
  },
  {
    name: "Карачаевск",
    link: "./images/karachayevsk.jpg",
  },
];

const deleteCard = (event) => {
  event.target.closest(".places__figure").remove();
};

const handleLikeClick = (event) => {
  event.target.classList.toggle("places__like_active");
};

const openPopupBigPic = (data) => {
  popupImage.src = data.link;
  popupName.textContent = data.name;
  popupImage.alt = data.name;
  openPopup(popupOpenImage);
};

function createCard(data) {
  const cardElement = cardTemplate
    .querySelector(".places__figure")
    .cloneNode(true);
  const placesImage = cardElement.querySelector(".places__image");
  cardElement.querySelector(".places__name").textContent = data.name;
  placesImage.src = data.link;
  placesImage.alt = data.name;
  cardElement
    .querySelector(".places__delete")
    .addEventListener("click", deleteCard);
  cardElement
    .querySelector(".places__like")
    .addEventListener("click", handleLikeClick);
  placesImage.addEventListener("click", () => openPopupBigPic(data));
  return cardElement;
}

const addCard = (data) => {
  const newCard = createCard(data);
  caseElement.prepend(newCard);
};

initialCards.forEach((data) => {
  addCard(data);
});

const cardsFormHandler = (event) => {
  event.preventDefault();
  addCard({
    name: namePlace.value,
    link: placeImg.value,
  });
  formAdd.reset();
  closePopup(popupAdd);
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyHandler);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyHandler);
}

function submitProfileForm(event) {
  event.preventDefault();
  nameProfile.textContent = namePopup.value;
  jobProfile.textContent = jobPopup.value;
  closePopup(popupEdit);
}

formEdit.addEventListener("submit", submitProfileForm);

popupProfileOpenButton.addEventListener("click", () => {
  namePopup.value = nameProfile.textContent;
  jobPopup.value = jobProfile.textContent;
  setSubmitButtonState(formEdit, config);
  resetError(formEdit, config);
  openPopup(popupEdit);
});
popupProfileCloseButton.addEventListener("click", () => closePopup(popupEdit));

popupAddOpenButton.addEventListener("click", () => {
  namePlace.value = "";
  placeImg.value = "";
  setSubmitButtonState(formAdd, config);
  resetError(formAdd, config);
  openPopup(popupAdd);
});

popupAddCloseButton.addEventListener("click", () => closePopup(popupAdd));

formAdd.addEventListener("submit", cardsFormHandler);

popupOpenImageCloseButton.addEventListener("click", () =>
  closePopup(popupOpenImage)
);

window.addEventListener("load", () => {
  document
    .querySelectorAll(".popup")
    .forEach((popup) => popup.classList.add("popup_transition"));
});

popups.forEach((popup) => popup.addEventListener("click", clickClose));
