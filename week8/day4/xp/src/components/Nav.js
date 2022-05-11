import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to='/'> Home </Link>
            <Link to='/Profile'> Profile </Link>
            <Link to='/Shop'> Shop </Link>
        </div>
    )
}

export default Nav