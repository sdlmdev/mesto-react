import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect, useState } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarRef = useRef();

  const [isInputValidation, setIsInputValidation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(e) {
    if (e.target.validity.valid) {
      setIsInputValidation(true);
      setErrorMessage("");
    } else {
      setIsInputValidation(false);
      setErrorMessage(e.target.validationMessage);
    }
  }

  useEffect(() => {
    setErrorMessage("");
    setIsInputValidation(false);

    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="popup-avatar"
      title="Обновить аватар"
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      titleClass=""
      form="popup-avatar__form"
      container="popup-avatar__container"
      onSubmit={handleSubmit}
      buttonStatus={isInputValidation}
    >
      <input
        type="url"
        className={`popup__input popup__input_content_link ${
          !errorMessage ? "" : "popup__input_type_error"
        }`}
        name="avatar"
        placeholder="Ссылка на изображение"
        required
        id="avatar-input"
        ref={avatarRef}
        onChange={handleInputChange}
      />
      <span className="popup__input-error avatar-input-error popup-avatar__error">
        {errorMessage}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
