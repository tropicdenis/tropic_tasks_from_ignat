import React from 'react'
import style from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (

        <div className={style.message}>
            <div><img className={style.ava} alt="avatar" src={props.avatar}/></div>
            <div className={style.triangle}></div>
            <div className={style.window}>
                <div className={style.name}>
                    {props.name}
                </div>
                <div className={style.mess}>{props.message}</div>
                <div className={style.time}>{props.time}</div>

            </div>
        </div>
    )
}

export default Message
