import styles from './ForegroundContent.module.css';

const ForegroundComponet = () => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Edson Raul Cepeda Marquez</h1>
                <h2>Machine Learning Engineer</h2>
            </div>
        </div>
    );   
}

export default ForegroundComponet;