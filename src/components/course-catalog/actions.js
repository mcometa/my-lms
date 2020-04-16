import { SET_COURSE_CATALOG } from './constants';

const courseCatalog = [
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
  {
    id: 6,
    title: 'Voluptatibus nisi ab',
    thumbnail: 'https://source.unsplash.com/featured/400x300/?healthcare',
    author: 'Juana Learn',
    description:
      'Quas ut earum quasi ullam reprehenderit incidunt corrupti ex impedit tenetur atque',
  },
  {
    id: 7,
    title: 'Et doloribus quia',
    thumbnail: 'https://source.unsplash.com/featured/400x300/?healthcare',
    author: 'Juana Learn',
    description: 'Quae ducimus fuga ad ratione ipsum eaque molestiae, vel sapiente tenetur eum',
  },
  {
    id: 8,
    title: 'Sunt nulla suscipit',
    thumbnail: 'https://source.unsplash.com/featured/400x300/?healthcare',
    author: 'Juana Learn',
    description:
      'Laudantium reiciendis nesciunt eligendi mollitia voluptatum magnam tempore accusamus facere quos dignissimos',
  },
];

// fetch the course catalog from here then set dispatch SET_COURSE_CATALOG reducer action type

export const setCourseCatalog = () => (dispatch) => {
  console.log('>>> setCourseCatalog');

  return dispatch({
    type: SET_COURSE_CATALOG,
    payload: courseCatalog,
  });
};

export const resetCourseCatalog = () => (dispatch) => {
  console.log('>>> resetCourseCatalog');

  return dispatch({
    type: 'RESET_COURSE_CATALOG',
  });
};

export default {};
