import { useState } from "react"

export const Chat = () => {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className="chat">
            <a href="skype:sayeedkhan1447?chat" target="_blank">
                <i className={isHover ? 'bi-chat-dots-fill' : 'bi-chat-dots'}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                ></i>
            </a>
        </div>
    )
}