import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div >
            <span>WHAT'StheWEATHER</span>
            <Link className='nav' to='/'> Home</Link>
            <Link className='nav' to='/favs'> Favorites</Link>
        </div>

    );
}

export default Nav;
