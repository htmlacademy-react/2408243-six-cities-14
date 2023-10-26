import { ReactNode } from 'react';

type PageProps = {
  className?: string;
  children?: ReactNode|ReactNode[];
}

export default function SectionContainer({className, children} : PageProps) {
  return (
    <section className={ ['container', className].join(' ')}>
      { children }
    </section>
  );
}
