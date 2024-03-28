import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;