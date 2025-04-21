import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <h5>Connect with me or reach me via email: </h5>
        <div>
          <a
            href="https://www.linkedin.com/in/francesca-lorthe-/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem" }}
          >
            LinkedIn
          </a>
        </div>
        {" Francescalorthe@gmail.com "}
      </div>
    </section>
  );
};

export default Contact;
