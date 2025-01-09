'use client'
import { useState, useEffect } from "react"

export const Field = ({
  label,
  value,
  id,
  onInput,
  onChange,
  ...props }) => {

  const [inputValue, setInputValue] = useState(value || '')
  const [error, setError] = useState(false)


  const handleInput = (event) => {
    const { target } = event
    setInputValue(target.value)

    if (onInput) {
      onInput(event)
    }
  }

  const handleChange = () => {
    if (target.required && target.value.trim().length === 0) {
      setError(true)
    } else {
      setError(false)
    }


    if (onChange) {
      onInput(event)
    }
  }

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return <div className="field">
    {label && <label htmlFor={id}>{label}</label>}
    <input value={inputValue} onChange={handleChange} onInput={handleInput} id={id} type="text" {...props} />
    {error && <span className="error">
      This field is required to be filled in
    </span>}
  </div>
}