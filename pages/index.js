import React, { useState, useEffect, Component } from 'react'
// import Head from 'next/head' // going to _App.js

// import NavBar from '../components/navbar'; // going to _App.js
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
// import Footer from '../components/footer'; // going to _APP.JS

import { getMovies, getCategories } from '../actions/movies';
// import MOVIE_DATA from '../actions/movies';

// Including getInitialProps
// class Home extends Component {

//   // it is to get initial props data in Next.js 
//   static async getInitialProps () {
//      const movies = await getMovies();
//      return { movies };
//   } 
  
//   state={
//     movies: [],
//     count: 0
//   }

//   // Called only once when component is mounted in React Side
//   // componentDidMount = async () => {

//   //   // setTimeout(() => {
//   //   //   this.setState({ movies: MOVIE_DATA });
//   //   // }, 2000);

//   //   this.setState({ movies: await getMovies() });
//   // }

//   increaseNumber = () => {
//     this.setState({ count: this.state.count + 1 });
//   }
  
//   render() {
//       const { movies } = this.props; 
//       return( 
//         <div>
//           <Head>
//             <title>Home</title>
//             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//             <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//             <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//           </Head>
//           <NavBar />
//         <div className="home-page">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-3">
//                 <div>{ this.state.count }</div>
//                 <button onClick={ this.increaseNumber }>Click Me</button>
//                 <SideMenu />
//               </div>
//               <div className="col-lg-9">
//                 <Carousel />
//                 <div className="row">
//                    { /* <MovieList movieList={ this.state.movies }/> */ }
//                    {/* when using initialProps */}
//                     <MovieList movieList={ movies }/>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//           <Footer />
//           <style jsx>{`
//             .home-page {
//               padding-top: 80px;
//             }
//           `}
//           </style>
//         </div>
//     );
//   }
// }


const Home = props => {

  // const [ movies, setMovies ] = useState([]);
  // const [ count, setCount ] = useState(0);

  // // const setMovieData = () => {
  // //   setTimeout(() => {
  // //       setMovies(MOVIE_DATA);
  // //     }, 2000);
  // // }

  // Important
  // useEffect(
  //   // must not use async here.
  //   // Use effect does not support aync
  //   () => {
  //     console.log(props)
      
  //     // [ Promise ]
  //     // getMovies()
  //     //   .then(movies => setMovies(movies));   
  //     // [ Promise and async ]
  //     // const updateMovies = async () => {
  //     //  const movies = await getMovies();
  //     //  setMovies(movies);
  //     // };
  //     // updateMovies();

  //     // [ Async Only ]
  //     // Working, btw
  //     setTimeout(() => {
  //       setMovies(MOVIE_DATA);
  //     }, 2000);

      
  //     setCount(count + 1)

  //     // [ Without Promise ]
  //     // setMovies(MOVIE_DATA);


  //     console.log(count)
  //     console.log('ddddd') 
  // },

  //   // [ IMPORTANT ] 
  //   // 1) []: I will not make a reay to keep updating about state value;
  //   // 2) null : I will make a ready to keep updating all state values;
  //   //        Therefore, the useEffect function runs continuously 
  //   //        Then setVavlue in useEffect function is keep working
  //   // 3) [ value ] : I will make a ready to keep updating the defined value in the array
  //   //        Therefore, the useEffect function runs continuously 
  //   //        Then, seValue identical in the value inside of array keeps working.

  //   // [IMPORTANT]
  //   // Props is working!!!!!!!!!!!!

  // []);

  return( 
      <div>
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                {/* <div>{ count }</div>
                <button onClick={ () => setCount(count+1) }>Click Me</button> */}
                <SideMenu 
                  categories={ props.categories }
                />
              </div>
              <div className="col-lg-9">
                <Carousel images={ props.images } />
                <div className="row">
                  <MovieList movieList={ props.movies || [] }/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map(movie => ({ 
    id: `movie-${ movie.id }`,
    url: movie.image,
    cover: movie.cover || '',
    name: movie.name
  }));

  return { movies, images, categories };
}

export default Home