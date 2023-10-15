import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsReducer';
import { removeCard } from '../../redux/cardsReducer';

const Card = ({ title, isFavorite, id }) => {
    const dispatch = useDispatch();

    const classChange = () => {
        dispatch(toggleCardFavorite(id));
    };

    const handleRemoveCard = () => {
        dispatch(removeCard(id));
    }

    return (
        <li className={styles.card}>{title}
            <div>
                <button
                    type="button"
                    onClick={classChange}
                    className={clsx(styles.button_star, isFavorite && styles.isFavorite)}
                >
                    <span className='fa fa-star-o'></span>
                </button>
                <button 
                    type="button"
                    onClick={handleRemoveCard}
                    className={clsx(styles.button_trash)}>
                    <span className='fa fa-trash'></span>
                </button>
            </div>
        </li>
    );
}

export default Card;
