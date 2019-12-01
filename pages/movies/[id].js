// file name: [id].js: means that it is dynamic url

import { useRouter } from 'next/router';

import { getMovieById } from '../../resources/movies';

const Movie = props => {

    const router = useRouter();
    // function
    console.log('useRouter: ', useRouter);
    
    // id is from url
    console.log('useRouter.query', router.query)
    // we are using id. we can use other field name like [title].js, btw.
    // id is from file name [id].js
    // const { id } = router.query;

    const { movie } = props;

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{ movie.name }</h1>
                <p className="lead">{ movie.description }</p>
                <hr className="my-4" />
                <p>{ movie.genre }</p>
                <a className="btn btn-primary btn-lg">Learn More</a>
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
  console.log('context', context);
  const { id } = context.query;
  const movie = await getMovieById(id);
  console.log(movie)

  return { movie };
}

export default Movie;