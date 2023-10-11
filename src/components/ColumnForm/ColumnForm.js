import { useState } from 'react';
import Button from '../Button/Button.js';
import styles from './ColumnForm.module.scss';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store.js';

const ColumnForm = () => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        setTitle('');
        setIcon('');
     };
    return (
        <form onSubmit={handleSubmit}>
            <label className={styles.labelStyle}>Title</label><input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.labelStyle}>Icon</label><input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;