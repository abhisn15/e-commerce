import { Link } from 'react-router-dom';
import './Data';
import './Home.css';

const Home = () => {
    return (
        <div className='md:container'>
            <div className='content'>
                <div className='one'>
                    <div className='relative flex flex-col items-center top-60 w-1/3'>
                        <h1 className='intro font-bold text-slate-950  text-2xl'>This Is Cloufee T</h1>
                        <p className='mx-8 mt-2 text-center text-md'>Our House ambassadors make Cloufee T their own in our latest campaign.</p>
                        <div className='shop mt-6 mr-12 '>
                        <Link to='/' className='bg-white px-10 pt-3 pb-4 border border-slate-900'>Shop the Collection</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content2'>
                <div>
                    <img>
                    </img>
                    <h3></h3>
                    <h3></h3>
                </div>
            </div>
        </div>
    );
};

export default Home;
