import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';

import CourseCard from '../course-card';

import * as selectors from './selectors';
import * as actions from './actions';

const CourseCatalog = ({ courses, init, reset }) => {
  useEffect(() => {
    init();

    return () => {
      reset();
    };
  }, []);

  return (
    <Container>
      <Heading size={3}>Catalog</Heading>
      <Columns>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Columns>
    </Container>
  );
};

CourseCatalog.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  init: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    courses: selectors.getCourseCatalog(state),
  }),
  {
    init: actions.setCourseCatalog,
    reset: actions.resetCourseCatalog,
  }
)(CourseCatalog);
