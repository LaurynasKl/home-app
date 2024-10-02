import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { Categories } from "./CategoryList";
import style from './VerticalCategoryList.module.scss';
import { CategoriesCards } from "./BusinessCards";
import { FaHeart } from "react-icons/fa";
import categoryCardStyle from "./VerticalCategoryList.module.scss";

const VerticalCategoryList = () => {

    const { category } = useParams();
    const filteredCards = CategoriesCards.filter(categoryItem => categoryItem.category === category);


    return (
        <div className={style.selectedCategory}>
            <aside className={style.left}>
            {Categories.map((category) => (
                    <CategoryCard key={category.name} category={category} />
                ))}
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
export default VerticalCategoryList; 