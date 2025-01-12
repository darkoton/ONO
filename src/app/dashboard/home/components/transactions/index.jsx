import classNames from 'classnames'
import globalStyle from '../../style.module.scss'
import style from './style.module.scss'
import { Button } from '@ui/Button'

import ArrowLeft from '@/components/icons/ArrowLeftFull'
import ArrowRight from '@/components/icons/ArrowRightFull'

const Transactions = () => {
  return <div className={classNames(globalStyle.section, style.transactions)}>
    <div className={style.head}>
      <div className={style.title}>Transactions</div>
      <div className={style.tabs}>
        <div className={classNames(style.tab, style.active)}>
          All
        </div>
        <div className={style.tab}>
          Send
        </div>
        <div className={style.tab}>
          Received
        </div>
      </div>
    </div>

    <ul className={style.list}>
      <li className={style.item}>
        <div className={style.itemLeft}>
          <div className={style.itemTime}>
            22:26:45
          </div>
          <div className={style.itemKey}>
            65gter86g4rsd6fc5we84fvfs6d8f4feeв4
          </div>
        </div>
        <div className={classNames(style.direction, style.fall)}>
          <ArrowRight />
          <span className={style.directionValue}>-0,568 ONO</span>
        </div>
      </li>

      <li className={style.item}>
        <div className={style.itemLeft}>
          <div className={style.itemTime}>
            22:26:45
          </div>
          <div className={style.itemKey}>
            65gter86g4rsd6fc5we84fvfs6d8f4feeв4
          </div>
        </div>
        <div className={classNames(style.direction, style.grow)}>
          <ArrowLeft />
          <span className={style.directionValue}>-0,568 ONO</span>
        </div>
      </li>

      <li className={style.item}>
        <div className={style.itemLeft}>
          <div className={style.itemTime}>
            22:26:45
          </div>
          <div className={style.itemKey}>
            65gter86g4rsd6fc5we84fvfs6d8f4feeв4
          </div>
        </div>
        <div className={classNames(style.direction, style.fall)}>
          <ArrowRight />
          <span className={style.directionValue}>-0,568 ONO</span>
        </div>
      </li>

      <li className={style.item}>
        <div className={style.itemLeft}>
          <div className={style.itemTime}>
            22:26:45
          </div>
          <div className={style.itemKey}>
            65gter86g4rsd6fc5we84fvfs6d8f4feeв4
          </div>
        </div>
        <div className={classNames(style.direction, style.grow)}>
          <ArrowLeft />
          <span className={style.directionValue}>-0,568 ONO</span>
        </div>
      </li>

      <li className={style.item}>
        <div className={style.itemLeft}>
          <div className={style.itemTime}>
            22:26:45
          </div>
          <div className={style.itemKey}>
            65gter86g4rsd6fc5we84fvfs6d8f4feeв4
          </div>
        </div>
        <div className={classNames(style.direction, style.fall)}>
          <ArrowRight />
          <span className={style.directionValue}>-0,568 ONO</span>
        </div>
      </li>

      <li className={style.item}>
        <div className={style.itemLeft}>
          <div className={style.itemTime}>
            22:26:45
          </div>
          <div className={style.itemKey}>
            65gter86g4rsd6fc5we84fvfs6d8f4feeв4
          </div>
        </div>
        <div className={classNames(style.direction, style.grow)}>
          <ArrowLeft />
          <span className={style.directionValue}>-0,568 ONO</span>
        </div>
      </li>

      <li className={style.item}>
        <div className={style.itemLeft}>
          <div className={style.itemTime}>
            22:26:45
          </div>
          <div className={style.itemKey}>
            65gter86g4rsd6fc5we84fvfs6d8f4feeв4
          </div>
        </div>
        <div className={classNames(style.direction, style.grow)}>
          <ArrowLeft />
          <span className={style.directionValue}>-0,568 ONO</span>
        </div>
      </li>
    </ul>

    <Button className={style.button}>
      <span className={style.pcValue}>View more</span>
      <span className={style.mobValue}>Retry Sync</span>
    </Button>
  </div>
}

export default Transactions