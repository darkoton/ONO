'use client'
import ArrowUpFilled from "@icons/ArrowUpFilled"
import classNames from "classnames"
import { useState } from "react"

const defaultProps = {
  className: '',
  value: '',
  label: '',
  options: [],
  onChange: () => { }
}

const Dropdown = ({
  className = defaultProps.className,
  value = defaultProps.value,
  label = defaultProps.label,
  options = defaultProps.options,
  onChange = defaultProps.onChange,
  ...props
}) => {

  const [isActive, setIsActive] = useState(false)

  return <div className={classNames('dropdown', className)} {...props}>
    {label && <label>{label}</label>}

    <div className={classNames('field', {
      active: isActive
    })}>

      <div className='toggle' onClick={() => {
        setIsActive(!isActive)
      }}>
        <div className='value'>{value}</div>
        <ArrowUpFilled className='icon' />
      </div>

      <ul className='list'>
        {options.map(({ label, value }) => {
          return <li onClick={() => onChange(value)} className='option' key={value} >{label ? label : value}</li>
        })}
      </ul>
    </div>
  </div>
}

export { Dropdown }
