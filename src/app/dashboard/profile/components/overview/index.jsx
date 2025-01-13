import classNames from 'classnames'
import globalStyle from '../../../style.module.scss'
import style from './style.module.scss'

import NoteIcon from '@icons/Note'

const Overview = () => {
  return <div className={classNames(globalStyle.section, style.overview)}>
    <div className={style.title}>Game Overview</div>

    <div className={style.infos}>
      <div className={style.info}>
        <div className={style.infoTitle}>
          Coins Earned
          <NoteIcon className={style.infoIcon} />
        </div>

        <div className={style.infoValue}>134.56 ONO</div>
      </div>

      <div className={style.info}>
        <div className={style.infoTitle}>
          Matches Played
          <NoteIcon className={style.infoIcon} />
        </div>

        <div className={style.infoValue}>55</div>
      </div>

      <div className={style.info}>
        <div className={style.infoTitle}>
          Win Rate
          <NoteIcon className={style.infoIcon} />
        </div>

        <div className={style.infoValue}>46%</div>
      </div>
    </div>
  </div>
}

export default Overview