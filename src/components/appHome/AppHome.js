import { Component } from 'react';
import './appHome.scss';
import Table from '../table/Table';
import words from '../../resources/data/words.json';

class AppHome extends Component {

    constructor(props){
        super(props);
        this.state = {
            words: [
                {
                    "id": "1",
                    "english": "carrot",
                    "transcription": "[ ˈkærət ]",
                    "russian": "морковь",
                    "tags": "овощи",
                    "isEdit": false
                },
                {
                    "id": "2",
                    "english": "buttefly",
                    "transcription": "[ ˈbʌtəflaɪ ]",
                    "russian": "бабочка",
                    "tags": "насекомые",
                    "isEdit": false
                },
                {
                    "id": "3",
                    "english": "street",
                    "transcription": "[ stri:t ]",
                    "russian": "улица",
                    "tags": "город",
                    "isEdit": false
                },
                {
                    "id": "4",
                    "english": "car",
                    "transcription": "[ kɑ: ]",
                    "russian": "автомобиль",
                    "tags": "транспорт",
                    "isEdit": false
                },
                {
                    "id": "5",
                    "english": "arm",
                    "transcription": "[ ɑ:m ]",
                    "russian": "рука",
                    "tags": "тело",
                    "isEdit": false
                },
                {
                    "id": "6",
                    "english": "air",
                    "transcription": "[  eər ]",
                    "russian": "воздух",
                    "tags": "природа",
                    "isEdit": false
                },
                {
                    "id": "7",
                    "english": "fox",
                    "transcription": "[ fɒks ]",
                    "russian": "лиса",
                    "tags": "животные",
                    "isEdit": false
                },
                {
                    "id": "8",
                    "english": "rabbit",
                    "transcription": "[ ˈræbɪt ]",
                    "russian": "кролик",
                    "tags": "животные",
                    "isEdit": false
                },
                {
                    "id": "9",
                    "english": "owl",
                    "transcription": "[ aʊl ]",
                    "russian": "сова",
                    "tags": "птицы",
                    "isEdit": false
                },
                {
                    "id": "10",
                    "english": "mouse",
                    "transcription": "[ maʊs]",
                    "russian": "мышь",
                    "tags": "животные",
                    "isEdit": false
                },
                {
                    "id": "11",
                    "english": "tea",
                    "transcription": "[ tiː ]",
                    "russian": "чай",
                    "tags": "напитки",
                    "isEdit": false
                },
                {
                    "id": "12",
                    "english": "goose",
                    "transcription": "[ ɡuːs ]",
                    "russian": "гусь",
                    "tags": "птицы",
                    "isEdit": false
                },
                {
                    "id": "13",
                    "english": "flower",
                    "transcription": "[ ˈflaʊər ]",
                    "russian": "цветок",
                    "tags": "растения",
                    "isEdit": false
                },
                {
                    "id": "14",
                    "english": "bird",
                    "transcription": "[ be:d ]",
                    "russian": "птица",
                    "tags": "птицы",
                    "isEdit": true
                },
                {
                    "id": "15",
                    "english": "cat",
                    "transcription": "[ kæt ]",
                    "russian": "кот",
                    "tags": "животные",
                    "isEdit": false
                }
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({words}) => {
            return {
                words: words.filter(word => word.id !== id)
            }
        })
    }

    render() {
        return (
            <div className="app__home">
                <Table
                    words={this.state.words}
                    onDelete={this.deleteItem}/>
            </div>
        )
    }
}

export default AppHome;
