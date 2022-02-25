import { Navbar } from "components";

/* Style */
import style from 'styles/layouts/default.module.css';

export default function DefaultLayout({ children, navbar }) {
    return (
        <div className={style.wrapper}>
            {navbar && <Navbar />}
            <main className={style.main}>
                {children}
            </main>
        </div>
    )
}

DefaultLayout.defaultProps = {
    navbar: true
}