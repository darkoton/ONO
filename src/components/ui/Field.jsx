import classNames from "classnames"

export const Field = ({
  label,
  id,
  note,
  error = false,
  className,
  ...props }) => {
  return <div className={classNames('field', className)}>
    {label && <label htmlFor={id}>{label}</label>}
    <input id={id} type="text" {...props} />
    {note && <span className="note">{note}</span>}
    {error && <span className="error">
      This field is required to be filled in
    </span>}
  </div>
}