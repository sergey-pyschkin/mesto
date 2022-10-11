const openEditPopupButton = document.querySelector(".profile__edit-button");
const closeEditPopupButton = document.getElementById("edit__close-button");
const openAddPopupButton = document.querySelector(".profile__add");
const closeAddPopupButton = document.getElementById("add__close-button");
const editPopup = document.querySelector(".popup_edit");
const addPopup = document.querySelector(".popup_add");
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__subtitle");
const namePopup = document.querySelector("#editName");
const jobPopup = document.querySelector("#editJob");
const editForm = document.querySelector("#edit-form");
const addForm = document.querySelector("#add-form");
const namePlace = document.querySelector("#addName");
const placeImg = document.querySelector("#addLink");
const caseElement = document.querySelector(".places");
const cardTemplate = document.querySelector("#card-template").content;

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

const popupOpenImage = document.querySelector(".popup_image");
const popupOpenImageCloseButton = document.getElementById("image-close-button");
const popupImage = popupOpenImage.querySelector(".popup__place");
const popupName = popupOpenImage.querySelector(".popup__title-image");

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
  addForm.reset();
  closePopup(addPopup);
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(event) {
  event.preventDefault();
  nameProfile.textContent = namePopup.value;
  jobProfile.textContent = jobPopup.value;
  closePopup(editPopup);
}

editForm.addEventListener("submit", formSubmitHandler);

openEditPopupButton.addEventListener("click", () => {
  namePopup.value = nameProfile.textContent;
  jobPopup.value = jobProfile.textContent;
  openPopup(editPopup);
});
closeEditPopupButton.addEventListener("click", () => closePopup(editPopup));

openAddPopupButton.addEventListener("click", () => openPopup(addPopup));
closeAddPopupButton.addEventListener("click", () => closePopup(addPopup));

addForm.addEventListener("submit", cardsFormHandler);

popupOpenImageCloseButton.addEventListener("click", () =>
  closePopup(popupOpenImage)
);

window.addEventListener("load", () => {
  document
    .querySelectorAll(".popup")
    .forEach((popup) => popup.classList.add("popup_transition"));
});
