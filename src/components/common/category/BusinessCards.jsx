import style from './BusinessCards.module.scss';
import repair from '../../../assets/repair.png';
import cleaning1 from '../../../assets/cleaning1.png'
import { Routes, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

export const CategoriesCards = [
    {
        category: "Cleaning",
        company: "House Cleaning",
        name: "Vardenis Pavardenis",
        place: "Klaipeda",
        img: cleaning1
    },
    {
        category: "Cleaning",
        company: "House Cleaning",
        name: "Vardenis Pavardenis",
        place: "Klaipeda",
        img: cleaning1
    },
    {
        category: "Cleaning",
        company: "House Cleaning",
        name: "Vardenis Pavardenis",
        place: "Klaipeda",
        img: cleaning1
    },
    {
        category: "Repair",
        company: "Car tyres repair",
        name: "Vardenis Pavardenis",
        place: "Klaipeda",
        img: repair
    },

]

export function BusinessCards() {

    const navigate =  useNavigate();


    return (
        <div className={style.businessCards}>
            {CategoriesCards.map((card, index) => (
                <div key={index} className={style.card}>
                    <img src={card.img} alt={card.category} />
                    <button className={style.likeBtn}><FaHeart /></button>
                    <div className={style.info}>
                        <h3 className={style.category}>{card.category}</h3>
                        <h3 className={style.company}>{card.company}</h3>
                        <h4 className={style.name}>{card.name}</h4>
                        <h4 className={style.place}>{card.place}</h4>
                    <button className={style.btn} onClick={() => navigate(Routes.searchCategory)}>Book Now</button>
                    </div>
                </div>
            ))}
        </div>
    )

}