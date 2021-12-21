import PropTypes from 'prop-types';

const QuoteBox = ({ quote }) => {

    return (
            <>
                <p> " {quote} " </p>
            </>
    );
}

QuoteBox.propTypes = {
    quote: PropTypes.string.isRequired
}

export default QuoteBox