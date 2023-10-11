import Hero from '../Hero/Hero';
import List from '../List/List';
import SearchForm from '../SearchForm/SearchForm';
import Container from '../Container/Container';

const Home = () => {
    return (
        <Container>
            <Hero />
            <SearchForm />
            <List />
        </Container>
    )
}

export default Home; 