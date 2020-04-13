import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bulma-components/lib/components/container';
import Pagination from 'react-bulma-components/lib/components/pagination';
import Columns from 'react-bulma-components/lib/components/columns';
import ReactPlayer from 'react-player';

import Playlist from '../playlist';
import './Viewer.css';

const lessons = [
  {
    id: 1,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Lorem, ipsum dolor.',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 2,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Tenetur, error voluptatem',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 3,
    active: true,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Blanditiis, distinctio dicta',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 4,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Quae, tempore quaerat',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 5,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Amet, eligendi corrupti',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 6,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Laudantium, enim similique',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 7,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Quae, tempore quaerat',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 8,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Amet, eligendi corrupti',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 9,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Laudantium, enim similique',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 10,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Quae, tempore quaerat',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 11,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Amet, eligendi corrupti',
    author: 'Juana Learn',
    description: 'Short description',
  },
  {
    id: 12,
    videoUrl: 'https://youtu.be/ysz5S6PUM-U',
    title: 'Laudantium, enim similique',
    author: 'Juana Learn',
    description: 'Short description',
  },
];

const currentLesson = {
  id: 3,
  active: true,
  videoUrl: 'https://youtu.be/ysz5S6PUM-U',
  title: 'Blanditiis, distinctio dicta',
  author: 'Juana Learn',
  description: 'Short description',
};

const Viewer = ({ url, next, previous }) => {
  return (
    <Container fluid>
      <Columns>
        <Columns.Column size={8}>
          <Container>
            <ReactPlayer
              className="react-player"
              width="100%"
              height="640px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <Pagination
              next="Next: Quae, tempore quaerat"
              previous="Previous: Tenetur, error voluptatem"
              className="pagination"
              current={3}
              total={5}
              delta={0}
            />
          </Container>
        </Columns.Column>
        <Columns.Column size={4}>
          <Playlist lessons={lessons} currentLesson={currentLesson} />
        </Columns.Column>
      </Columns>
    </Container>
  );
};

Viewer.propTypes = {
  url: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  previous: PropTypes.string.isRequired,
};

export default Viewer;
