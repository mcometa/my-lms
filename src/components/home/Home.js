import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import Content from 'react-bulma-components/lib/components/content';

import CourseCatalog from '../course-catalog';

import './Home.css';

const Home = () => (
  <Container>
    <Columns centered className="home is-vcentered has-text-centered">
      <Columns.Column>
        <Heading size={1}>My LMS</Heading>
        <Heading size={3} subtitle>
          A sample app
        </Heading>
      </Columns.Column>
    </Columns>
    <Content />
    <CourseCatalog />
  </Container>
);

export default Home;
