import {useState, useContext} from "react";
//import WordsContext from "../../context/wordsContext";
import { WordsContext } from "../../context/WordsContext";

const Row = (props) => {

  const context = useContext(WordsContext);

  const [state, setState] = useState(props);
  const [isEdit, setEdit] = useState(false);

  const {id, english, transcription, russian, tags} = state;

  const onEdit = () => {
    setEdit(!isEdit);
  }

  const handleChange = (e) => {
    e.stopPropagation();
    setState({
      ...state,
      [e.target.dataset.name]: e.target.value.trim().toLowerCase(),
    });
  };

  const onSave = (e) => {
    if (english ===''|| transcription==='' || russian==='' || tags==='') return;

    setEdit(!isEdit);

    console.log(`
    id: ${state.id},
    english: ${state.english},
    transcription: ${state.transcription},
    russian: ${state.russian},
    collection: ${state.tags}`);
  };

  const onCancel = () => {
    setEdit(!isEdit);
    setState({
      ...props,
    });
  }

  let classNames ='table__row';
  let inputClassNames ='input_edit';
  let saveIconClassNames = 'fas fa-check icon icon__save';

  if(isEdit){
    classNames += ' row_edit';
  }

  if(english ===''|| transcription==='' || russian==='' || tags===''){
    saveIconClassNames += ' icon__disabled';
  }

  return (
    <tr className={classNames}>
      {isEdit ?
        <>
          <td>
            {id}
          </td>
          <td>
            <input
              type="text"
              className={english==="" ? inputClassNames + ' input_error' : inputClassNames}
              data-name={"english"}
              defaultValue={props.english}
              onChange={handleChange}/>
            {english==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={transcription==="" ? inputClassNames + ' input_error' : inputClassNames}
              data-name={"transcription"}
              defaultValue={props.transcription}
              onChange={handleChange}/>
            {transcription==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={russian==="" ? inputClassNames + ' input_error' : inputClassNames}
              data-name={"russian"}
              defaultValue={props.russian}
              onChange={handleChange}/>
            {russian==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={tags==="" ? inputClassNames + ' input_error' : inputClassNames}
              data-name={"tags"}
              defaultValue={props.tags}
              onChange={handleChange}/>
            {tags==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
              <i className={saveIconClassNames} onClick={onSave}> </i>
              <i className="fas fa-ban icon icon__cancel" onClick = {onCancel}></i>
          </td>
        </>
        :
        <>
          <td>{props.id}</td>
          <td>{props.english}</td>
          <td>{props.transcription}</td>
          <td>{props.russian}</td>
          <td>{props.tags}</td>
          <td>
              <i className="fas fa-pen icon icon__edit" onClick = {onEdit}> </i>
              <i className="fas fa-trash icon icon__delete" onClick = {props.onDelete}></i>
          </td>
        </>
      }
    </tr>
  )
}

export default Row;

//  const [errors, setErrors] = useState({});
//  const checkValidation = () => {
//    const newErrors = Object.keys(state).reduce((errorsList, item) => {
//      switch (item) {
//        case 'id':
//        case 'english':
//        case 'transcription':
//        case 'russian':
//        case 'tags':
//          errorsList = {
//            ...errorsList,
//            [item]: state[item].trim().length > 0 ? undefined : 'Пустое поле',
//          };
//      }
//      return errorsList;
//    }, {});
//    setErrors(newErrors);
//  };