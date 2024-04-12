import domReady from "@wordpress/dom-ready"
import { render } from  '@wordpress/element'
import { useState, useRef, useEffect } from '@wordpress/element';
import apiFetch from "@wordpress/api-fetch";
import './editor.scss';

const App = () => {
    const [newQuestion, setNewQuestion] = useState("");
	const [chatLog, setChatLog] = useState(["Enter your questions here"]);
	const [gettingResponse, setGettingResponse] = useState(false);
	const logContainerRef = useRef(null);
	const inputRef = useRef(null);
	const [chatopen, setChatopen] = useState(false);

    const toggle = (e) => {
        setChatopen(!chatopen);
        if (window.innerWidth <= 430 && chatopen) {

        }
        };
    
    useEffect(() => {
        logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }, [chatLog]);

    const sendMessage = (data) => {
        return new Promise((resolve, reject) => {
            apiFetch( {
                path: 'v1/chat',
                method: 'POST',
                data: data,
            }).then((res) => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });            
        });
    };


    function constructMessages(messages) {
        const roles = ['assistant', 'user'];
        let constructedMessages = [];
    
        for (let i = 0; i < messages.length; i++) {
            const index = i % 2;
            const message = messages[i];
    
            const constructedMessage = {
                role: roles[index],
                content: message
            };
    
            constructedMessages.push(constructedMessage);
        }
    
        return constructedMessages;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        setGettingResponse(true);
        inputRef.current.value = '';
        const data = {
            sourceId: "cha_" + chatpdf_chatbot_settings.api_key,
            };
        let lastSixMessages = chatLog.slice(-5);
        data.messages = constructMessages([...lastSixMessages, newQuestion]);
        setChatLog(prevLog => [...prevLog, newQuestion]);
        sendMessage(data)
        .then((result) => {
            if(result.content) setChatLog(prevLog => [...prevLog, result.content]);
            else if(result.error) setChatLog(prevLog => [...prevLog, result.error]);
            else {
                console.error("Error:", error);
                setChatLog(prevLog => [...prevLog, "Error getting response"]);
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            setChatLog(prevLog => [...prevLog, "Error getting response"]);
        })
        .finally(() => {
            setGettingResponse(false);
        })
        // setGettingResponse(false); //useful for testing, after commenting out above block
        };
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey && !gettingResponse && inputRef.current.value) {
        handleSubmit(event);
        }
    };

    return (
        <div id="chatCon">
			<div className={`chat-box ${chatopen ? 'visible' : 'hidden'}`}>
				<div class="header">Chatbot
                <i onClick={toggle} className="fa fa-times fa-lg chatbot-toggler-mobile"></i>
                </div>
				<div class="msg-area" ref={logContainerRef}>
				{chatLog.map((msg, i) =>
					i % 2 ? (
					<p className='usrmsg'>
						<span className="userspan">{msg}</span>
					</p>
					) : (
					<p>
						<span>{msg}</span>
					</p>
					)
				)}
				</div>
				<div class="footer">
                    <textarea 
                    placeholder="Send your message here..."
                    onKeyDown={handleKeyDown}
					onChange={(e) => setNewQuestion(e.target.value)}
                    rows={1}
                    ref={inputRef} 
                    className="chatinput" />
					<button
					disabled={gettingResponse}
					onClick={handleSubmit}>
						<i class="fa fa-paper-plane"></i>
					</button>
				</div>
			</div>
			<div onClick={toggle} class="pop">
                {chatopen ? (
                    <i className="fa fa-times fa-lg chatbot-toggler"></i> // Close icon
                ) : (
                    <i className="fa fa-comment fa-lg chatbot-toggler"></i> // Chat icon
                )}
			</div>
		</div>
    );
};
domReady(function () {
    const container = document.querySelector('#app');
    render(<App />, container);
})
