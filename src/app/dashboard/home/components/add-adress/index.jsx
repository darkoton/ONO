import { Popup } from '@ui/Popup'
import { Field } from '@ui/Field'
import { Button } from '@ui/Button'
import style from './style.module.scss'

const PopupTransaction = ({ ...props }) => {

  const { close } = props

  return <Popup {...props}>

    <div className={style.body}>
      <h3 className={style.title} variant='h5' tag='p'>Add address</h3>

      <Field className={style.field} label='Enter wallet address' />
      <div className={style.buttons}>
        <Button className={style.button} variant='primary'>Save</Button>
        <Button className={style.button} variant='secondary' onClick={close}>Cancel</Button>
      </div>
    </div>
  </Popup>
}

export default PopupTransaction;