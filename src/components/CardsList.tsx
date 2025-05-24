import { useState } from "react"
import Card from "./Card"

export default function CardsList(){
    const [cards, setCards] = useState([
        {
            title:"Un joli titre",
            color1:"sky",
            color2: "fuchsia",
            image:"../../public/vite.svg",
            content: "Du contenu"
        },
        {
            title:"Un joli titre",
            color1:"sky",
            color2: "fuchsia",
            image:"../../public/vite.svg",
            content: "Du contenu"
        },
    ])
    return(
        <div className="flex flex-col gap-7 items-center">
            {
                cards.map((card, index) => (
                    <Card
                    orientation={index % 2 === 0 ? 'right' : 'left'}
                    title={card.title}
                    color1={card.color1}
                    color2={card.color2}
                    image={card.image}
                >
                    {card.content}
                </Card>))
            }
        </div>
    )
}