import style from './style.module.scss'
import { Typography } from '@ui/Typography'
import { Button } from '@ui/Button'
import ArrowRoute from '@icons/ArrowRoute'

const About = ()=>{
  return (
    <section className={style.about}>
      <div className={style.wrapper}>
        <div className='container'>
          <div className={style.body}>
            <div className={style.info}>
              <Typography className={style.subtitle} variant='subtitle' tag='h3'>About ONO</Typography>
              <Typography className={style.title} variant='h2'>
                What Makes ONO Unique?
              </Typography>

              <div className={style.texts}>
                <Typography variant='text-small' tag='p'>
                  ONO is a pioneering DeFi cryptocurrency using the Proof of Burn (PoB) protocol for transparency and fairness. Users shape the ecosystem by burning coins. ONO offers flexible earning methods: buy, forge, or win games to join the digital asset revolution.
                </Typography>
                <Typography variant='text-small' tag='p'>
                  Proof of Burn is an eco-friendly alternative to traditional mining. Users burn a portion of their coins to access forging, reducing energy consumption and ensuring fair reward distribution.
                </Typography>
              </div>

              <Button variant='primary' icon={<ArrowRoute/>} animation='rotate-icon'>read more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
