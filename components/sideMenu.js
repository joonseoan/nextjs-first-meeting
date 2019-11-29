import React from 'react';

const SideMenu = props => {
  return(
    <React.Fragment>
        <h1 className="my-4">Shop Name</h1>
        <div className="list-group">
          <a href="#" className="list-group-item">Category 1</a>
          <a href="#" className="list-group-item">Category 2</a>
          <a href="#" className="list-group-item">Category 3</a>
        </div>
    </React.Fragment>
  );
}

export default SideMenu;