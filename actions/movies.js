
import axios from 'axios';

const MOVIE_DATA = [];
const BASE_URL = 'http://localhost:3000';

// const MOVIE_DATA = [
// // export default [
//   {
//     id: '1',
//     name: 'The Shawshank Redemption',
//     releaseYear: 1994,
//     description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
//     longDesc: 'Lorem ipsum dolor sit amet, mattis est ut eros magna, duis integer ipsum, consectetuer at blandit, massa a eget dui suspendisse sem. Semper sapien nibh lectus. Auctor mi quisque ac, mauris sagittis, a interdum adipiscing porttitor orci montes aliquam, quisque aliquam orci amet, cras sociis. Neque cubilia molestie vestibulum, dui viverra vivamus. Est mattis augue sem a donec, voluptatum magna massa mauris suspendisse ac diam, non urna auctor dignissim tempus sed, integer eros tempor cras ac. Sem semper quisque urna mus in pellentesque, porttitor donec leo duis suscipit, et neque lorem condimentum. Rhoncus quis, lorem at praesent tellus facere curabitur, massa habitasse eget et, at proin.',
//     rating: 4.8,
//     genre: 'drama',
//     image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
//   },
//   {
//     id: '2',
//     name: 'The Dark Knight',
//     releaseYear: 2008,
//     description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
//     longDesc: ' Duis in lacus sed purus nec, neque nam augue nulla non laboris consectetuer, justo vestibulum, per ipsum sociosqu egestas id ullamcorper, consectetuer urna elit ultricies in et vulputate. Adipiscing neque donec ultrices lacus vitae turpis, erat risus facilisis tempor vestibulum hymenaeos neque. A ut. Commodo orci erat quam vitae magna est, aliquam in ullamcorper feugiat etiam sodales, vulputate facilisi sapien. Nibh pellentesque amet',
//     rating: 4.7,
//     genre: 'action, crime, drama',
//     image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600'
//   },
//   {
//     id: '3',
//     name: 'Lord of the Rings',
//     releaseYear: 2004,
//     description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
//     longDesc: 'Aliquam eget, ut ac luctus, iaculis mauris eu aenean scelerisque enim lacus, interdum morbi sed imperdiet, viverra arcu eget mi pede porttitor. Pretium vitae nec et, ac id maecenas urna suscipit. Eos laoreet lacus non quam id rutrum, sollicitudin quis, in duis tempus sed arcu. Natoque interdum ipsum sed lorem ante, elit amet. Justo tellus ullamcorper tincidunt aliquam proin tellus, aliquam nec nisl nibh amet neque.',
//     rating: 4.9,
//     genre: 'adventure, drama, fantasy',
//     image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600'
//   }
// ];

const CATEGORY_DATA = [
  { id: '0', name: 'all' },
  { id: '1', name: 'drama' },
  { id: '2', name: 'action' },
  { id: '3', name: 'adventure' },
  { id: '4', name: 'historical' },
];

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
    }, 50);
  })
}

export const getMovies = async () => {
    const response = await axios.get(BASE_URL+'/api/v1/movies');
    return response.data;
    
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         // debugger
    //         resolve(MOVIE_DATA);  
    //     }, 50);
    // })
}

export const createMovie = async movie => {
  const response = await axios.post(BASE_URL + `/api/v1/movies`, movie);
  return response.data; 

    // return new Promise((resolve, reject) => {
    //     // 36 : base number
    //     movie.id = Math.random().toString(36).substr(2, 7);
    //     console.log(movie.id);

    //     MOVIE_DATA.push(movie);
    //     setTimeout(() => {
    //         // debugger
    //         resolve(MOVIE_DATA);  
    //     }, 50);
    // })
}

export const getMovieById = async id => {
  const response = await axios.get(BASE_URL+`/api/v1/movies/${id}`);
  return response.data;

  // return new Promise((resolve, reject) => {
  //   const movieIndex = MOVIE_DATA.find(movie => movie.id === id);
  //   setTimeout(() => {
  //     resolve(movieIndex);
  //   }, 50);
  // })
}

export const updateMovie = async movieUpdate => {
  const response = await axios.patch(BASE_URL+`/api/v1/movies/${movieUpdate.id}`, movieUpdate);
  return response.data;
}

export const deleteMovie = async id => {
  // console.log('iddddddddddddddddd', id)
  const response = await axios.delete(BASE_URL+`/api/v1/movies/${id}`);
  return response.data;
}

export const getPosts = async () => {
  const response = await axios.get(BASE_URL+'/api/v1/posts');
  return response.data;
}