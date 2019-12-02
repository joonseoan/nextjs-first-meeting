import { Component } from 'react';

import MovieCreateForm from '../../../components/movieCreateForm';
import { getMovieById } from '../../../actions/movies';

class EditMovie extends Component {

    static getInitialProps({ query }) {
        return { query }
    }

    state = {
        movie: {}
    }

    componentDidMount = async () => {
        const { id } = this.props.query;
        const movie = await getMovieById(id);
        this.setState({
            movie: { ...movie }
        });
    }

    render() {
        console.log('this.state.movie', this.state.movie)
        return(
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm />
            </div>
        );
    }
}

export default EditMovie;