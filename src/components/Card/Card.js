import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({ title, isFavorite, id }) => {

    const dispatch = useDispatch();


    const classChange = () => {
        dispatch(toggleCardFavorite(id));
      };

   
    return (
        <li className={styles.card}>{title}
            <div>
            <button type="button" onClick={ classChange } className={clsx(styles.button_star, isFavorite && styles.active) }>
                <span className='fa fa-star-o'></span>
            </button>
            </div>
        </li>
    )}

export default Card;