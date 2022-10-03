import { Link, useMatches } from '@remix-run/react';
import {
  HomeIcon,
  SearchIcon,
  PresentationChartLineIcon,
  CurrencyDollarIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline';
import classNames from 'classnames';
import type { NavigationItem } from '~/types/layouts';

export default function GlobalNavigation() {
  const matches = useMatches();

  const matchedPathnames = matches.map(({ pathname }) => pathname);
  const navigationItems: NavigationItem[] = [
    {
      href: '/home',
      title: '홈',
      icon: HomeIcon,
    },
    {
      href: '/search',
      title: '검색',
      icon: SearchIcon,
    },
    {
      href: '#',
      title: '테마',
      icon: PresentationChartLineIcon,
    },
    {
      href: '#',
      title: '자산',
      icon: CurrencyDollarIcon,
    },
    {
      href: '#',
      title: '더보기',
      icon: DotsHorizontalIcon,
    },
  ];

  return (
    <nav className="fixed z-50 bottom-0 w-full max-w-screen-sm h-15 bg-white shadow-[0_0_3px_0_rgba(0,0,0,0.1)]">
      <ul className="flex h-full">
        {navigationItems.map(({ href, title, icon: IconComponent }) => (
          <li key={title} className="flex-1">
            <Link to={href} className="inline-flex justify-center items-center w-full h-full">
              <span className="sr-only">{title}</span>
              <IconComponent
                className={classNames('w-6', 'h-6', {
                  'text-blue-500': matchedPathnames.includes(href),
                })}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
