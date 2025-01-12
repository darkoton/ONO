import classNames from 'classnames';

const defaultProps = {
  variant: 'primary',
  className: '',
  icon: null,
  iconPosition: 'right',
  animation: ''
}

export const Button = ({
  className = defaultProps.className,
  variant = defaultProps.variant,
  icon = defaultProps.icon,
  iconPosition = defaultProps.iconPosition,
  animation = defaultProps.animation,
  children, ...props }) => {

  return (
    <button className={classNames('button', variant, animation, className)} {...props}>
      {icon && iconPosition === 'left' &&
        <span className='icon'>
          {icon}
        </span>
      }

      {children}

      {icon && iconPosition === 'right' &&
        <span className='icon'>
          {icon}
        </span>
      }
    </button>
  );
}
