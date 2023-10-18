import onePieceData from "./data";

import Card from "./Card";
import { useState } from "react";

const List = () => {
  const [data] = useState(onePieceData);
  return (
    <div className="card-container">
      {data.map((onePiece, index) => {
        return <Card key={index} {...onePiece} />;
      })}
    </div>
  );
};

export default List;
