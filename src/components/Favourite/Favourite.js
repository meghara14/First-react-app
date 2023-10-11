import styles from './Favourite.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
    return (
      <div class={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p class={styles.subtitle}>This is the Favorite page.</p>
      </div>
    );
  };
  
  export default Favorite;