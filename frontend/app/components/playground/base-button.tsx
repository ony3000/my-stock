import classNames from 'classnames';

type BaseButtonProps = {
  className?: string;
  textContent: string;
  onClick: () => void;
};

export default function BaseButton({
  className = '',
  textContent,
  onClick,
}: BaseButtonProps) {
  return (
    <button
      type="button"
      className={classNames('inline-flex justify-center items-center h-10 m-4 px-4 rounded-xl text-white', className)}
      onClick={onClick}
    >
      {textContent}
    </button>
  );
}
