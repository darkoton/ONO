import classNames from 'classnames';
import style from './style.module.scss'
import { Typography } from '@ui/Typography'
import Image from 'next/image';

import headIcon from './img/icon-head.svg'
import icon1 from './img/icon-1.svg'
import icon2 from './img/icon-2.svg'
import icon3 from './img/icon-3.svg'
import icon4 from './img/icon-4.svg'


const Features = () => {
  return <section className={style.features}>
    <div className="container">
      <div className={style.body}>
        <div className={classNames(style.card, style.cardTop)}>
          <div>
            <Typography className={style.subtitle} variant='subtitle' tag='h3'>Features</Typography>
            <Typography variant='h2'>
              ONO Coin Fast, Fair, and Finite
            </Typography>
          </div>

          <Image className={style.icon} src={headIcon} alt='Icon' width='56' height='56' />
        </div>

        <div className={classNames(style.card, style.card1)}>
          <div className={style.cardHead}>
            <Image className={style.icon} src={icon1} alt='Icon' width='56' height='56' />

            <Typography className={style.count} variant='text-big' tag='p'>/ 01</Typography>
          </div>

          <div className={style.cardInfo}>
            <Typography className={style.cardTitle} variant='h5'>
              Lightning-Fast Transactions
            </Typography>

            <Typography className={style.cardDesc} variant='text-small' tag='p'>
              ONO is designed for speed, with a maximum transaction rate that can be up to 7,200 times faster than Bitcoin, making it ideal for modern, high-volume use cases.
            </Typography>
          </div>

        </div>

        <div className={classNames(style.card, style.card2)}>
          <div className={style.cardHead}>
            <Image className={style.icon} src={icon2} alt='Icon' width='56' height='56' />

            <Typography className={style.count} variant='text-big' tag='p'>/ 02</Typography>
          </div>

          <div className={style.cardInfo}>
            <Typography className={style.cardTitle} variant='h5'>
              Built for Developers
            </Typography>

            <Typography className={style.cardDesc} variant='text-small' tag='p'>
              ONO is completely written in JavaScript, ensuring simplicity, flexibility, and ease of integration for developers worldwide.
            </Typography>
          </div>

        </div>

        <div className={classNames(style.card, style.card3)}>
          <div className={style.cardHead}>
            <Image className={style.icon} src={icon3} alt='Icon' width='56' height='56' />

            <Typography className={style.count} variant='text-big' tag='p'>/ 03</Typography>
          </div>

          <div className={style.cardInfo}>
            <Typography className={style.cardTitle} variant='h5'>
              Fair and Limited Supply
            </Typography>

            <Typography className={style.cardDesc} variant='text-small' tag='p'>
              With a fixed supply of 100,000,000 ONO coins, 80,000,000 are earned through gaming, 10,000,000 support development, and 10,000,000 reward the team
            </Typography>
          </div>

        </div>

        <div className={classNames(style.card, style.card4)}>
          <div className={style.cardHead}>
            <Image className={style.icon} src={icon4} alt='Icon' width='56' height='56' />

            <Typography className={style.count} variant='text-big' tag='p'>/ 04</Typography>
          </div>

          <div className={style.cardInfo}>
            <Typography className={style.cardTitle} variant='h5'>
              Fast Block Speed
            </Typography>

            <Typography className={style.cardDesc} variant='text-small' tag='p'>
              ONO operates with an average block speed of just 10 seconds, ensuring quick and seamless transactions.
            </Typography>
          </div>

        </div>

      </div>
    </div>
  </section>
}

export default Features; 