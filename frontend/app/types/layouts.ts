export type NavigationItem = {
  href: string;
  title: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};
