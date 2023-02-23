import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopup, setImagePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isConfirmPlacePopupOpen, setIsConfirmPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick () { setIsEditAvatarPopupOpen(true) }

  function handleEditProfileClick () { setIsEditProfilePopupOpen(true) }

  function handleAddPlaceClick () { setIsAddPlacePopupOpen(true) }

  function handleDeleteCardClick () { setIsConfirmPlacePopupOpen(true) }

  function handleCardClick (card) {
     setSelectedCard(card) 
     setImagePopup(true)
    }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopup(false);
    setIsConfirmPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
        onEditAvatar={ handleEditAvatarClick }
        onEditProfile={ handleEditProfileClick }
        onAddPlace={ handleAddPlaceClick }
        onCardClick={ handleCardClick }
        onDeleteClick={ handleDeleteCardClick }/>
        <Footer />
        <PopupWithForm
        isOpen={ isEditAvatarPopupOpen }
        onClose={ closeAllPopups }
        name="popup-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        titleClass=""
        form="popup-avatar__form"
        container="popup-avatar__container"
        children={
          <>
            <input
            type="url"
            className="popup__input popup__input_content_link"
            name="avatar"
            placeholder="Ссылка на изображение"
            required
            id="avatar-input" />
            <span className="popup__input-error avatar-input-error popup-avatar__error"></span>
          </>}
        />
        <PopupWithForm
        isOpen={ isEditProfilePopupOpen }
        onClose={ closeAllPopups }
        name="profile-popup"
        title="Редактировать профиль"
        container=""
        form=""
        titleClass=""
        buttonText="Сохранить"
        children={
          <>
            <input
            type="text"
            className="popup__input popup__input_content_username"
            name="username"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            id="username-input"/>
            <span
            className="popup__input-error username-input-error"></span>
            <input
            type="text"
            className="popup__input popup__input_content_description"
            name="description"
            placeholder="Описание"
            minLength="2"
            maxLength="200"
            required
            id="description-input" />
            <span className="popup__input-error description-input-error"></span>
          </>}
        />
        <PopupWithForm
        isOpen={ isAddPlacePopupOpen }
        onClose={ closeAllPopups }
        name="popup-card"
        title="Новое место"
        container=""
        titleClass=""
        form="popup-card__form"
        buttonText="Создать"
        children={
          <>
            <input
            type="text"
            className="popup__input popup__input_content_name"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            id="name-input" />
            <span className="popup__input-error name-input-error"></span>
            <input
            type="url"
            className="popup__input popup__input_content_link"
            name="link"
            placeholder="Ссылка на картинку"
            required
            id="link-input" />
            <span className="popup__input-error link-input-error"></span>
          </>}
        />
        <PopupWithForm
        isOpen={ isConfirmPlacePopupOpen }
        onClose={ closeAllPopups }
        titleClass="popup-delete-container__title"
        container="popup-delete-container"
        name="popup-delete"
        form=""
        title="Вы уверены?"
        buttonText="Да"
        />
        <ImagePopup
        card={ selectedCard }
        onClose={ closeAllPopups }
        isOpen={ isImagePopup }
        />
      </div>
    </div>
  );
}

export default App;