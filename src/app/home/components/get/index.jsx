'use client'
import classNames from 'classnames';
import style from './style.module.scss'
import { Typography } from '@ui/Typography';
import { Button } from '@ui/Button';
import { Field } from '@ui/Field';
import Image from 'next/image';
import Popup from '../popup-transaction';
import { useState } from 'react';

import cardIcon from './img/card-coin.svg'
import shildIcon from './img/shild.svg'

const Get = () => {

  const [popupOpen, setPopupOpen] = useState(false)

  function openPopup() {
    setPopupOpen(true)
  }

  function closePopup() {
    setPopupOpen(false)
  }

  return <section className={style.get}>
    <div className="container">
      <div className={style.body}>
        <div className={classNames(style.card, style.head)}>
          <div className={style.headLeft}>
            <Typography
              className={style.subtitle}
              variant='subtitle'
              tag='h3'>Get ONO</Typography>
            <Typography variant='h2'>
              Get ONO Easily
            </Typography>
          </div>

          <Typography className={style.headDesc}
            variant='text-medium'
            tag='p'>
            Buying ONO is easy! Follow just three steps to get the cryptocurrency directly to your wallet. We have made the process as convenient and secure as possible.
          </Typography>
        </div>

        <div className={classNames(style.card, style.card1)}>
          <div className={style.cardTitle}>
            <Image className={style.icon} src={cardIcon} alt="card" width={52} height={52} />

            <Typography weight={400} variant='h3'>
              Buy ONO
            </Typography>
          </div>

          <div className={style.form}>
            <div className={style.field}>
              <Field required label='ONO amount' id='amount' placeholder='Enter amount in ONO' note='*Price per 1 ONO: 1.10 USDT' />
            </div>

            <div className={style.field}>
              <Field required label='ONO wallet address' id='amount' placeholder='ONO wallet address' />
            </div>
          </div>

          <Button variant='primary' className={style.button} onClick={openPopup}>
            <span className={style.buttonPc}>Generate Address</span>

            <span className={style.buttonMb}>Buy</span>
          </Button>
        </div>

        <div className={classNames(style.card, style.card2)}>
          <div className={style.cardTitle}>
            <Image className={style.icon} src={shildIcon} alt="card" width={52} height={52} />

            <Typography weight={400} variant='h3'>
              Safety instructions:
            </Typography>
          </div>

          <ul className={style.list}>
            <li className={style.item}>
              <p className={style.step}>
                / 01
              </p>

              <Typography variant='text-medium' tag='p' className={style.text}>
                Always check the correctness of the addresses before transferring.
              </Typography>
            </li>

            <li className={style.item}>
              <p className={style.step}>
                / 02
              </p>

              <Typography variant='text-medium' tag='p' className={style.text}>
                Use only the official ONO Wallet to store cryptocurrency.
              </Typography>
            </li>

            <li className={style.item}>
              <p className={style.step}>
                / 03
              </p>

              <Typography variant='text-medium' tag='p' className={style.text}>
                Do not store large amounts on third-party wallets or exchanges.
              </Typography>
            </li>

            <li className={style.item}>
              <p className={style.step}>
                / 04
              </p>

              <Typography variant='text-medium' tag='p' className={style.text}>
                Avoid publishing your wallet address in public places.
              </Typography>
            </li>

            <li className={style.item}>
              <p className={style.step}>
                / 05
              </p>

              <Typography variant='text-medium' tag='p' className={style.text}>
                Enable Two-Factor Authentication (2FA): Always activate 2FA for your wallet and exchange accounts to enhance security.
              </Typography>
            </li>

            <li className={style.item}>
              <p className={style.step}>
                / 06
              </p>

              <Typography variant='text-medium' tag='p' className={style.text}>
                Enable Two-Factor Authentication (2FA): Always activate 2FA for your wallet and exchange accounts to enhance security.
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Popup isOpen={popupOpen} close={closePopup} />
  </section>
}

export default Get;