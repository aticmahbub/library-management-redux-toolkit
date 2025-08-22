import {Outlet} from 'react-router';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
function App() {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar />
            <main className='flex flex-1 items-center justify-center'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
