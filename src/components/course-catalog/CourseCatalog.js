import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';

import CourseCard from '../course-card';

const courses = [
  {
    id: 1,
    title: 'Optio quaerat unde',
    thumbnail: 'https://source.unsplash.com/featured/400x300/?healthcare',
    author: 'Juana Learn',
    description:
      'Laudantium reiciendis nesciunt eligendi mollitia voluptatum magnam tempore accusamus facere quos dignissimos',
  },
  {
    id: 2,
    title: 'Voluptatibus nisi ab',
    thumbnail: 'https://source.unsplash.com/featured/400x300/?healthcare',
    author: 'Juana Learn',
    description:
      'Quas ut earum quasi ullam reprehenderit incidunt corrupti ex impedit tenetur atque',
  },
  {
    id: 3,
    title: 'Et doloribus quia',
    thumbnail: 'https://source.unsplash.com/featured/400x300/?healthcare',
    author: 'Juana Learn',
    description: 'Quae ducimus fuga ad ratione ipsum eaque molestiae, vel sapiente tenetur eum',
  },
  {
    id: 4,
    title: 'Sunt nulla suscipit',
    thumbnail: 'https://source.unsplash.com/featured/400x300/?healthcare',
    author: 'Juana Learn',
    description:
      'Laudantium reiciendis nesciunt eligendi mollitia voluptatum magnam tempore accusamus facere quos dignissimos',
  },
  {
    id: 5,
    title: 'Explicabo expedita',
    thumbnail: 'https://source.unsplash.com/featured/400x300/?healthcare',
    author: 'Juana Learn',
    description: 'Modi iure maiores eligendi consectetur sint non sit quisquam quas, cum deleniti?',
  },
];

const CourseCatalog = () => {
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

export default CourseCatalog;
