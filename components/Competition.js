/* Style */
import style from 'styles/components/competition.module.css';

export function Competition({ className }) {
    const pclassName = Array.isArray(className) ? className.join(' ') : className;

    return (
        <div className={[style.competition, pclassName].join(' ')}>
            <div className={style.info_box}>
                <h2>La Chimica Raccontata dai Francobolli</h2>
                <p>Aliquip magna tempor non cillum est laborum incididunt est mollit adipisicing sunt amet minim aliqua. Magna eu elit ipsum veniam proident. Consectetur irure consequat cupidatat cillum commodo exercitation sit exercitation aute. Voluptate elit nostrud amet tempor labore mollit esse commodo ex duis officia dolor.</p>
            </div>
            <div className={style.start_btn}>
                <span className={style.start_text}>Inizia</span>
            </div>
        </div>
    )
};