import { useState, useMemo } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import colors from 'tailwindcss/colors';
import classNames from 'classnames';
import type { Dict } from '~/types/common';
import BaseButton from './base-button';

type RgbDict = {
  R: number;
  G: number;
  B: number;
};

type ColorFinderFormFields = {
  colorName: string[],
  hexColor: string,
};

const colorNames = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow',
  'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo',
  'violet', 'purple', 'fuchsia', 'pink', 'rose',
];

export default function ColorFinder() {
  const [enteredHexColor, setEnteredHexColor] = useState('');
  const [closestHexColor, setClosestHexColor] = useState('');
  const [closestColorName, setClosestColorName] = useState('');
  const flattenRgbColors = useMemo(() => {
    const result: Dict<RgbDict> = {
      black: { R: 0, G: 0, B: 0 },
      white: { R: 255, G: 255, B: 255 },
    };

    Object.entries(colors).forEach(([name, value]) => {
      if (colorNames.includes(name)) {
        const palette = value as Dict<string>;

        Object.entries(palette).forEach(([weight, hexColorWithHash]) => {
          result[`${name}-${weight}`] = {
            R: Number.parseInt(hexColorWithHash.slice(1, 3), 16),
            G: Number.parseInt(hexColorWithHash.slice(3, 5), 16),
            B: Number.parseInt(hexColorWithHash.slice(5), 16),
          };
        });
      }
    });

    return result;
  }, []);
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<ColorFinderFormFields>();

  const onSubmit: SubmitHandler<ColorFinderFormFields> = (data) => {
    const enteredRgbColor: RgbDict = {
      R: Number.parseInt(data.hexColor.slice(0, 2), 16),
      G: Number.parseInt(data.hexColor.slice(2, 4), 16),
      B: Number.parseInt(data.hexColor.slice(4), 16),
    };

    let minDistance = Infinity;
    let closestRgbColor = {} as RgbDict;
    let closestClassNameSuffix = '';

    Object.entries(flattenRgbColors).forEach(([classNameSuffix, rgbColor]) => {
      if (classNameSuffix === 'black' || classNameSuffix === 'white' || data.colorName.includes(classNameSuffix.split('-')[0])) {
        const distanceAs3dCoordinate = Math.sqrt(
          (enteredRgbColor.R - rgbColor.R) ** 2
            + (enteredRgbColor.G - rgbColor.G) ** 2
            + (enteredRgbColor.B - rgbColor.B) ** 2,
        );

        if (minDistance > distanceAs3dCoordinate) {
          minDistance = distanceAs3dCoordinate;
          closestRgbColor = rgbColor;
          closestClassNameSuffix = classNameSuffix;
        }
      }
    });

    setEnteredHexColor(data.hexColor);
    setClosestHexColor([
      closestRgbColor.R.toString(16).padStart(2, '0'),
      closestRgbColor.G.toString(16).padStart(2, '0'),
      closestRgbColor.B.toString(16).padStart(2, '0'),
    ].join(''));
    setClosestColorName(closestClassNameSuffix);
  };

  return (
    <>
      <form
        className="flex flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
      >
        <select
          className={classNames('w-[15rem] h-30 m-4 border-2 border-solid px-4 rounded-xl', {
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
          placeholder="Hex color w/o hash (000000)"
          {...register('hexColor', { required: true, pattern: /^[0-9a-f]{6}$/i })}
        />

        <BaseButton
          className="bg-green-400 text-gray-800"
          type="submit"
          textContent="찾기"
          onClick={() => {}}
        />
      </form>
      {enteredHexColor && (
        <p className="mb-4">
          입력한 색상
          {' '}
          <span className="whitespace-nowrap">{enteredHexColor}</span>
          <span className="inline-block w-4 h-4 rounded-md align-text-top" style={{ backgroundColor: `#${enteredHexColor}` }} />
          에 가장 가까운 색상은
          {' '}
          <span className="whitespace-nowrap">{closestColorName}</span>
          (
          <span className="whitespace-nowrap">{closestHexColor}</span>
          <span className="inline-block w-4 h-4 rounded-md align-text-top" style={{ backgroundColor: `#${closestHexColor}` }} />
          )입니다.
        </p>
      )}
    </>
  );
}
