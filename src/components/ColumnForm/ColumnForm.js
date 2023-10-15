import { useState } from 'react';
import Button from '../Button/Button.js';
import styles from './ColumnForm.module.scss';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer.js';

const ColumnForm = props => {
    const dispatch = useDispatch();
  
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const listId = props.listId;
  
    const handleSubmit = e => {
      e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    }
  
  
    return (
      <form className={styles.columnForm} onSubmit={handleSubmit}>
        Title: <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
        Icon: <input type="text" value={icon} onChange={event => setIcon(event.target.value)} />
        <Button>Add Column</Button>
      </form>
    );
  };
  
  export default ColumnForm;