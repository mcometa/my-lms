import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Panel from 'react-bulma-components/lib/components/panel';
import Tag from 'react-bulma-components/lib/components/tag';
import './Playlist.css';

const Playlist = ({ lessons, currentLesson: { title, author, description } }) => {
  return (
    <Container>
      <Card>
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading size={4}>{title}</Heading>
              <Heading subtitle size={6}>
                by
                {author}
              </Heading>
            </Media.Item>
            <Media.Item position="right">
              <Tag rounded>3 of 12</Tag>
            </Media.Item>
          </Media>
          <Content>{description}</Content>
        </Card.Content>
      </Card>
      <br />
      <Panel>
        {lessons.map((course, index) => (
          <Panel.Block
            key={course.id}
            renderAs="a"
            href={course.active ? null : course.id}
            active={!!course.active}
          >
            {course.active ? <Panel.Icon renderAs={FontAwesomeIcon} icon={faCaretLeft} /> : null}
            <span className="lesson-number">{`${index + 1}.`}</span>
            {course.title}
          </Panel.Block>
        ))}
      </Panel>
    </Container>
  );
};

Playlist.propTypes = {
  lessons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currentLesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Playlist;
