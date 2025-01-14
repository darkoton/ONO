'use client'

import globalStyle from '../style.module.scss'
import style from './style.module.scss'
import classNames from 'classnames'
import Image from 'next/image'
import { Field } from '@ui/Field'
import { Button } from '@ui/Button'
import { Switch } from '@ui/Switch'
import { useState } from 'react'

import PopupStep1 from './components/authentication-popup'
import PopupStep2 from './components/recovery-popup'

import Photo from '@icons/Photo'
import Steam from '@icons/Steam'
import Google from '@icons/GoogleColor'


const Settings = () => {

  const [username, setUsername] = useState('123alex')
  const [smsMessage, setSmsMessage] = useState(false)
  const [emailMessage, setEmailMessage] = useState(true)

  const [popupOpen1, setPopupOpen1] = useState(false)
  const [popupOpen2, setPopupOpen2] = useState(false)

  return <>
  <div className={classNames(globalStyle.section, style.settings)}>
    <div className={style.top}>
      <div className={style.avatar}>
        <input type='file' id='avatar' hidden />
        <label htmlFor='avatar'>
          <Image className={style.avatarImage} src='/img/avatar.png' alt='avatar' width={119} height={119} />

          <span className={style.avatarUpload}>
            <Photo className={style.avatarUploadIcon} />
          </span>
        </label>

        <p className={style.avatarText}>Upload photo</p>
      </div>

      <div className={style.info}>
        <div className={style.title}>Personal information</div>

        <div className={style.fields}>
          <Field className={style.field} value={username} onChange={({ target }) => setUsername(target.value)} label='Username' />

          <Button bodyClassName={style.button} label='Steam account' variant='primary' icon={<Steam />}>Connected</Button>
          <Button bodyClassName={style.button} label='Google account' variant='secondary' icon={<Google />}>Not connected</Button>
        </div>
      </div>
    </div>
    <div className={style.bottom}>
      <div className={style.block}>
        <h3 className={style.blockTitle}>Security</h3>

        <div className={style.sections}>
          <div className={classNames(style.section, style.wrap)}>
            <div className={style.sectionLeft}>
              <h4 className={style.sectionTitle}>Two-factor authentication</h4>
              <p className={style.sectionDesc}>Add an extra layer of security to your account by enabling 2FA</p>
            </div>
            <Button onClick={()=>{
              setPopupOpen1(true)
              setPopupOpen2(true)
            }} variant='secondary' className={style.sectionButton}>Configure</Button>
          </div>
        </div>
      </div>

      <div className={style.block}>
        <h3 className={style.blockTitle}>Notification</h3>

        <div className={style.sections}>
          <div className={style.section}>
            <div className={style.sectionLeft}>
              <h4 className={style.sectionTitle}>SMS message</h4>
              <p className={style.sectionDesc}>You will receive important notifications via SMS.</p>
            </div>

            <Switch value={smsMessage} onChange={({ target }) => setSmsMessage(target.value)} />
          </div>

          <div className={style.section}>
            <div className={style.sectionLeft}>
              <h4 className={style.sectionTitle}>Email message</h4>
              <p className={style.sectionDesc}>You will receive important notifications via your personal email.</p>
            </div>

            <Switch value={emailMessage} onChange={({ target }) => setEmailMessage(target.value)} />
          </div>
        </div>
      </div>
    </div>
  </div>

  <PopupStep2 hasClose={false} isOpen={popupOpen2} close={()=>{setPopupOpen2(false)}} />
  <PopupStep1 hasClose={false} isOpen={popupOpen1} close={()=>{setPopupOpen1(false)}} />
  </>
}

export default Settings
