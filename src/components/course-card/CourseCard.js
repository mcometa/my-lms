import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Columns from 'react-bulma-components/lib/components/columns';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const randomStr = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);

  return (
    <Columns.Column key={course.id} size={3}>
      <Link to={`/course/${course.id}`}>
        <Card>
          <Card.Image size="4by3" src={`${course.thumbnail}?${randomStr}`} />
          <Card.Content>
            <Media>
              <Media.Item>
                <Heading size={4}>{course.title}</Heading>
                <Heading subtitle size={6}>
                  by
                  {` `}
                  {course.author}
                </Heading>
              </Media.Item>
            </Media>
            <Content>{course.description}</Content>
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Item renderAs="a" href="#Yes">
              Play This Course
            </Card.Footer.Item>
          </Card.Footer>
        </Card>
      </Link>
    </Columns.Column>
  );
};

CourseCard.propTypes = {
  course: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CourseCard;
