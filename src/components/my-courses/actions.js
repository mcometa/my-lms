import { SET_MY_COURSES } from './constants';

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
];

// fetch the course catalog from here then set dispatch SET_MY_COURSES reducer action type

export const setMyCourses = () => (dispatch) => {
  console.log('>>> setMyCourses');

  return dispatch({
    type: SET_MY_COURSES,
    payload: courseCatalog,
  });
};

export const resetMyCourses = () => (dispatch) => {
  console.log('>>> resetMyCourses');

  return dispatch({
    type: 'RESET_MY_COURSES',
  });
};

export default {};
