/* Components */
import { Logo } from './Images/Logo';

/* Style */
import style from 'styles/components/navbar.module.css';

export function Navbar() {
    return (
        <nav className={style.navbar}>
            <div className={style.logo_wrapper}>
                <Logo className={style.logo} />
                <h1 className={style.logo_text}>Reteissa</h1>
            </div>
        </nav>
    )
}