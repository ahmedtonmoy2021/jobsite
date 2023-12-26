import Nav from '../Nav/Nav';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Nav/>
            {data.length}
        </div>
    );
};

export default Home;