import React from 'react';
import PropTypes from 'prop-types';

const AuthorBox = ({ author,background }) =>{

    return(
        <>
            <h2>{author}</h2>
            <hr style={{background: background}}/>
        </>
    );
}

AuthorBox.propTypes = {
    author: PropTypes.string.isRequired
}

export default AuthorBox;