import React, { useEffect } from 'react';

// BLACKROCK-INSPIRED SPACING SYSTEM - Precise Control
const SPACING_SYSTEM = {
  // Container widths - BlackRock uses specific widths, not too wide, not too narrow
  containers: {
    xs: 'max-w-sm',      // 384px - Mobile forms, cards
    sm: 'max-w-2xl',     // 672px - Content blocks
    md: 'max-w-4xl',     // 896px - Articles, main content
    lg: 'max-w-5xl',     // 1024px - BlackRock standard width
    xl: 'max-w-6xl',     // 1152px - Wide content sections
    xxl: 'max-w-7xl',    // 1280px - Maximum application width
    full: 'max-w-full',  // 100% - Full width sections
  },
  
  // BlackRock-style horizontal padding - consistent margins from window edges
  padding: {
    mobile: 'px-4',           // 16px - Mobile base
    tablet: 'px-6',           // 24px - Tablet
    desktop: 'px-8',          // 32px - Desktop
    wide: 'px-12',            // 48px - Wide screens
    blackrock: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16', // BlackRock-style responsive padding
    section: 'px-4 sm:px-6 lg:px-8', // Standard section padding
    hero: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20', // Hero section padding
  },
  
  // Vertical spacing system
  vertical: {
    xs: 'py-4',      // 16px
    sm: 'py-8',      // 32px
    md: 'py-12',     // 48px
    lg: 'py-16',     // 64px
    xl: 'py-20',     // 80px
    xxl: 'py-24',    // 96px
    hero: 'py-32',   // 128px - Hero sections
    section: 'py-16 sm:py-20 lg:py-24', // Standard section spacing
  },
  
  // Margin system for consistent spacing
  margin: {
    xs: 'my-4',
    sm: 'my-8',
    md: 'my-12',
    lg: 'my-16',
    xl: 'my-20',
    xxl: 'my-24',
  }
};

// BLACKROCK-STYLE GLOBAL CONTAINER
const GlobalContainer = ({
  children,
  size = 'lg',
  padding = 'blackrock',
  className = '',
  as: Component = 'div',
  centerContent = true,
  ...props
}) => {
  const containerClass = SPACING_SYSTEM.containers[size] || SPACING_SYSTEM.containers.lg;
  const paddingClass = SPACING_SYSTEM.padding[padding] || SPACING_SYSTEM.padding.blackrock;
  const centerClass = centerContent ? 'mx-auto' : '';
  
  return (
    <Component 
      className={`${containerClass} ${paddingClass} ${centerClass} w-full ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// ENHANCED LAYOUT COMPONENT - BlackRock Style
const Layout = ({
  children,
  title,
  description,
  maxWidth = 'lg',
  customPadding = null,
  header = null,
  footer = null,
  className = '',
  seoKeywords = '',
  enableStickyFooter = true,
  backgroundColor = 'bg-white',
  removeDefaultContainer = false,
  fullWidth = false,
  removeDefaultPadding = false,
  brandName = 'TLC Homes Services'
}) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${brandName}`;
    }

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    if (seoKeywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = seoKeywords;
    }

    // Add viewport meta tag for responsive design
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }
  }, [title, description, seoKeywords, brandName]);

  const layoutClasses = enableStickyFooter
    ? 'min-h-screen flex flex-col'
    : 'min-h-screen';

  const mainClasses = enableStickyFooter ? 'flex-1' : '';

  // Render content with BlackRock-style spacing
  const renderMainContent = () => {
    if (removeDefaultContainer || fullWidth) {
      return (
        <main className={mainClasses} role="main" aria-label="Main content">
          {children}
        </main>
      );
    }

    return (
      <main className={mainClasses} role="main" aria-label="Main content">
        <GlobalContainer 
          size={maxWidth} 
          padding={customPadding || (removeDefaultPadding ? 'px-0' : 'blackrock')}
          className="relative"
        >
          {children}
        </GlobalContainer>
      </main>
    );
  };

  return (
    <div className={`${layoutClasses} ${backgroundColor} text-gray-900 antialiased ${className}`}>
      {header && (
        <header className="relative z-50 w-full">
          {header}
        </header>
      )}

      {renderMainContent()}

      {footer && (
        <footer className="mt-auto w-full">
          {footer}
        </footer>
      )}
    </div>
  );
};

