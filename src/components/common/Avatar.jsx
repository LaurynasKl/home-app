import { useContext } from 'react';
import style from './Avatar.module.scss';
import { UserContext } from '../../contexts/UserContext';

const Avatar = ({ children }) => {
    const {logout} = useContext(UserContext);
    return (
        <div onClick={logout} className={style.avatar}>{children}</div>
    )
}
export default Avatar;