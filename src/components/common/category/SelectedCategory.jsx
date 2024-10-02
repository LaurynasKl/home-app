import { useParams } from "react-router-dom";
import Category2 from "./Category2";
import { CategoriesCards } from "./CategoryCard";
import style from "./SelectedCategory.module.scss";
import categoryCardStyle from "./CategoryCard.module.scss";
import { FaHeart } from "react-icons/fa";

export function SelectedCategory() {
    const { category } = useParams();

    const filteredCards = CategoriesCards.filter(categoryItem => categoryItem.category === category);


    
    return (
        <div className={style.selectedCategory}>
            <aside className={style.left}>
                <Category2 />
            </aside>
            <div className={style.right}>
                <div className={categoryCardStyle.categoryCard}>
                    {filteredCards.map((categoryItem, index) => (
                        <div key={index} className={categoryCardStyle.card}>
                            <img src={categoryItem.img} alt={categoryItem.category} />

                            <button className={categoryCardStyle.likeBtn}><FaHeart /></button>

                            <div className={style.info}>
                                <h3 className={categoryCardStyle.category}>{categoryItem.category}</h3>
                                <h3 className={categoryCardStyle.company}>{categoryItem.company}</h3>
                                <h4 className={categoryCardStyle.name}>{categoryItem.name}</h4>
                                <h4 className={categoryCardStyle.place}>{categoryItem.place}</h4>
                                <button className={categoryCardStyle.btn} onClick={() => console.log("Book Now clicked")}>Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >

    )
}