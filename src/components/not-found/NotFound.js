import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';

import './NotFound.css';

const NotFound = () => (
  <>
    <Container>
      <Columns className="not-found is-vcentered">
        <Columns.Column>
          <Heading className="has-text-centered" size={2}>
            Page Not found
          </Heading>
        </Columns.Column>
      </Columns>
    </Container>
  </>
);

export default NotFound;
