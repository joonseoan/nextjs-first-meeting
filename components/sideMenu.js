import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from './modal';

import MovieCreateForm from './movieCreateForm';
import { createMovie } from '../actions/movies';

const SideMenu = props => {

  let modal = null;

  const { categories } = props;
  const router = useRouter();

  const handleCreateMovie = async movie => {
    const newMovieList = await createMovie(movie);
    // console.log('newMovieList', newMovieList);
    // it just delivers "attribute"
    modal.closeModal();
    // to get new Data from the server
    router.push('/');
  }

  // 
  // console.log('modal: ====> ', modal)

  return(
    <React.Fragment>
        { /* 
          [  IMPORTANT!!!!!!!!!!!!  ]

          a way for the parent to get child's attributes including helper function.!!!!!
          we can put ref class into the child component as specified below.
          [ Condition ]
          1. The child must be a class-based component!
          2. if the child is a functional component, we must use callback!
         
         */ }
        <Modal ref={ ele => modal=ele } hasSubmit={ false }>
          <MovieCreateForm handleForSubmit={ handleCreateMovie } />
        </Modal>
        <h1 className="my-4">Shop Name</h1>
        <div className="list-group">
          {
            categories.map(category =>(
                <a
                  key={ category.id }
                  href="#" 
                  className="list-group-item"
                >
                  {category.name}
                </a>
            ))
          }
        </div>
    </React.Fragment>
  );
}

export default SideMenu;