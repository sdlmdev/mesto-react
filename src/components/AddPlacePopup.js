import PopupWithForm from "./PopupWithForm";
import { useEffect, useState } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const [isInputValidationName, setIsInputValidationName] = useState(false);
  const [errorMessageName, setErrorMessageName] = useState("");
  const [isInputValidationLink, setIsInputValidationLink] = useState(false);
  const [errorMessageLink, setErrorMessageLink] = useState("");

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

  function handleInputChangeLink(e) {
    setLink(e.target.value);
    if (e.target.validity.valid) {
      setIsInputValidationLink(true);
      setErrorMessageLink("");
    } else {
      setIsInputValidationLink(false);
      setErrorMessageLink(e.target.validationMessage);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  useEffect(() => {
    setErrorMessageName("");
    setIsInputValidationName(false);
    setErrorMessageLink("");
    setIsInputValidationLink(false);
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="popup-card"
      title="Новое место"
      container=""
      titleClass=""
      form="popup-card__form"
      buttonText={isLoading ? "Сохранение..." : "Создать"}
      buttonStatus={isInputValidationName && isInputValidationLink}
    >
      <input
        type="text"
        className={`popup__input popup__input_content_name ${
          !errorMessageName ? "" : "popup__input_type_error"
        }`}
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        id="name-input"
        onChange={handleInputChangeName}
        value={name || ""}
      />
      <span className="popup__input-error name-input-error">
        {errorMessageName}
      </span>
      <input
        type="url"
        className={`popup__input popup__input_content_link ${
          !errorMessageLink ? "" : "popup__input_type_error"
        }`}
        name="link"
        placeholder="Ссылка на картинку"
        required
        id="link-input"
        onChange={handleInputChangeLink}
        value={link || ""}
      />
      <span className="popup__input-error link-input-error">
        {errorMessageLink}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
