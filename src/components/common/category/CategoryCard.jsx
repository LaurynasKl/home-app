import { generatePath, useNavigate } from "react-router-dom";
import routes from "../../router/Router";
import style from "./CategoryList.module.scss";

const CategoryCard = ({ category }) => {
  const { name, icon, color } = category;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(generatePath(routes.searchCategory, { category: name }))
  }

  return (
    <button
      key={name}
      className={style.btn}
      onClick={handleNavigate}
    >
      <div className={style.icon} style={{ color: color }} > {icon} </div>
      <div className={style.name}>{name}</div>
    </button>
  );
};
export default CategoryCard;


