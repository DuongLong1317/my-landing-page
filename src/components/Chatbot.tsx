"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_CHIPS = ["Xem menu 🍣", "Giá cả 💰", "Đặt hàng 📦", "Liên hệ 📞"];

const CHATBOT_CSS = `
  @keyframes chatbot-pop-in {
    0%   { opacity: 0; transform: scale(0.82) translateY(10px); }
    70%  { transform: scale(1.04) translateY(-2px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes chatbot-bounce-dot {
    0%, 80%, 100% { transform: translateY(0); }
    40%           { transform: translateY(-6px); }
  }
  .chatbot-bubble-in { animation: chatbot-pop-in 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
  .chatbot-dot { width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; display: inline-block; animation: chatbot-bounce-dot 1.2s infinite ease-in-out; }
  .chatbot-dot:nth-child(2) { animation-delay: 0.15s; }
  .chatbot-dot:nth-child(3) { animation-delay: 0.3s; }
  .chatbot-scroll::-webkit-scrollbar { width: 4px; }
  .chatbot-scroll::-webkit-scrollbar-track { background: transparent; }
  .chatbot-scroll::-webkit-scrollbar-thumb { background: #fde68a; border-radius: 4px; }
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: "Xin chào mẹ! 🥰 Mình là KidFoodie Assistant 🍱\nMẹ cần tư vấn món ăn gì cho bé hôm nay ạ? 🍣✨" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (document.getElementById("chatbot-css")) return;
    const style = document.createElement("style");
    style.id = "chatbot-css";
    style.textContent = CHATBOT_CSS;
    document.head.appendChild(style);
  }, []);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 300); }, [isOpen]);

  const sendMessage = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    const userMsg: Message = { role: "user", content };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: history }) });
      const data = await res.json();
      setMessages([...history, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...history, { role: "assistant", content: "Ôi, mình đang bận tí xíu mẹ ơi 🥺 Thử lại sau nhé! 💛" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button id="chatbot-toggle" onClick={() => setIsOpen((v) => !v)} aria-label="Mở chatbot tư vấn"
        style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999, width: "60px", height: "60px", borderRadius: "50%", border: "none", cursor: "pointer", background: "linear-gradient(135deg, #f59e0b 0%, #65a30d 100%)", boxShadow: "0 8px 32px rgba(245,158,11,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", transition: "transform 0.2s" }}>
        {isOpen ? "✕" : "🍣"}
      </button>

      <div style={{ position: "fixed", bottom: "96px", right: "24px", zIndex: 9998, width: "360px", maxWidth: "calc(100vw - 32px)", maxHeight: "72vh", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 24px 60px rgba(0,0,0,0.18)", transition: "opacity 0.3s, transform 0.3s", opacity: isOpen ? 1 : 0, transform: isOpen ? "translateY(0)" : "translateY(20px)", pointerEvents: isOpen ? "auto" : "none" }}>
        <div style={{ background: "linear-gradient(135deg, #f59e0b 0%, #84cc16 100%)", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>🍱</div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, color: "#fff", fontWeight: 800, fontSize: "15px" }}>KidFoodie Assistant</p>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>Luôn sẵn sàng tư vấn mẹ 💛</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#86efac", display: "inline-block" }} />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", fontWeight: 600 }}>Online</span>
          </div>
        </div>

        <div className="chatbot-scroll" style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", background: "linear-gradient(180deg, #fffbeb 0%, #f0fdf4 100%)" }}>
          {messages.map((msg, i) => <ChatBubble key={i} msg={msg} />)}
          {loading && (
            <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f59e0b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>🍱</div>
              <div style={{ background: "#fff", border: "1.5px solid #fde68a", borderRadius: "18px 18px 18px 4px", padding: "10px 14px", display: "flex", gap: "5px", alignItems: "center" }}>
                <span className="chatbot-dot" /><span className="chatbot-dot" /><span className="chatbot-dot" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div style={{ padding: "8px 14px", display: "flex", gap: "8px", overflowX: "auto", background: "#fffbeb", borderTop: "1px solid #fde68a", flexShrink: 0 }}>
          {QUICK_CHIPS.map((chip) => (<button key={chip} onClick={() => sendMessage(chip)} style={{ flexShrink: 0, fontSize: "11px", fontWeight: 700, padding: "5px 12px", borderRadius: "999px", border: "2px solid #f59e0b", background: "#fff", color: "#b45309", cursor: "pointer", whiteSpace: "nowrap" }}>{chip}</button>))}
        </div>

        <div style={{ padding: "10px 12px", display: "flex", gap: "8px", alignItems: "center", background: "#fff", borderTop: "1px solid #fde68a", flexShrink: 0 }}>
          <input ref={inputRef} id="chatbot-input" type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()} placeholder="Mẹ hỏi gì đi ạ... 💛" disabled={loading}
            style={{ flex: 1, padding: "10px 16px", borderRadius: "999px", border: "2px solid #fde68a", background: "#fffbeb", color: "#78350f", fontSize: "13px", fontWeight: 500, outline: "none" }} />
          <button onClick={() => sendMessage()} disabled={loading || !input.trim()} aria-label="Gửi"
            style={{ width: "40px", height: "40px", borderRadius: "50%", border: "none", cursor: loading || !input.trim() ? "not-allowed" : "pointer", background: loading || !input.trim() ? "#d1d5db" : "linear-gradient(135deg, #f59e0b 0%, #84cc16 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "18px", height: "18px", color: "#fff" }} viewBox="0 0 24 24" fill="currentColor"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>
          </button>
        </div>
      </div>
    </>
  );
}

function ChatBubble({ msg }: { msg: Message }) {
  const isBot = msg.role === "assistant";
  return (
    <div className="chatbot-bubble-in" style={{ display: "flex", alignItems: "flex-end", gap: "8px", justifyContent: isBot ? "flex-start" : "flex-end" }}>
      {isBot && <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f59e0b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>🍱</div>}
      <div style={{ maxWidth: "78%", padding: "10px 14px", borderRadius: isBot ? "18px 18px 18px 4px" : "18px 18px 4px 18px", fontSize: "13px", fontWeight: 500, lineHeight: "1.55", whiteSpace: "pre-wrap", wordBreak: "break-word", ...(isBot ? { background: "#ffffff", border: "1.5px solid #fde68a", color: "#78350f" } : { background: "linear-gradient(135deg, #f59e0b 0%, #84cc16 100%)", color: "#ffffff" }) }}>{msg.content}</div>
      {!isBot && <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#86efac", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>👩</div>}
    </div>
  );
}
