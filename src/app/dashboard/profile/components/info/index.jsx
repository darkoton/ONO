import classNames from 'classnames'
import globalStyle from '../../../style.module.scss'
import style from './style.module.scss'
import Image from 'next/image'
import { Button } from '@ui/Button'

import Steam from '@icons/Steam'
import Google from '@icons/GoogleColor'

const Info = () => {

  return <div className={classNames(globalStyle.section, style.info)}>
    <div className={style.title}>User Info</div>
    <div className={style.user}>
      <Image className={style.avatar} src='/img/avatar.png' width={48} height={48} alt='avatar' />

      <div className={style.userInfo}>
        <div className={style.userName}>@alex123</div>
        <div className={style.userDate}>joined 13.12.24</div>
      </div>
    </div>

    <div className={style.buttons}>
      <Button className={style.button} icon={<Steam />}>Connected</Button>
      <Button className={style.button} variant='secondary' icon={<Google />}>Not connected</Button>
    </div>
  </div>
}

export default Info