type SectionTitleProps = {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  lightMode?: boolean;
};

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  lightMode = false
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${lightMode ? 'text-white' : 'text-primary-600'}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-base md:text-lg ${lightMode ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;