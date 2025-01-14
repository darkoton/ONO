import { Popup } from '@ui/Popup'
import { Typography } from '@ui/Typography'
import { Button } from '@ui/Button'
import style from './style.module.scss'
import Copy from '@icons/Copy'
import classNames from 'classnames'

const PopupTransaction = ({ ...props }) => {
  return <Popup {...props}>
    <div className={style.popupInfo}>
      <Typography variant='h5' tag='p'>Transaction confirmation</Typography>
      <p className={style.popupDesc}>Transfer funds to the provided address to receive your ONO coins. Your coins will be credited automatically upon receipt.</p>
    </div>
    <div className={style.row}>
      <div className={style.col}>
        <Typography className={style.popupTitle} variant='text-small' tag='p'>Payment address:</Typography>
        <Typography className={classNames(style.popupValue, style.popupCode)} variant='btn' tag='p'>0xBeD95ce08D3daCC3889edd0d3D1165c9F...</Typography>
      </div>

      <div className={style.col}>
        <Button variant='secondary' className={style.copy} icon={<Copy />}></Button>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.col}>
        <Typography className={style.popupTitle} variant='text-small' tag='p'>Amount to be paid:</Typography>
        <div className={style.amount}>
          <Typography className={style.popupValue} variant='btn' tag='p'>1000 ONO</Typography>
          <Typography className={style.popupValue} variant='btn' tag='p'>1 100,10 USDT</Typography>
        </div>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.col}>
        <Typography className={style.popupTitle} variant='text-small' tag='p'>Timer:</Typography>
        <Typography className={style.popupValue} variant='btn' tag='p'>00:04:58</Typography>
      </div>
    </div>
  </Popup>
}

export default PopupTransaction;