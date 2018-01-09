import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Card = styled('div')`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
  margin-bottom: 1.5em;
  padding: 1.25em;
`;

const ContinueLink = styled(Link)`
  background-color: #cfecfe;
  color: #009efb;
  text-align: center;
  padding: 0.3em;
  border-radius: 4px;
`;

const FlexBetween = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IndexPage = () => (
  <div className="mv4">
    <Card>
      <h1 className="pa0 mb2">Featured Hydroflora Pots Garden & Outdoors</h1>
      <p className="f4 fw2">
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has beenorem Ipsum is{' '}
      </p>
      <FlexBetween>
        <ContinueLink className="mw4 mt2 f6" to="/page-2/">
          Continue reading
        </ContinueLink>
        <p className="f5" style={{ color: '#90a4ae' }}>
          Jan 3 2018
        </p>
      </FlexBetween>
    </Card>
    <Card>
      <h1 className="pa0 mb2">Featured Hydroflora Pots Garden & Outdoors</h1>
      <p className="f4 fw2">
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has beenorem Ipsum is{' '}
      </p>
      <FlexBetween>
        <ContinueLink className="mw4 mt2 f6" to="/page-2/">
          Continue reading
        </ContinueLink>
        <p className="f5" style={{ color: '#90a4ae' }}>
          Jan 3 2018
        </p>
      </FlexBetween>
    </Card>
  </div>
);

export default IndexPage;
