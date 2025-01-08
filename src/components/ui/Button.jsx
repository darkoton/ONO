import classNames from 'classnames';

const defaultProps = {
  variant: 'primary',
  className: '',
  icon: null
}

export const Button = ({
  className = defaultProps.className,
  variant = defaultProps.variant,
  icon = defaultProps.icon,
  children, ...props }) => {

  return (
    <button className={classNames('button', variant, className)} {...props}>
      {children}

      {icon &&
        <span className='icon'>
          icon
        </span>
      }
    </button>
  );
}
