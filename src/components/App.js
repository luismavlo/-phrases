import { useState } from 'react';
import quotes from '../quotes.json';
import AuthorBox from './AuthorBox';
import QuoteBox from './QuoteBox';

let colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871'];

const App = () =>{
    
    const [next, setNext] = useState((Math.random() * (99 - 0) + 0).toFixed(0));

    
    const [background, setBackground] = useState((Math.random() * (5 - 0) + 0).toFixed(0));


    const handleNext = () =>{
        setNext((Math.random() * (99 - 0) + 0).toFixed(0));
        setBackground(colors[(Math.random() * (5 - 0) + 0).toFixed(0)]);
    } 
    

    return (
        <div className="container center" style={{background}}>
            <div className='card'>
                <AuthorBox author={quotes[next].author} background={background}/>
                <QuoteBox quote={quotes[next].quote}/>
                <button onClick={handleNext} style={{background}}>Next</button>
            </div>
        </div>
    );
}

export default App;