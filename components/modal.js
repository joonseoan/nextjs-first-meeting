const Modal = props => {
    let closeButton = null;
    const submitModal = () => {
        alert('Submitting Modal');
        // [ Important ]
        // now closeButton is ele from "<button>Close</button>"
        // it executes ele's plain javascript "click()" functions!
        // It is including references's all javascript attribute.
        console.log('closeButton', closeButton);
        closeButton.click();
    }

    return(
        <React.Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Create Movie
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                    {/* ref : Important */}
                    <button
                        ref={ ele => { 
                            // ele is "this button element"
                            console.log(ele) 
                            return closeButton=ele
                        }} 
                        type="button" 
                        className="btn btn-secondary" 
                        data-dismiss="modal"
                    >
                        Close
                    </button>
                    <button 
                        onClick={ submitModal } type="button" className="btn btn-primary">Save changes
                    </button>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;