// file name: [id].js: means that it is dynamic url

import { useRouter } from 'next/router';
import Link from 'next/link';


import { getMovieById, deleteMovie } from '../../../actions/movies';

const Movie = props => {

    const router = useRouter();
    // function
    // console.log('useRouter: ', useRouter);
    
    // id is from url
    // console.log('useRouter.query', router.query)
    
    // we are using id. we can use other field name like [title].js, btw.
    // id is from file name [id].js
    // const { id } = router.query;

    const { movie } = props;
    const { id } = router.query;

    const handleDeleteMovie = async () => {
        // const response = await deleteMovie(id);
        // if(!response) { throw new Error('Unable to delete the movie') }
        // router.push('/');

        deleteMovie(id).then(() => {
            router.push('/');
        })
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{ movie.name }</h1>
                <p className="lead">{ movie.description }</p>
                <hr className="my-4" />
                <p>{ movie.genre }</p>
                <button
                    onClick={() => {}  } 
                    className="btn btn-primary btn-lg mr-1"
                >
                    Learn More
                </button>
                {/* Important to do fater change!!! */}
                <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
                    <button
                        // moved to href in Link to href connection
                        // onClick={ () => router.push(`/movies/${id}/edit`) } 
                        className="btn btn-warning btn-lg mr-1"
                    >
                        Update
                    </button>
                </Link>
                <button
                    onClick={ () => handleDeleteMovie() } 
                    className="btn btn-danger btn-lg"
                >
                    Delete
                </button>
            </div>
            <p className="desc-text">
                { movie.longDesc }
            </p>
            <style jsx>{`
                .desc-text {
                  font-size: 18px;
                  line-height: 36px;  
                }
            `}</style>
        </div>
    );
}


Movie.getInitialProps = async (context) => {
  // to get query data
  /* 
    context {pathname: "/movies/[id]", query: {…}, asPath: "/movies/2", AppTree: ƒ}
    AppTree: ƒ (props)asPath: "/movies/2"pathname: "/movies/[id]
    "query: {id: "2"}__proto__: Object
    .js:41 
   */
//   console.log('context', context);
  const { id } = context.query;
  const movie = await getMovieById(id);
//   console.log(movie)

  return { movie };
}

export default Movie;