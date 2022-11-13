/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';

type BaseButtonProps = React.ComponentProps<'button'> & {
  textContent: string;
};

export default function BaseButton({
  className,
  textContent,
  onClick,
  ...otherProps
}: BaseButtonProps) {
  return (
    <button
      type="button"
      className={classNames('inline-flex justify-center items-center h-10 m-4 px-4 rounded-xl text-white', className)}
      onClick={onClick}
      {...otherProps}
    >
      {textContent}
    </button>
  );
}
