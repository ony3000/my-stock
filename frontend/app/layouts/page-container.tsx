/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import { ErrorDialog, GlobalNavigation } from '~/components';

export default function PageContainer({
  className,
  title,
  children,
  ...otherProps
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={classNames('container max-w-screen-sm min-h-screen pb-15 bg-gray-100', className)}
      {...otherProps}
    >
      <h1 className="sr-only">{title}</h1>
      <GlobalNavigation />
      <main>
        {children}
      </main>
      <ErrorDialog />
    </div>
  );
}
