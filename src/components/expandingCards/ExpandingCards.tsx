import classNames from "classnames";
import "./expandingCards.scss";
import React, { useState } from "react";

interface ExpandingCards {
  cards: Array<Card>;
  className?: string;
}

interface Card {
  name: string;
  url: string;
  icon?: string;
  info?: {
    title: string;
    desc: string;
  };
}

export const ExpandingCards: React.FC<ExpandingCards> = (props) => {
  const { cards, className } = props || {}; // destructiring to handle undefined
  const [active, setActive] = useState<number>(0);
  const handleActive = (next: number) => {
    setActive(next);
  };
  return (
    <div className={classNames("expanding-cards", className)}>
      {cards.map((card, index) => {
        return (
          <div
            key={"expand-card-index" + index}
            className={classNames(
              "expanding-cards__option",
              active === index && "expanding-cards__option--active"
            )}
            onClick={() => handleActive(index)}
            style={{ backgroundImage: card.url ?? "" }}
          >
            <div className="expanding-cards__option__shadow" />
            <div className="expanding-cards__option__label">
              <div className="expanding-cards__option__icon">
                <i className={card.icon} />
              </div>
              <div className="expanding-cards__option__info">
                <div className="expanding-cards__option__title">
                  {card.info?.title}
                </div>
                <div className="expanding-cards__option__desc">
                  {card.info?.desc}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
