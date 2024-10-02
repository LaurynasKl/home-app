import style from './CategoryList.module.scss';
import { GiVacuumCleaner } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { GiLargePaintBrush } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePlumbing } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import routes from '../../router/Router';


export const Categories = [
    { name: "Cleaning", icon: <GiVacuumCleaner />, color: 'purple' },
    { name: "Repair", icon: <GiAutoRepair />, color: 'orange' },
    { name: "Painting", icon: < GiLargePaintBrush />, color: 'lightseagreen' },
    { name: "Shifting", icon: < CiDeliveryTruck />, color: 'crimson' },
    { name: "Plumbing", icon: < MdOutlinePlumbing />, color: 'orange' },
    { name: "Electric", icon: < MdElectricBolt />, color: 'blue' },
];


function CategoryList() {

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate(routes.searchCategory)
    }


    return (
        <div className={style.categories}>
            {Categories.map((category) => (
                <CategoryCard onclick={handleNavigate} key={category.name} category={category}/>
            ))}
        </div >
        
    )
    
}

export default CategoryList;