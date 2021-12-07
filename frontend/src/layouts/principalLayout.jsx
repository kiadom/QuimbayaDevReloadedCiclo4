import { LoginPrincipal } from '../components/LoginPrincipal';
import '../styles/login.css';

function PrincipalLayout ({ children }) {
    return (
        <div className='luis'>
            <LoginPrincipal/>
            <main>{ children }</main>
        </div>
    )
}

export  { PrincipalLayout } ;