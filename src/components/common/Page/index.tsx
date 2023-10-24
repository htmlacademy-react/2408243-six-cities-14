import { ReactNode } from 'react';

type PageMainProps = {
  className?: string;
  children?: ReactNode|ReactNode[];
}

export default function Page({className = '', children} : PageMainProps) {
  const _cls = ['page__main', className].join(' ');
  return (
    <main className={_cls}>
      { children }
    </main>
  );
}
