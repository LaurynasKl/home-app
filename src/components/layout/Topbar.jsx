import style from './TopBar.module.scss';
import logo from '../../assets/logo.png';
// import { routes } from '../../router/routes';
// import { Link, useNavigate } from 'react-router-dom';

function TopBar() {

    // const navigate = useNavigate();

    const links = [
        {
            path: '#',
            label: "Home",
        },
        {
            path: '#',
            label: "Services",
        },
        {
            path: '#',
            label: "About Us",
        },
    ];

    return (
        <header className={style.topBar}>
            <div className={style.leftSide}>
                <img src={logo} alt="logo" />
                <h1>Logoipsum</h1>
                <nav>
                    {links.map((link) => (
                        // <Link key={link.label} to={link.path} className={style.link}>{link.label}</Link>
                        <a key={link.label} to={link.path} className={style.link}>{link.label}</a>
                    ))}
                </nav>
            </div>
            
            <div className={style.rightSide}>
                <button>Login / Sign Up</button>
                {/* <button onClick={() => navigate(routes.login)}> Login / Sign Up </button> */}
            </div>
        </header>

    )
}

export default TopBar;