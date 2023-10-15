import styles from './ListForm.module.scss';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = props => {
    const dispatch = useDispatch();
  
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
    }
  
    return (
      <form onSubmit={handleSubmit} className={styles.listForm}>
        <label>Title: </label><TextInput value={title} onChange={e => setTitle(e.target.value)} />
        <label>Description: </label><TextInput value={description} onChange={e => setDescription(e.target.value)} />
        <Button>Add List</Button>
      </form>
  )};

export default ListForm;
