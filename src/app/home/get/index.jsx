import classNames from 'classnames';
import style from './style.module.scss'
import { Typography } from '@ui/Typography';
import { Field } from '@ui/Field';
import Image from 'next/image';

import cardIcon from './img/card-coin.svg'
import shildIcon from './img/shild.svg'

const Get = () => {

  return <section className={style.get}>
    <div className="container">
      <div className={style.body}>
        <div className={classNames(style.card, style.head)}>
          <div className="headLeft">
            <Typography className={style.subtitle} variant='subtitle' tag='h3'>Get ONO</Typography>
            <Typography variant='h2'>
              Get ONO Easily
            </Typography>
          </div>

          <Typography className={style.headDesc} variant='text-small' tag='p'>
            Buying ONO is easy! Follow just three steps to get the cryptocurrency directly to your wallet. We have made the process as convenient and secure as possible.
          </Typography>
        </div>

        <div className={classNames(style.card, style.card1)}>
          <div className={style.cardTitle}>
            <Image className={style.cardIcon} src={cardIcon} alt="card" width={52} height={52} />

            <Typography variant='h3'>
              Buy ONO
            </Typography>
          </div>

          <div className={style.form}>
            <div className={style.field}>
              <Field required label='ONO amount' id='amount' placeholder='Enter amount in ONO' />
              <Typography className={style.note} variant='text-small' tag='p'>
                *Price per 1 ONO: 1.10 USDT
              </Typography>
            </div>

            <div className={style.field}>
              <Field required label='ONO wallet address' id='amount' placeholder='ONO wallet address' />
            </div>
          </div>
        </div>
        <div className={classNames(style.card, style.card2)}></div>
      </div>
    </div>
  </section>
}

export default Get;