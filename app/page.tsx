"use client";
import { useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I’m your helper." }
  ]);
  const [input, setInput] = useState("");

  function send() {
    const text = input.trim();
    if (!text) return;

    setMessages(m => [...m, { role: "user", text }]);

    let reply = "I can help with that.";
    const lower = text.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi"))
      reply = "Hello! What do you need help with?";
    if (lower.includes("vercel"))
      reply = "You’re running on Vercel ✅";

    setMessages(m => [...m, { role: "bot", text: reply }]);
    setInput("");
  }

  return (
    <main style={{ maxWidth: 700, margin: "40px auto", fontFamily: "system-ui" }}>
      <h1>Helper</h1>

      <div style={{ border: "1px solid #ddd", padding: 12, height: 420, overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: "8px 0" }}>
            <b>{m.role}:</b> {m.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", marginTop: 10 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          style={{ flex: 1, padding: 8 }}
          placeholder="Ask something..."
        />
        <button onClick={send} style={{ padding: "8px 12px" }}>
          Send
        </button>
      </div>
    </main>
  );
}
