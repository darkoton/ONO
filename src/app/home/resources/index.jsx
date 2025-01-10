import style from './style.module.scss'
import { Typography } from '@ui/Typography';
import { Button } from '@ui/Button';
import ArrowRoute from '@icons/ArrowRoute';

const Resources = () => {
  return <section className={style.resources}>
    <div className='container'>
      <div className={style.body}>
        <div className={style.head}>
          <Typography
            className={style.subtitle}
            variant='subtitle'
            tag='h3'>Resources</Typography>
          <Typography variant='h2'>
            Dive Deeper into ONO
          </Typography>
        </div>

        <div className={style.grid}>
          <div className={style.card}>
            <div className={style.cardHead}>
              <Typography weight={400} variant='h3' className={style.cardTitle}>Documentation for developers</Typography>
              <Typography variant='text-small' tag='p' className={style.cardDesc}>The documentation contains detailed instructions, examples of API usage, information about the blockchain structure, and recommendations for creating decentralized applications. An ideal resource for developers looking to work with ONO quickly and efficiently.</Typography>
            </div>

            <div className={style.cardBottom}>
              <div className={style.cardTags}>
                <span className={style.cardTag}>API</span>
                <span className={style.cardTag}>Integration</span>
                <span className={style.cardTag}>Development</span>
              </div>

              <Button variant='text-2' icon={<ArrowRoute />} animation='rotate-icon'>go play </Button>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardHead}>
              <Typography weight={400} variant='h3' className={style.cardTitle}>User manual</Typography>
              <Typography variant='text-small' tag='p' className={style.cardDesc}>Discover all the features of ONO with this detailed guide. Here you will find information on how to buy, store, and earn ONO, how Proof of Burn works, and how to use ONO in gaming projects</Typography>
            </div>

            <div className={style.cardBottom}>
              <div className={style.cardTags}>
                <span className={style.cardTag}>Guide</span>
                <span className={style.cardTag}>ProofOfBurn</span>
                <span className={style.cardTag}>Gaming</span>
              </div>

              <Button variant='text-2' icon={<ArrowRoute />} animation='rotate-icon'>go play </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Resources;