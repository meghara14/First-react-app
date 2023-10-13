import styles from './Favourite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Favorite = () => {

  const favoriteCards = useSelector(state => state.cards.filter(card => card.isFavorite));
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.subtitle}>This is the Favorite page.</p>
      <div className={styles.cards}>
        {favoriteCards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;