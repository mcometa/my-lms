import React from 'react';
import Section from 'react-bulma-components/lib/components/section';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';

import Menu from './components/menu';
import NotFound from './components/not-found';
import CourseCatalog from './components/course-catalog';
import MyCourses from './components/my-courses';
import CourseDetail from './components/course-detail';
import Login from './components/login';
import Viewer from './components/viewer';

const App = () => (
  <>
    {useLocation().pathname === '/login' ? '' : <Menu />}

    <Section>
      <Switch>
        <Route exact path="/courses" component={CourseCatalog} />
        <Route path="/login" component={Login} />
        <Route path="/my-courses" component={MyCourses} />
        <Route path="/course/:id" component={CourseDetail} />
        <Route path="/viewer/:id" component={Viewer} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Section>
  </>
);

export default App;
