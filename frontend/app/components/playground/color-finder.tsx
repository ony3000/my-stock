import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import BaseButton from './base-button';

export default function ColorFinder() {
  const colorNames = [
    'slate', 'gray', 'zinc', 'neutral', 'stone',
    'red', 'orange', 'amber', 'yellow',
    'lime', 'green', 'emerald', 'teal',
    'cyan', 'sky', 'blue', 'indigo',
    'violet', 'purple', 'fuchsia', 'pink', 'rose',
  ];

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-wrap"
      onSubmit={handleSubmit(onSubmit)}
    >
      <select
        className={classNames('w-50 h-30 m-4 border-2 border-solid px-4 rounded-xl', {
          'border-red-400 bg-red-100': errors.colorName !== undefined,
        })}
        multiple
        defaultValue={['gray', 'red', 'blue']}
        {...register('colorName', { required: true })}
      >
        {colorNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>

      <input
        className={classNames('h-10 m-4 border-2 border-solid px-4 rounded-xl', {
          'border-red-400 bg-red-100': errors.hexColor !== undefined,
        })}
        type="text"
        placeholder="Hex color (000 or 000000)"
        {...register('hexColor', { required: true, pattern: /^(?:[0-9a-f]{3}|[0-9a-f]{6})$/i })}
      />

      <BaseButton
        className="bg-green-400 text-gray-800"
        type="submit"
        textContent="찾기"
        onClick={() => {}}
      />
    </form>
  );
}
