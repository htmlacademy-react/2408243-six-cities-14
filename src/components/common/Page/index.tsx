type PageMainProps = {
  className?: string;
  content: JSX.Element;
}

export default function Page({className, content} : PageMainProps) {
  return (
    <main className={className}>
      { content }
    </main>
  );
}
