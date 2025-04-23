"use client";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    rollNumber: "",
    branch: "",
    email: "",
    idea: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/submit-idea", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
      setForm({
        name: "",
        rollNumber: "",
        branch: "",
        email: "",
        idea: "",
      });
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}
        >
          💡 Smart Innovation Box
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="rollNumber"
            placeholder="Roll Number"
            value={form.rollNumber}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="branch"
            placeholder="Branch"
            value={form.branch}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="idea"
            placeholder="Your Idea"
            value={form.idea}
            onChange={handleChange}
            required
            style={{ ...inputStyle, height: "100px", resize: "none" }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#45a049")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4CAF50")
            }
          >
            Submit Idea
          </button>
        </form>
        {submitted && (
          <p style={{ color: "green", marginTop: "15px", textAlign: "center" }}>
            ✅ Idea submitted successfully!
          </p>
        )}
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "16px",
  outline: "none",
  backgroundColor: "#f9f9f9",
};
