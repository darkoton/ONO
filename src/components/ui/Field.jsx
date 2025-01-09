'use client'
import { useState, useEffect } from "react"

export const Field = ({
  label,
  id,
  error = false,
  ...props }) => {
  return <div className="field">
    {label && <label htmlFor={id}>{label}</label>}
    <input id={id} type="text" {...props} />
    {error && <span className="error">
      This field is required to be filled in
    </span>}
  </div>
}