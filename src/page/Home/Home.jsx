import {Link} from 'react-router-dom';
import './home.css'

export default function Home(){
    return(
        <nav className='navigation-menu'>
            <Link to="/add" className='link'>
                Go to Add page
            </Link>
            <Link to="/list" className='link'>
                Go to List page
            </Link>
            <Link to="/state" className='link'>
                Go to State page
            </Link>
        </nav>
    )
} 