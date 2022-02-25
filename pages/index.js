/* Components */
import { Competition } from 'components';

/* Style */
import style from 'styles/pages/index.module.css';

export default function Home() {
  return (
    <>
      <Competition className={style.competition} />
    </>
  )
};