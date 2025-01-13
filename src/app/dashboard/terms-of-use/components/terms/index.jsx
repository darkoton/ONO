import classNames from 'classnames'
import globalStyle from '../../../style.module.scss'
import style from './style.module.scss'

const Terms = () => {
  return <div className={classNames(globalStyle.section, style.terms)}>
    <div className={style.item}>
      <h3 className={style.title}>Limitation of Liability</h3>
      <p className={style.text}>The service is provided on an "as-is" basis. We make no warranties, express or implied, regarding the service’s functionality, reliability, or suitability for any purpose. We are not responsible for any damages arising from your use of the service.</p>
    </div>
    <div className={style.item}>
      <h3 className={style.title}>Modifications to Terms</h3>
      <p className={style.text}>We reserve the right to modify these Terms of Use at any time. Changes will become effective immediately upon posting. It is your responsibility to review the Terms periodically. Continued use of the service after changes constitute acceptance of the updated terms.</p>
    </div>
    <div className={style.item}>
      <h3 className={style.title}>Intellectual Property</h3>
      <p className={style.text}>All content provided through the service, including but not limited to text, images, and software, is the property of the service provider or its licensors and is protected by applicable copyright and intellectual property laws.</p>
    </div>
    <div className={style.item}>
      <h3 className={style.title}>Limitation of Liability</h3>
      <p className={style.text}>The service is provided on an "as-is" basis. We make no warranties, express or implied, regarding the service’s functionality, reliability, or suitability for any purpose. We are not responsible for any damages arising from your use of the service.</p>
    </div>
    <div className={style.item}>
      <h3 className={style.title}>Privacy</h3>
      <p className={style.text}>Your use of the service is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.</p>
    </div>
    <div className={style.item}>
      <h3 className={style.title}>Use of the Service</h3>
      <p className={style.text}>You must be at least 18 years old to use this service. By using the service, you confirm that you meet this requirement.</p>
    </div>
  </div>
}

export default Terms