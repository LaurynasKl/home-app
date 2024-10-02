import { useState } from 'react';
import styles from './Search.module.scss';
import { CiSearch } from "react-icons/ci";

function Search() {
    const [text, setText] = useState('');

    const handleText = (event) => {
        setText(event.target.value)
    }

    return (
            <div className={styles.searchBtn}>
                <input value={text} onChange={handleText} type="text" placeholder='Search'/>
                <button onClick={handleText}><CiSearch /></button>
            </div>
    )
}

export default Search;