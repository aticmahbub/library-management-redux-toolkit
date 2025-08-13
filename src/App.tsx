import {Outlet} from 'react-router';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';

function App() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
