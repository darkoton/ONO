import style from './style.module.scss'
import { Typography } from '@ui/Typography';
import { Button } from '@ui/Button';
import Download from '@icons/Download';
import Image from 'next/image';
import icon1 from './img/icon-1.svg'
import icon2 from './img/icon-2.svg'
import icon3 from './img/icon-3.svg'

const Games = () => {
  return <section className={style.games}>
    <div className='container'>
      <div className={style.body}>
        <div className={style.head}>
          <Typography
            className={style.subtitle}
            variant='subtitle'
            tag='h3'>Tools</Typography>
          <Typography className={style.title} variant='h2'>
            Get Started with ONO Wallet and Tools
          </Typography>
          <Typography className={style.desc} variant='text-small' tag='p'>
            Manage your ONO coins securely and efficiently. Download the wallet or core for advanced features, or access your funds instantly through the web wallet. Choose the option that suits you best!
          </Typography>
        </div>

        <div className={style.grid}>
          <div className={style.card}>

            <div className={style.cardHead}>
              <div className={style.cardIcon}>
                <Image className={style.icon} src={icon1} width={56} height={56} alt='icon' />
              </div>

              <Typography variant='h5'>Download ONO Wallet </Typography>
            </div>

            <Typography className={style.cardDesc} variant='p' tag='text-small'>Securely store, send, and receive ONO coins with our official wallet. Available for desktop and mobile platforms </Typography>
            <Button className={style.cardButton} variant='primary' icon={<Download />}>Download Wallet</Button>
          </div>

          <div className={style.card}>

            <div className={style.cardHead}>
              <div className={style.cardIcon}>
                <Image className={style.icon} src={icon2} width={56} height={56} alt='icon' />
              </div>

              <Typography variant='h5'>Download ONO Core </Typography>
            </div>

            <Typography className={style.cardDesc} variant='p' tag='text-small'>Start forging and earning rewards by downloading the ONO Core. Perfect for advanced users and developers</Typography>
            <Button className={style.cardButton} variant='primary' icon={<Download />}>Download Wallet</Button>
          </div>

          <div className={style.card}>

            <div className={style.cardHead}>
              <div className={style.cardIcon}>
                <Image className={style.icon} src={icon3} width={56} height={56} alt='icon' />
              </div>

              <Typography variant='h5'>Access Web Wallet </Typography>
            </div>

            <Typography className={style.cardDesc} variant='p' tag='text-small'>Manage your ONO coins directly from your browser. No downloads required – fast, simple, and secure. </Typography>
            <Button className={style.cardButton} variant='primary' icon={<Download />}>Download Wallet</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Games