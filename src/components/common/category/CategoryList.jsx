import style from './CategoryList.module.scss';
import { GiVacuumCleaner } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { GiLargePaintBrush } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePlumbing } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';
// import routes from '../../router/Router';
import CategoryCard from './CategoryCard';

function CategoryList() {

    // const navigate = useNavigate();

    const categories = [
        { name: "Cleaning", icon: <GiVacuumCleaner />, color: 'purple' },
        { name: "Repair", icon: <GiAutoRepair />, color: 'orange' },
        { name: "Painting", icon: < GiLargePaintBrush />, color: 'lightseagreen' },
        { name: "Shifting", icon: < CiDeliveryTruck />, color: 'crimson' },
        { name: "Plumbing", icon: < MdOutlinePlumbing />, color: 'orange' },
        { name: "Electric", icon: < MdElectricBolt />, color: 'blue' },
    ];

    return (

        <div className={style.categories}>

            {categories.map((category) => (
                <CategoryCard key={category.name} category={category}/>
            ))}

        </div >
    )
}

export default CategoryList;