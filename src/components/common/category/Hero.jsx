import Search from '../Search';
import styles from '../Search.module.scss';

function Hero() {

    return (
        <div className={styles.search}>
            <div>
                <p>Find Home <span>Service/Repair</span> Near You</p>
                <p className={styles.text}>Explore Best Home Service & Repair near you</p>
            </div>
            <Search />
        </div>
    )
}

export default Hero;