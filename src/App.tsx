import {Outlet} from 'react-router';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
function App() {
    return (
        <div className=''>
            <NavBar />
            <main className=''>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
