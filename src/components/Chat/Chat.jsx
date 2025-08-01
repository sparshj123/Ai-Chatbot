import styles from './Chat.module.css';

export default function Chat({messages}) {
    return (
    <div className={styles.Chat}>
        {messages.map(({role,content}, index) => (
            <div className={styles.Message} key={index} data-role={role}>
                {content}
            </div>
        ))}
    </div>)
}
