import { ErrorDialog, GlobalNavigation } from '~/components';

export default function PageContainer({
  title,
  children,
}: React.ComponentProps<'div'>) {
  return (
    <div className="container max-w-screen-sm pb-15 bg-gray-100">
      <h1 className="sr-only">{title}</h1>
      <GlobalNavigation />
      <main>
        {children}
      </main>
      <ErrorDialog />
    </div>
  );
}
