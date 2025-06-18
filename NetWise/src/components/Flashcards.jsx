import React, {useState} from "react";

const Flashcards = ({ card, flipped, setFlipped }) => {
    // const [flipped, setFlipped] = useState(false)
    return (
        <div className= "card">
            <div className={`card-content ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
                <div className={`card-front ${card.category}`}>
                {card.image && <img src={card.image} alt="card front" />}
                <p>{card.question}</p>
                </div>
                <div className={`card-back ${card.category}`}>
                <p>{card.answer}</p>
                </div>
            </div>
        </div>
    );
}

export default Flashcards;
