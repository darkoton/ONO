import style from '../style.module.scss'
import { Typography } from '@ui/Typography'
import { Button } from '@ui/Button'
import Google from '@icons/GoogleColor'
import Steam from '@icons/Steam'
import classNames from 'classnames'
import Image from 'next/image'
import man from '../(img)/man.png'

export default function Auth1() {
  return <div className={style.auth}>
    <Image priority src={man} className={style.img} alt='man' />
    <div className={style.container}>
      <Image className={style.logo} src='/img/logo.svg' width={110} height={42} />
      <div className={style.info}>
        <Typography className={style.title} variant='h2' tag='h1'>
          Log In to Start Earning with ONO and Dota 2
        </Typography>
        <Typography className={style.desc} variant='text-small' tag='p'>
          Log in with Google or Steam to track your Dota 2 performance, earn ONO coins, and manage your wallet. If you sign in with Google, link your Steam account in settings to start earning.
        </Typography>

        <div className={style.buttons}>
          <Button className={classNames(style.button, style.google)} icon={<Google />}>Continue with </Button>
          <Button className={classNames(style.button, style.steam)} icon={<Steam />}>Continue with </Button>
        </div>
      </div>
    </div>
  </div>
}