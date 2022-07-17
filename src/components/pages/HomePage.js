import { useContext } from 'react';

import { WordsContext } from '../../context/wordsContext';
import Table from '../table/Table';
import Spinner from '../spinner/Spinner';
import NowordsMessage from '../errors/NowordsMessage';
import AddForm from '../addForm/AddForm';

import '../App/App.scss';


const HomePage = () => {

    const {loading, errors} = useContext(WordsContext);

    const spinner = loading ? <Spinner/> : null;
    const error = errors ? <NowordsMessage/> : null;
    const content = !(loading || errors) ? <Table/> : null;

    return (
        <div className="app__home">
            {error}
            {spinner}
            {content}
            <AddForm/>
        </div>
    )
}

export default HomePage;

