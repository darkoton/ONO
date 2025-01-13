import { Popup } from '@ui/Popup'
import style from './style.module.scss'

import ErrorMark from '@icons/ErrorMark'


const PopupTransaction = ({ ...props }) => {

  return <Popup {...props}>
    <div className={style.body}>
      <div className={style.indicator}>
        <ErrorMark className={style.icon} />
      </div>

      <p className={style.text}>
        An error occurred, please check the information you entered and try again
      </p>
    </div>
  </Popup>
}

export default PopupTransaction;