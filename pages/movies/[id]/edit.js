import { Component } from 'react';

import MovieCreateForm from '../../../components/movieCreateForm';
import { getMovieById } from '../../../actions/movies';

class EditMovie extends Component {

    static async getInitialProps({ query }) {
        const { id } = query;
        const movie = await getMovieById(id);
        return { movie }
    }

    // state = {
    //     movie: {}
    // }

    // componentDidMount = async () => {
    //     const { id } = this.props.query;
    //     const movie = await getMovieById(id);
    //     this.setState({
    //         movie: { ...movie }
    //     });
    // }

    render() {
        return(
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm initialData={ this.props.movie } />
            </div>
        );
    }
}

export default EditMovie;