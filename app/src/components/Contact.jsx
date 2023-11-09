import { useState } from "react";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    console.log(formData);
  };

  return (
    <div className="container mx-auto max-w-md px-4 pt-5">
      <h1 className="text-sm text-white font-bold tracking-tight sm:text-2xl pb-4 pt-4 text-center">
        Contact Us
      </h1>

      <form className="flex flex-col w-full">
        <label className="mb-2 font-medium text-left text-white sm:text-l sm:w-1/2 md:w-full">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="sm:w-1/2 rounded-md border border-gray-300 px-2 py-2 md:w-full"
        />

        <label className="mt-2 mb-2 font-medium text-left text-white sm:text-l sm:w-1/2 md:w-full">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="md:w-full rounded-md border border-gray-300 px-2 py-2 sm:w-1/2"
        />

        <label className="mt-2 mb-2 text-left font-medium sm:text-l text-white">
          Message
        </label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="sm:w-1/2 rounded-md border border-gray-300 px-2 py-2 resize-none md:w-full"
          rows={5}
        ></textarea>

        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md sm:text-l"
        >
          Send
        </button>
      </form>
    </div>
  );
}
