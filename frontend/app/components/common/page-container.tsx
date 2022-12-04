import classNames from 'classnames';
import ErrorDialog from './error-dialog';
import GlobalNavigation from './global-navigation';

export default function PageContainer({
  className,
  title,
  children,
  ...otherProps
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={classNames('container max-w-screen-sm min-h-screen', className)}
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
