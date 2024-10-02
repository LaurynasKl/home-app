import style from "./CategoryList.module.scss";

const CategoryCard = ({ category }) => {
  const { name, icon, color } = category;
  return (
    <button
      key={name}
      className={style.btn}
    // onClick={() => navigate(routes.searchCategory.replace(':category', category.name))}
    >
      <div className={style.icon} style={{ color: color }} > {icon}  </div>
      <div className={style.name}> {name}</div>
    </button>
  );
};
export default CategoryCard;


