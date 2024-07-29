// components/Chat.js
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { getSession, useSession } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Chat = () => {
  const { data: session } = useSession();
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io();
    setSocket(socket);

    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = async () => {
    if (message.trim() && socket) {
      const session = await getSession();
      const msg = {
        text: message,
        sender: session?.user?.name || "Anonymous",
        image: session?.user?.image || "",
      };
      socket.emit("message", msg);
      setMessage("");
    }
  };

  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg bg-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Chat Room
          </h2>
          <div className="h-64 overflow-y-scroll mb-4 p-2 border rounded-lg bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="p-2 my-2 bg-blue-100 rounded-md flex items-center"
              >
                {msg.image && (
                  <img
                    src={msg.image}
                    alt={msg.sender}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <strong className="mr-2">{msg.sender}:</strong>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Chat;
