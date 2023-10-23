type PageProps = {
  className?: string;
  content: JSX.Element;
}

export default function SectionContainer({className, content} : PageProps) {
  return (
    <section className={ className}>
      { content }
    </section>
  );
}
