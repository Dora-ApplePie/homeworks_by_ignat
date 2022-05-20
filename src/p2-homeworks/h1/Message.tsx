import React from 'react'
import styles from "./Message.module.css"

type MessageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageDataPropsType) {
    return (
        <div className={styles.blockMessage}>
            <img className={styles.girlIcon}
                 alt={"icon"}
                 src={props.avatar}/>
            <div className={styles.angle}/>
            <div className={styles.bodyMessage}>
                <h3 className={styles.nameMessage}>{props.name}</h3>
                <div className={styles.container}><p className={styles.textMessage}>{props.message}</p>
                    <span className={styles.timeMessage}>{props.time}</span></div>

            </div>
        </div>
    )
}


export default Message
