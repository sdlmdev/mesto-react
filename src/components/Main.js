import { useEffect, useState } from "react";
import { configApi } from "../utils/Api";
import Card from "./Card";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onDeleteClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([configApi.getUserData(), configApi.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(
          cardsData.map((card) => ({
            likes: card.likes,
            link: card.link,
            name: card.name,
            owner: card.owner,
            _id: card._id,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-area">
          <img
            src={userAvatar}
            className="profile__avatar"
            alt="Аватар профиля"
          />
          <button
            className="profile__avatar-edit"
            type="button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__editor"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
