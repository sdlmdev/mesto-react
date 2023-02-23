import React from "react";

function PopupWithForm({ name, title, buttonText, children, isOpen, onClose, container, form, titleClass }) {
  return (
    <div className={`popup ${ name } ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container ${ container }`}>
        <button className="popup__close" type="button" onClick={ onClose }></button>
        <h2 className={`popup__title ${ titleClass }`}>{ title }</h2>
        <form className={`popup__form ${ form }`} name={ name }>
          <fieldset className="popup__set">
            { children }
            <button className="popup__button" type="submit">{ buttonText }</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;