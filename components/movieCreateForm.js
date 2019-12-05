import { useState, useEffect } from 'react';

const MovieCreateForm = props => {
    const defaultData = {};
    const formData = props.initialData ?  { ...props.initialData } : defaultData

    // [IMPORTANT!!!!!!!!!!!!!!!!!]
    // GreatThing about useState: can get props data ahead when the compoent is diplayed
    // static getDerivedFromPropsToState!!!!!!!!!1
    const [ form, setForm ] = useState(formData);

    // const [ form, setForm ] = useState({});
    // useEffect(() => {

    //     if(props.initialData) {
    //         setForm(props.initialData);
    //     }

    // }, [ { ...props.initialData } ])

    const handleFormInputs = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSelectChange = e => {
        const { options } = e.target;
        let selectedValues = [];
        for (let i = 0; i < options.length; i++) {
            if(options[i].selected) {
                selectedValues=[ ...selectedValues, options[i].value ]
            }
        }
        setForm({ ...form, genre: selectedValues.toString() });
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        props.handleForSubmit({ ...form });
    }

    // const selected = option => {
    //     if(form.genre) {
    //         const genre = form.genre.split(', ');
    //         if(genre.indexOf(option) > -1) {
    //             return 'selected';
    //         } else {
    //             return false;
    //         }
    //     } else {
    //         return false;
    //     }
    // }

    return(
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    value={ form.name || '' }
                    onChange= {handleFormInputs } 
                    className="form-control" 
                    id="name" aria-describedby="emailHelp" 
                    placeholder="Lord of the Rings" 
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input 
                    type="text"
                    name="description"
                    onChange={ handleFormInputs } 
                    value={ form.description || '' } 
                    className="form-control" 
                    id="description" 
                    placeholder="Somewhere in Middle-earth..." 
                />
            </div>
            <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input 
                    type="number"
                    name="rating"
                    value={ form.rating || '' } 
                    onChange={ handleFormInputs } 
                    max="5" min="0" 
                    className="form-control" 
                    id="rating" 
                    placeholder="3" 
                />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input 
                    type="text"
                    name="image"
                    value={ form.image || '' }
                    onChange={ handleFormInputs } 
                    className="form-control" 
                    id="image" 
                    placeholder="http://....." 
                />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input 
                    type="text"
                    value={ form.cover || '' }
                    name="cover"
                    onChange={ handleFormInputs } 
                    className="form-control" 
                    id="cover" 
                    placeholder="http://......" 
                />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea
                    value={ form.longDesc || '' } 
                    name="longDesc"
                    onChange={ handleFormInputs } 
                    className="form-control" 
                    id="longDesc" 
                    rows="3">
                </textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select
                    onChange={ handleSelectChange }
                    // [ IMPORTANT ]
                    // must not use name and value attributes here!!!!
                    multiple 
                    className="form-control" 
                    id="genre"
                >
                <option>drama</option>
                <option>music</option>
                <option>adventure</option>
                <option>historical</option>
                <option>action</option>
                </select>
            </div>
            <button 
                onClick={ handleSubmitForm } 
                type="submit" 
                className="btn btn-primary"
            >
                { props.buttonName ? 'Update' : 'Crreate' }
            </button>
        </form>

    );
}

export default MovieCreateForm;