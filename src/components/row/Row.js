import {useState, useContext} from "react";
import classnames from 'classnames';

import { WordsContext } from "../../context/wordsContext";
import { SelectContext } from "../../context/selectContext";

const Row = (props) => {

  const [state, setState] = useState(props);
  const [isEdit, setEdit] = useState(false);
  const {setModalActive} = useContext(SelectContext);
  const { confirmDelete } = useContext(SelectContext);

  const { editWords } = useContext(WordsContext);
  const { setTerm } = useContext(SelectContext);
  //const { deleteWords } = useContext(WordsContext);
  const {id, english, transcription, russian, tags} = state;

  const onEdit = () => {
    setEdit(!isEdit);
  }

  const handleChange = (e) => {
    e.stopPropagation();
    setState({
      ...state,
      [e.target.dataset.name]: e.target.value.toLowerCase(),
    });
  };

  const onSave = (e) => {
    if (english ===''|| transcription==='' || russian==='' || tags==='') return;
    setEdit(!isEdit);
    setTerm('');
    editWords(state);
  };

  const onCancel = () => {
    setEdit(!isEdit);
    setState({
      ...props,
    });
  }

  const onDelete = () => {
    //setModalActive(true);
    //setTerm('');
    props.onDelete(props.id);
    //строчка ниже не нужна
    //deleteWords(state);
  };




  const saveIconClasses = classnames({
    'fas fa-check icon icon__save': true,
    'icon__disabled': english ===''|| transcription==='' || russian==='' || tags===''
  });

  return (
    <tr className={classnames('table__row', {row_edit: isEdit})}>
      {isEdit ?
        <>
          <td>
            {id}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: english===""})}
              data-name={"english"}
              defaultValue={english}
              onChange={handleChange}/>
            {english==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: transcription===""})}
              data-name={"transcription"}
              defaultValue={transcription}
              onChange={handleChange}/>
            {transcription==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: russian===""})}
              data-name={"russian"}
              defaultValue={russian}
              onChange={handleChange}/>
            {russian==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
            <input
              type="text"
              className={classnames('input_edit', {input_error: tags===""})}
              data-name={"tags"}
              defaultValue={tags}
              onChange={handleChange}/>
            {tags==="" && <label>Поле не заполнено</label>}
          </td>
          <td>
              <i className={saveIconClasses} onClick={onSave}> </i>
              <i className="fas fa-ban icon icon__cancel" onClick = {onCancel}></i>
          </td>
        </>
        :
        <>
          <td>{id}</td>
          <td>{english}</td>
          <td>{transcription}</td>
          <td>{russian}</td>
          <td>{tags}</td>
          <td>
              <i className="fas fa-pen icon icon__edit" onClick = {onEdit}> </i>
              <i className="fas fa-trash icon icon__delete" onClick = {()=>{setModalActive(true); onDelete()}} ></i>
          </td>
        </>
      }
    </tr>
  )
}

export default Row;
