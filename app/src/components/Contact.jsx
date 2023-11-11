import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process formData or perform other actions related to form submission
    // To be implemented...
    console.log("Form submitted with data:", { name, email, message });
  };

  return (
    <section id="contact">
      <div className="container mx-auto max-w-md px-4 pt-5">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          {" "}
          Contact us
        </h2>

        <form
          className="flex flex-col w-full items-center"
          onSubmit={handleSubmit}
          id="contactForm"
        >
          <label className="mb-2 font-medium text-left text-white sm:pt-4 sm:text-sm sm:w-2/3 md:w-full">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-md border border-gray-300 px-2 py-2 sm:w-2/3 md:w-full"
          />

          <label className="mt-2 mb-1 font-medium text-left text-white sm:text-sm sm:w-2/3 md:w-full">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="md:w-full rounded-md border border-gray-300 sm:w-2/3 px-2 py-2"
          />

          <label className="mt-2 mb-1 font-medium text-left text-white sm:text-sm sm:w-2/3 md:w-full">
            Message
          </label>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="rounded-md border border-gray-300 px-2 py-2 resize-none sm:w-2/3 md:w-full"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md sm:w-1/5 sm:text-l"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
