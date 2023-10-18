import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

const Card = ({ avatar, question, answer }) => {
  const [isShow, setIsShow] = useState(false);

  const toggleInfo = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="card">
      <img className="card-image" src={avatar} alt="Avatar" />
      <h3 className="card-title">{question}</h3>
      <button className="card-button" onClick={toggleInfo}>
        {isShow ? <TiMinus /> : <TiPlus />}
      </button>
      {isShow && (
        <div className="card-info-container">
          {Array.isArray(answer) ? (
            <ul className="card-info-list">
              {answer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="card-info">{answer}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
