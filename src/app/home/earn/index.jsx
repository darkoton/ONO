import classNames from 'classnames';
import style from './style.module.scss'
import { Typography } from '@ui/Typography'
import { Button } from '@ui/Button'
import Image from 'next/image';
import ArrowRoute from '@/components/icons/ArrowRoute';

import img1 from './img/img-1.png'
import img2 from './img/img-2.png'
import img3 from './img/img-3.png'

const Earn = () => {
  return <section className={style.earn}>
    <div className='container'>
      <div className={style.body}>
        <div className={style.head}>
          <Typography className={style.subtitle} variant='subtitle' tag='h3'>How to Earn</Typography>
          <Typography className={style.title} variant='h2'>
            How to Earn ONO
          </Typography>
        </div>

        <div className={style.block}>
          <div className={style.info}>
            <Typography className={style.blockTitle} variant='h3'>
              Buy ONO Easily
            </Typography>

            <Typography className={style.blockText} variant='text-small' tag='p'>
              ONO offers an easy and fast way to become part of the DeFi revolution. Buy the coin through our trusted platforms using methods that are convenient for you. Purchasing ONO is the first step to participating in an ecosystem that provides fast transactions, sustainability, and unique earning opportunities.
            </Typography>

            <Button className={style.button} variant='primary' animation='rotate-icon' icon={<ArrowRoute />}>go Buy</Button>
          </div>

          <div className={style.blockImage}>
            <Image className={style.blockImg} width={790} height={420} src={img1} alt='img1' />
          </div>
        </div>

        <div className={classNames(style.block, style.reverse)}>
          <div className={style.blockImage}>
            <Image className={style.blockImg} width={790} height={420} src={img2} alt='img2' />
          </div>

          <div className={style.info}>
            <Typography className={style.blockTitle} variant='h3'>
              Play Games, Earn ONO
            </Typography>

            <Typography className={style.blockText} variant='text-small' tag='p'>
              Join ONO gaming projects where entertainment turns into real income. Unique gaming mechanics allow you to earn coins by completing tasks, winning competitions, or reaching new levels. This is a great opportunity to combine the passion for the game with financial gain.
            </Typography>

            <Button className={style.button} variant='primary' animation='rotate-icon' icon={<ArrowRoute />}>Go play</Button>
          </div>
        </div>

        <div className={style.block}>
          <div className={style.info}>
            <Typography className={style.blockTitle} variant='h3'>
              Forge Your Way to Rewards
            </Typography>

            <Typography className={style.blockText} variant='text-small' tag='p'>
              Earn ONO through Forging, an innovative process based on the Proof of Burn protocol. By burning some of your coins, you get access to create new blocks on the blockchain. This method ensures a fair distribution of rewards, minimizes energy consumption, and supports the ecological sustainability of the network. Forging is not only a way to earn money, but also your contribution to the stability and development of the ONO ecosystem.
            </Typography>

            <Button className={style.button} variant='primary' animation='rotate-icon' icon={<ArrowRoute />}>GET WALLET</Button>
          </div>

          <div className={style.blockImage}>
            <Image className={style.blockImg} width={790} height={420} src={img3} alt='img3' />
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Earn