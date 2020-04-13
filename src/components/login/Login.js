import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import { Field, Label, Input, Checkbox, Control } from 'react-bulma-components/lib/components/form';
import Box from 'react-bulma-components/lib/components/box';
import Button from 'react-bulma-components/lib/components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-bulma-components/lib/components/icon';
import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => (
  <Container className="login">
    <Columns centered className="is-vcentered">
      <Columns.Column desktop={{ size: 5 }} widescreen={{ size: 4 }} tablet={{ size: 6 }}>
        <Heading className="has-text-centered">Login to your account</Heading>
        <Box>
          <Field>
            <Label>Email</Label>
            <div className="control has-icons-left">
              <Control iconLeft iconRight>
                <Input type="email" placeholder="juana@learn.com" />
                <Icon align="left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Icon>
              </Control>
            </div>
          </Field>
          <Field>
            <Label>Password</Label>
            <div className="control has-icons-left">
              <Input type="password" placeholder="*******" required />
              <Icon align="left">
                <FontAwesomeIcon icon={faLock} />
              </Icon>
            </div>
          </Field>
          <Field>
            <Label>
              <Checkbox />
              {` `}
              Remember me
            </Label>
          </Field>
          <Field>
            <Button color="success">Login</Button>
          </Field>
        </Box>
        <p className="has-text-centered">
          <Link to="/">&larr; Go back to the Course Catalog</Link>
        </p>
      </Columns.Column>
    </Columns>
  </Container>
);

export default Login;
