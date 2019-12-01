import { useState } from 'react';
import Modal from './modal';

const SideMenu = props => {
  const { categories } = props;
  return(
    <React.Fragment>
        <Modal />
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