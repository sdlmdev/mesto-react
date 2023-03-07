import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [isInputValidationName, setIsInputValidationName] = useState(false);
  const [errorMessageName, setErrorMessageName] = useState("");
  const [isInputValidationAbout, setIsInputValidationAbout] = useState(false);
  const [errorMessageAbout, setErrorMessageAbout] = useState("");

  function handleInputChangeName(e) {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setIsInputValidationName(true);
      setErrorMessageName("");
    } else {
      setIsInputValidationName(false);
      setErrorMessageName(e.target.validationMessage);
    }
  }

  function handleInputChangeAbout(e) {
    setDescription(e.target.value);
    if (e.target.validity.valid) {
      setIsInputValidationAbout(true);
      setErrorMessageAbout("");
    } else {
      setIsInputValidationAbout(false);
      setErrorMessageAbout(e.target.validationMessage);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setErrorMessageName("");
    setIsInputValidationName(false);
    setErrorMessageAbout("");
    setIsInputValidationAbout(false);
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="profile-popup"
      title="Редактировать профиль"
      container=""
      form=""
      titleClass=""
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
      buttonStatus={isInputValidationName || isInputValidationAbout}
    >
      <input
        type="text"
        className={`popup__input popup__input_content_username ${
          !errorMessageName ? "" : "popup__input_type_error"
        }`}
        name="username"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        id="username-input"
        value={name || ""}
        onChange={handleInputChangeName}
      />
      <span className="popup__input-error username-input-error">
        {errorMessageName}
      </span>
      <input
        type="text"
        className={`popup__input popup__input_content_description ${
          !errorMessageAbout ? "" : "popup__input_type_error"
        }`}
        name="description"
        placeholder="Описание"
        minLength="2"
        maxLength="200"
        required
        id="description-input"
        value={description || ""}
        onChange={handleInputChangeAbout}
      />
      <span className="popup__input-error description-input-error">
        {errorMessageAbout}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
