import classNames from 'classnames'
import style from './style.module.scss'

import CloseIcon from '@icons/X'
import Warning from '@icons/Warning'
import InComming from '@icons/InComing'
import LogOut from '@icons/LogOut'

const defaultProps = {
  open: false,
  onClose: () => { },
  list: []
}

const typesMessage = {
  error: {
    textColor: '#F44336',
    bgColor: '#e6313133',
    Icon: Warning
  },
  success: {
    textColor: '#32E53B',
    bgColor: '#32e53b19',
    Icon: InComming
  },
  warning: {
    textColor: '#FF9100',
    bgColor: '#ff910019',
    Icon: LogOut
  }
}

const Notifications = ({
  open = defaultProps.open,
  onClose = defaultProps.onClose,
  list = defaultProps.list,
  ...props }) => {
  return (
    <div className={classNames(style.notfDropdown, {
      [style.active]: open
    })} {...props}>

      <button onClick={onClose} className={style.close}><CloseIcon /></button>

      <div className={style.title}>
        Notification
      </div>

      <ul className={style.list}>
        {
          list.map((li, i) => {
            const Icon = typesMessage[li.type].Icon

            return <li key={li.title} className={classNames(style.notf, {
              [style.new]: i === 0
            })}>
              <div className={style.notfIcon} style={{
                backgroundColor: typesMessage[li.type].bgColor,
                color: typesMessage[li.type].textColor
              }}>
                <Icon />
              </div>

              <div className={style.notfInfo}>
                {li.title && <div className={style.notfTitle}>{li.title}</div>}
                {li.text && <div className={style.notfText}>{li.text}</div>}
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Notifications