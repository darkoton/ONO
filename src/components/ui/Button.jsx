import classNames from 'classnames';

const defaultProps = {
  variant: 'primary',
}

export const Button = ({
  variant = defaultProps.variant,
   children, ...props})=>{
  return <button className={classNames('btn', variant)} {...props}>
    {children}
  </button>;
}
