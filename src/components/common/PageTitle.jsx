const PageTitle = ({ title, subtitle }) => {
  return (
    <hgroup className="text-center mb-8 lg:mb-12">
      {title && (
        <h1 className="text-5xl font-bold text-primary uppercase">{title}</h1>
      )}
      {subtitle && (
        <p
          className="font-semibold max-w-xl mx-auto -mt-1 leading-0 relative"
          style={{
            boxShadow: "-1px -1px 12px 9px var(--background)",
          }}
        >
          {subtitle}
        </p>
      )}
    </hgroup>
  );
};

export default PageTitle;
