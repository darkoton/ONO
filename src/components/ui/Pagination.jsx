import ArrowLeft from "@icons/ArrowLeft"
import ArrowRight from "@icons/ArrowRight"
import classNames from "classnames"

const Pagination = ({ className, ...props }) => {
  return <div className={classNames('pagination', className)} {...props}>
    <button className='arrow arrow-left'><ArrowLeft className='icon' /></button>
    <button className='page'>1</button>
    <button className='page'>2</button>
    <button className='dots'>...</button>
    <button className='page'>10</button>
    <button className='arrow arrow-right'><ArrowRight className='icon' /></button>
  </div>
}

export { Pagination }