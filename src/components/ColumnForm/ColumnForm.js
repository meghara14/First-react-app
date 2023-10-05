import { useState } from 'react';
import Button from '../Button/Button.js';
import styles from './ColumnForm.module.scss';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
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