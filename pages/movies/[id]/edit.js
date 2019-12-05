import { Component } from 'react';
import Router from 'next/router';

import MovieCreateForm from '../../../components/movieCreateForm';
import { getMovieById, updateMovie } from '../../../actions/movies';

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

    handleUpdateMovie = async movieUpdate => {
        const updatedMovie = await updateMovie(movieUpdate);        
        Router.push(`/movies/${movieUpdate.id}`)
    }

    render() {
        return(
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm
                    buttonName="Update" 
                    initialData={ this.props.movie } 
                    handleForSubmit={ this.handleUpdateMovie }
                />
            </div>
        );
    }
}

export default EditMovie;