// BLACKROCK-STYLE HERO SECTION
const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundColor = 'bg-gradient-to-r from-orange-500 to-red-500',
  textColor = 'text-white',
  className = '',
  containerSize = 'lg',
  paddingY = 'py-20 sm:py-24 lg:py-32',
  overlay = false,
  overlayOpacity = 'bg-black/20',
  children,
  centerContent = false,
  backgroundImage = null,
  ...props
}) => {
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <section 
      className={`relative ${backgroundColor} ${textColor} ${paddingY} ${className}`}
      style={backgroundStyle}
      {...props}
    >
      {overlay && backgroundImage && (
        <div className={`absolute inset-0 ${overlayOpacity}`} />
      )}
      
      <GlobalContainer 
        size={containerSize} 
        padding="blackrock"
        className={`relative z-10 ${centerContent ? 'text-center' : ''}`}
      >
        {title && (
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            {title}
          </h1>
        )}
        
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}
        
        {description && (
          <div className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
            {description}
          </div>
        )}
        
        {children}
      </GlobalContainer>
    </section>
  );
};

// BLACKROCK-STYLE SECTION COMPONENT
const Section = ({
  children,
  className = '',
  paddingY = 'section',
  backgroundColor = 'bg-white',
  containerSize = 'lg',
  containerPadding = 'blackrock',
  fullWidth = false,
  as: Component = 'section',
  ...props
}) => {
  const verticalPadding = SPACING_SYSTEM.vertical[paddingY] || paddingY;
  
  if (fullWidth) {
    return (
      <Component className={`${verticalPadding} ${backgroundColor} ${className}`} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component className={`${verticalPadding} ${backgroundColor} ${className}`} {...props}>
      <GlobalContainer size={containerSize} padding={containerPadding}>
        {children}
      </GlobalContainer>
    </Component>
  );
};

// BLACKROCK-STYLE CONTAINER COMPONENT
const Container = ({
  children,
  className = '',
  size = 'lg',
  padding = 'blackrock',
  centerContent = true,
  as: Component = 'div',
  ...props
}) => (
  <GlobalContainer 
    size={size} 
    padding={padding} 
    centerContent={centerContent}
    className={className}
    as={Component}
    {...props}
  >
    {children}
  </GlobalContainer>
);

// CONTENT WRAPPER - For text-heavy content
const ContentWrapper = ({
  children,
  className = '',
  size = 'md',
  centerContent = true,
  prose = true
}) => {
  const proseClasses = prose ? 'prose prose-lg prose-gray max-w-none' : '';
  
  return (
    <GlobalContainer 
      size={size} 
      centerContent={centerContent}
      className={`${proseClasses} ${className}`}
      padding="blackrock"
    >
      {children}
    </GlobalContainer>
  );
};

// BLACKROCK-STYLE SECTION TITLE
const SectionTitle = ({
  title,
  subtitle,
  description,
  className = '',
  titleClassName = 'text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight',
  subtitleClassName = 'text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed',
  descriptionClassName = 'text-base sm:text-lg text-gray-500 leading-relaxed',
  centered = true,
  maxWidth = 'md',
  spacing = 'mb-16'
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${spacing} ${className}`}>
      <GlobalContainer 
        size={maxWidth} 
        padding="px-0"
        centerContent={centered}
      >
        {title && (
          <h2 className={titleClassName}>
            {title}
          </h2>
        )}
        
        {subtitle && (
          <p className={subtitleClassName}>
            {subtitle}
          </p>
        )}
        
        {description && (
          <div className={descriptionClassName}>
            {description}
          </div>
        )}
      </GlobalContainer>
    </div>
  );
};

// GRID SYSTEM - For consistent layouts
const Grid = ({
  children,
  columns = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  gap = 'gap-6 lg:gap-8',
  className = '',
  ...props
}) => (
  <div className={`grid ${columns} ${gap} ${className}`} {...props}>
    {children}
  </div>
);

// CARD COMPONENT - For consistent card layouts
const Card = ({
  children,
  className = '',
  padding = 'p-6 lg:p-8',
  shadow = 'shadow-lg hover:shadow-xl',
  rounded = 'rounded-xl',
  background = 'bg-white',
  border = 'border border-gray-200',
  transition = 'transition-all duration-300',
  ...props
}) => (
  <div 
    className={`${background} ${border} ${rounded} ${shadow} ${padding} ${transition} ${className}`}
    {...props}
  >
    {children}
  </div>
);

// RESPONSIVE BREAKPOINT UTILITIES
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// Export all components and utilities
export default Layout;
export { 
  Section, 
  Container, 
  ContentWrapper, 
  HeroSection, 
  SectionTitle, 
  Grid, 
  Card,
  GlobalContainer,
  SPACING_SYSTEM,
  breakpoints
};