'use client'

import style from './not-found/style.module.scss'
import Image from 'next/image'
import {Button} from '@ui/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import four from './not-found/img/four.svg'
import icon from './not-found/img/icon.svg'

export default function Custom404() {
  const router = useRouter();

  return <div className={style.error}>
  <div className={style.code}>
    <Image className={style.four} src={four} width={202} height={252} alt='404'/>
    <Image className={style.icon} src={icon} width={300} height={300} alt='404'/>
    <Image className={style.four} src={four} width={202} height={252} alt='404'/>
  </div>

    <h1 className={style.title}>Page not found</h1>
    <p className={style.desc}>Looks like you took a wrong turn! Let's get you back on track. Head back to our homepage and continue your adventure.</p>


    <Button onClick={router.back} className={style.button}>
      BACK TO HOME
    </Button>
  </div>
}
