import { container } from "./App.module.css";
import Card from "./components/Card/Card";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const users = [
    {
      id: uuidv4(),
      background:
        "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631531018/Assets/bg-pattern-card_cxmra5.svg",
      avatar:
        "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631531018/Assets/image-victor_obb0ar.jpg",
      name: "Victor Crest",
      age: 26,
      city: "London",
      stats: {
        followers: "80k",
        likes: "803k",
        photos: "1.4k",
      },
    },
  ];

  const [cards, setCards] = useState(users);
  if (setCards);

  return (
    <div className={container}>
      {users.length === 0 ? (
        <div>Nothing found</div>
      ) : (
        cards.map((card) => <Card key={card.id} data={card} />)
      )}
    </div>
  );
}

export default App;
