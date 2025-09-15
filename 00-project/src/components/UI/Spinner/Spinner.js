import styles from './Spinner.module.css';

const Spinner = (props) => {
    return (
        <div style={{display: 'block', margin: '0 auto', width: '45px'}}>
            <div className={styles.Spinner}></div>
        </div>
    );
}

export default Spinner;