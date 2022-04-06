import './style.css'
import Header from './components/Header';

const Home = () => {
    return ( 
        <div>
            <Header />

            <main className="main">
                <div className='navbar'>navbar</div>
                <div className='feed'>feed</div>
            </main>
        </div>
     );
}
 
export default Home;