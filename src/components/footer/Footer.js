import React from 'react';
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';

import './Footer.css';

const AppFooter = () => {
  return (
    <>
      <Footer className="footer">
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>My LMS. A sample app.</p>
          </Content>
        </Container>
      </Footer>
    </>
  );
};

export default AppFooter;
