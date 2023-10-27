import { ReactNode } from 'react';

type ContainerProps = {
  className?: string;
  children?: ReactNode | ReactNode[];
};

export default function Container({
  className = '',
  children,
}: ContainerProps) {
  const _cls = ['container', className].join(' ');
  return <section className={_cls}>{children}</section>;
}
