import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';

import './tachyons.css';

const HeaderStyled = styled('div')`
  background: #009efb;
  background: -moz-linear-gradient(left, #0178bc 0%, #00bdda 100%);
  background: -webkit-linear-gradient(left, #0178bc 0%, #00bdda 100%);
  background: linear-gradient(to right, #0178bc 0%, #00bdda 100%);
`;

const Header = () => (
  <HeaderStyled>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Ge Rahmat
        </Link>
      </h1>
    </div>
  </HeaderStyled>
);

const TemplateWrapper = ({ children }) => (
  <div style={{ backgroundColor: '#f2f7f8', height: '100vh' }}>
    <Helmet
      title="They're watching us"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

injectGlobal`
body {
  font-family: 'Rubik', sans-serif;
  color: #54667a;
}
* {
  outline: none;
}
h1, h2, h3, h4, h5 {
  font-family: "quicksand", sans-serif;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: .2em 0;
}
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}
`;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
