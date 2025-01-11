import style from './style.module.scss'
import { Typography } from '@ui/Typography';
import { Button } from '@ui/Button';
import ArrowRoute from '@icons/ArrowRoute';
import Image from 'next/image';
import img1 from './img/img-1.jpg'
import img2 from './img/img-2.jpg'
import img3 from './img/img-3.jpg'

const Games = () => {
  return <section className={style.games}>
    <div className='container'>
      <div className={style.body}>
        <div className={style.head}>
          <Typography
            className={style.subtitle}
            variant='subtitle'
            tag='h3'>Games</Typography>
          <Typography className={style.title} variant='h2'>
            Games to Earn
          </Typography>
          <Typography className={style.desc} variant='text-small' tag='p'>
            Play Your Favorite Games and Earn ONO Effortlessly
          </Typography>
        </div>

        <div className={style.grid}>
          <div className={style.card}>
            <Image className={style.img} src={img1} alt='img1' width={1040} height={604} />

            <div className={style.cardInfo}>
              <Typography className={style.cardTitle} variant='h5'>Dota </Typography>
              <Button variant='text-1' icon={<ArrowRoute />} animation='rotate-icon'>go play</Button>
            </div>
          </div>

          <div className={style.card}>
            <Image className={style.img} src={img2} alt='img2' width={1040} height={604} />

            <div className={style.cardInfo}>
              <p className={style.cardDate}>14 Jun 2025 </p>
              <Typography variant='h5' tag='p'>Comming Soon</Typography>
            </div>
          </div>

          <div className={style.card}>
            <Image className={style.img} src={img3} alt='img3' width={1040} height={604} />

            <div className={style.cardInfo}>
              <p className={style.cardDate}>14 Jun 2025 </p>
              <Typography variant='h5' tag='p'>Comming Soon</Typography>
            </div>
          </div>
        </div>

        <Button className={style.button} variant='secondary'>view more</Button>
      </div>
    </div>
  </section>
}

export default Games