import styles from './TextInput.module.scss';

const TextInput = (props) => {
    return <input type="text" className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
};

export default TextInput;