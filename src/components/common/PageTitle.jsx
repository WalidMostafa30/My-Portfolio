const PageTitle = ({ title, subtitle }) => {
  return (
    <hgroup className="text-center mb-8 lg:mb-12">
      {title && (
        <h1 className="text-5xl font-bold text-primary mb-1">
          {title}
        </h1>
      )}
      {subtitle && <p className="text-sm font-semibold max-w-xl mx-auto">{subtitle}</p>}
    </hgroup>
  );
};

export default PageTitle;
