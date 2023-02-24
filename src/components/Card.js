function Card({ card, onCardClick, onDeleteClick }) {
  return (
    <article className="cards__element">
      <img
        className="cards__image"
        alt={card.name}
        src={card.link}
        onClick={() => onCardClick(card)}
      />
      <div className="cards__text">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-box">
          <button className="cards__like" type="button"></button>
          <p className="cards__like-counter">
            {card.likes.length > 0 ? card.likes.length : null}
          </p>
        </div>
        <button
          className="cards__delete"
          type="button"
          onClick={onDeleteClick}
        ></button>
      </div>
    </article>
  );
}

export default Card;
