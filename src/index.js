import ReactDOM from 'react-dom';
import FrontPage from "./frontPage";
import FlashcardPage from './flashcardPage';

function App() {
    return (
        <>
            <FrontPage/>
            <FlashcardPage/>
        </>)
}

ReactDOM.render(<App/>,document.querySelector(".root"));