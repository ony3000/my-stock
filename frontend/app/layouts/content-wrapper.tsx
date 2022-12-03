import classNames from 'classnames';

export default function ContentWrapper({
  className,
  children,
  ...otherProps
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={classNames('px-5 iphone:px-6.25', className)}
      {...otherProps}
    >
      {children}
    </div>
  );
}
