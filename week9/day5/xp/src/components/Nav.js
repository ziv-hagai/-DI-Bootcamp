import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div >
            <nav className="nav-wrapper red darken-3">
                <a className='brand-logo'>MY BLOG</a>
                <ul className='right'>
                    <li><Link className='nav' to='/'> Home</Link></li>
                    <li><Link className='nav' to='/about'> About</Link></li>
                    <li><Link className='nav' to='/contact'> Connect</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav

