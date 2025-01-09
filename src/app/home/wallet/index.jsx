import style from './style.module.scss'
import { Typography } from '@ui/Typography';
import { Button } from '@ui/Button';
import ArrowRoute from '@icons/ArrowRoute';

const Wallet = () => {
  return <section className={style.wallet}>
    <div className='container'>
      <div className={style.body}>

        <div className={style.card}>
          <div className={style.info}>
            <Typography variant='h2'>
              Secure Your Assets with the ONO Wallet
            </Typography>

            <Typography
              className={style.desc}
              variant='text-medium'
              tag='p'>
              Protect your assets with the official ONO wallet. It provides secure storage, fast transactions, and full control over your coins.
            </Typography>
          </div>

          <Button className={style.button} variant='primary' icon={<ArrowRoute />} animation='rotate-icon'>
            GET WALLET
          </Button>
        </div>
      </div>
    </div>
  </section>
}

export default Wallet