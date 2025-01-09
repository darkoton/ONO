import classNames from 'classnames';

const defaultProps = {
  variant: 'primary',
  className: '',
  icon: null,
  animation: ''
}

export const Button = ({
  className = defaultProps.className,
  variant = defaultProps.variant,
  icon = defaultProps.icon,
  animation = defaultProps.animation,
  children, ...props }) => {

  return (
    <button className={classNames('button', variant, animation, className)} {...props}>
      {children}

      {icon &&
        <span className='icon'>
          {icon}
        </span>
      }
    </button>
  );
}
