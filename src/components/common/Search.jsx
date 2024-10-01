import styles from './Search.module.scss';
import { CiSearch } from "react-icons/ci";

function Search() {

    return (
            <div className={styles.searchBtn}>
                <input type="text" placeholder='Search'/>
                <button><CiSearch /></button>
            </div>
    )
}

export default Search;