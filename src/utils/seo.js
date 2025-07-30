import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, canonical }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    {canonical && <link rel="canonical" href={canonical} />}
  </Helmet>
);