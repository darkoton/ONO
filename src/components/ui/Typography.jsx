import classNames from 'classnames';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

const defaultProps = {
  variant: 'h1',
  className: null,
  tag: null,
}

export const Typography = ({
  className = defaultProps.className,
  variant = defaultProps.variant,
  tag = defaultProps.tag,
  children,
  ...props }) => {

  const Tag = tag || variant

  return (
    <Tag
      className={
        classNames(
          'typography',
          variant,
          poppins.className,
          className
        )
      }
      {...props}>

      {children}

    </Tag>
  )
}