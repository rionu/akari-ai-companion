import { useState, useRef, useEffect } from "react";
import "./App.css";
import { askAkari } from "./akariClient"; 

const menu = ["Explore", "Game Area", "Balance", "Akari", "Me"];

export default function App() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hanamori's cherry blossoms are painting the pavement stones again. The evening breeze carries a strange sense of peace as it passes through the old train station..."
    }
  ]);


  const [input, setInput] = useState("");

  const [isThinking, setIsThinking] = useState(false);

  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || isThinking) return; 

    const userMsg = { from: "user", text: trimmed };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsThinking(true);

    const replyText = await askAkari(trimmed);

    const botMsg = { from: "bot", text: replyText };


    setMessages(prev => [...prev, botMsg]);
    setIsThinking(false);
  }

  return (
    <div className="page">
      {/* Menu */}
      <aside className="sidebar">
        <div className="brand">Akari</div>
        <nav>
          {menu.map(item => (
            <button key={item} className="nav-item">
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Chat panel*/}
      <main className="chat">
        <header className="chat-header">
          <div>
            <div className="chat-title">Akari</div>
            <div className="chat-sub">Anime-inspired companion</div>
          </div>
          <button className="pill">New chat</button>
        </header>

        {/* Message List */}
        <section className="chat-scroll">
          <div className="bubble-list" ref={listRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`bubble ${m.from === "user" ? "user" : "bot"}`}
              >
                <p>{m.text}</p>
              </div>
            ))}

            {/* Typing */}
            {isThinking && (
              <div className="bubble bot typing">
                <p>…</p>
              </div>
            )}
          </div>
        </section>

        {/* Message Area */}
        <footer className="input-bar">
          <input
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          <button className="send" onClick={sendMessage} disabled={isThinking}>
            {isThinking ? "..." : "Send"}
          </button>
        </footer>
      </main>

      {/* Character Panel */}
      <section className="profile">
        <div className="profile-name">Akari</div>
        <div className="avatar" aria-label="avatar" />
      </section>
    </div>
  );
}
