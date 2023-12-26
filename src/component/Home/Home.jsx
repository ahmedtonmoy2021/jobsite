import Category from '../Category/Category';
import Nav from '../Nav/Nav';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Nav/>
            <Category/>
        </div>
    );
};

export default Home;