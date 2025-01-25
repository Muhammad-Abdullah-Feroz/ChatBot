import React, { useState, useRef, useEffect } from 'react'

import Icon from "../assets/send.png"
import Header from './Header'

const Chat = () => {

    // const [request, setRequest] = useState({ "role": "user", "content": "" })
    // const [response, setResponse] = useState({ "role": "assisstant", "content": "" })

    const [message, setMessage] = useState("")
    const [chat, setChat] = useState([])
    const chatEndRef = useRef(null)

    useEffect(() => {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }, [chat])
    

    const getResponse = async (request) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const res = request.content.toUpperCase()
                const response = { "role": "assisstant", "content": res }
                setChat((prevChat) => [...prevChat, response])
                resolve(response)
            }, 1000)
        })
    }

    const submmitRequest = async () => {
        if (message.trim() === "") return

        const newReuest = { "role": "user", "content": message }
        setMessage("")

        setChat((prevChat) => [...prevChat, newReuest])
        // setRequest(newReuest)
        await getResponse(newReuest)
    }

    const displayChat = () => {
        return chat.map((msg, index) => {
            return (
                <div key={index} >
                    <div className={`flex flex-col justify-start box-border w-full ${msg.role === "user" ? "items-end " : "items-start"}`}>
                        <div className={`message rounded-br-3xl rounded-bl-3xl ${msg.role === "user" ? "bg-blue-400 text-white animate-slideInRight rounded-tl-3xl" : "bg-gray-200 text-black animate-slideInLeft rounded-tr-3xl"}  max-w-[80%] box-border p-4 m-2 drop-shadow-xl shadow-lg shadow-black/20`}>
                            {msg.content}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <div className='flex flex-col bg-gray-100 h-full w-full' >
                <Header/>
                <div className="chatArea flex justify-center bg-gray-100 w-full h-[90%] overflow-scroll overflow-x-hidden">
                    <div className='w-full max-w-4xl h-full'>
                        {displayChat()}
                        <div ref={chatEndRef}></div>
                    </div>
                </div>
                <div className="chatInput flex items-center justify-center w-full h-[15%]">
                    <div className="relative input rounded-3xl bg-white w-full m-3 h-[45%] max-w-3xl shadow-xl shadow-gray-500/50 my-4">
                        <input
                            // text = {message}
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    submmitRequest()
                                }
                            }}
                            type="text"
                            placeholder="Enter your message here"
                            aria-label="Chat input"
                            className="h-full w-full rounded-3xl p-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-black"
                        />
                        <div className="send absolute hover:w-10 hover:transition-all top-1 right-2 rounded-full h-9 w-9 ">
                            <img src={Icon} alt="" className='h-full w-full hover:cursor-pointer ' onClick={() => {submmitRequest() }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
