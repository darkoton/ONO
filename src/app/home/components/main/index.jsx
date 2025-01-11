import style from './style.module.scss'
import Image from 'next/image'
import icon from './img/icon.svg'
import { Typography } from '@ui/Typography'
import { Button } from '@ui/Button'

const Main = () => {
  return <section className={style.main}>
    <div className='container'>
      <div className={style.body}>

        <Image className={style.icon} src={icon} width='44' height='44' alt="icon" />

        <Typography variant="h1" className={style.title}>
          ONO – Redefining the Future of DeFi:
          <span className={style.textGradient}> Earn, Play, Forge, and Repeat</span>
        </Typography>
        <Typography tag='p' variant="text-medium" className={style.desc}>
          Welcome to ONO, the cryptocurrency that redefines earning in the DeFi space. Built on the innovative Proof of Burn protocol, ONO ensures transparency, simplicity, and endless possibilities.
        </Typography>

        <Button variant="primary" className={style.button}>Buy ONO Now</Button>

      </div>
    </div>
  </section>;
}

export default Main
