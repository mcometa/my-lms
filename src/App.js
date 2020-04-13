import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Menu from './components/menu';
import NotFound from './components/not-found';
import CourseCatalog from './components/course-catalog';
import MyCourses from './components/my-courses';
import CourseDetail from './components/course-detail';

const App = () => (
  <>
    <Menu />
    <Section>
      <Switch>
        <Route exact path="/" component={CourseCatalog} />
        <Route path="/my-courses" component={MyCourses} />
        <Route path="/course/:id" component={CourseDetail} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Section>
  </>
);

export default App;
