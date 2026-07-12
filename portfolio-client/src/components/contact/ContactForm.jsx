import { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/contact", form);

      alert("Message Sent Successfully!");

      setForm(initialState);
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 outline-none focus:border-blue-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 outline-none focus:border-blue-500"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        required
        className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 outline-none focus:border-blue-500"
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Write your message..."
        value={form.message}
        onChange={handleChange}
        required
        className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 outline-none focus:border-blue-500"
      />

      <button
        disabled={loading}
        className="rounded-full bg-blue-600 px-8 py-4 hover:bg-blue-700 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;