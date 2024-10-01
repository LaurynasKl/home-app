import styles from './Search.module.scss';
import { CiSearch } from "react-icons/ci";

function Search() {

    return (
        <div className={styles.search}>
            <div>
                <p>Find Home <span>Service/Repair</span> Near You</p>
                <p className={styles.text}>Explore Best Home Service & Repair near you</p>
            </div>
            
            <div className={styles.searchBtn}>
                <input type="text" placeholder='Search'/>
                <button><CiSearch /></button>
            </div>
        </div>
    )
}

export default Search;