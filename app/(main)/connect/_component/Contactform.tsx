"use client";

import { FormEvent, useState } from "react";

const ConnectForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="
        connect-block
        rounded-md
        border border-white/20
        bg-[#0E1C20]/90
        p-5
        text-white
        backdrop-blur-md
      "
    >
      <p className="mb-8 text-sm">Fill in our form:</p>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="connect-name" className="sr-only">
          Name
        </label>

        <input
          id="connect-name"
          name="name"
          type="text"
          placeholder="Name"
          required
          disabled={isSubmitting}
          className="
            border-b border-white/30
            bg-transparent
            px-3 py-5
            text-white
            outline-none
            placeholder:text-white/40
            focus:border-white
            disabled:opacity-50
          "
        />

        <label htmlFor="connect-email" className="sr-only">
          Email address
        </label>

        <input
          id="connect-email"
          name="email"
          type="email"
          placeholder="Email address"
          required
          disabled={isSubmitting}
          className="
            border-b border-white/30
            bg-transparent
            px-3 py-5
            text-white
            outline-none
            placeholder:text-white/40
            focus:border-white
            disabled:opacity-50
          "
        />

        <label htmlFor="connect-subject" className="sr-only">
          Subject
        </label>

        <input
          id="connect-subject"
          name="subject"
          type="text"
          placeholder="Subject"
          required
          disabled={isSubmitting}
          className="
            border-b border-white/30
            bg-transparent
            px-3 py-5
            text-white
            outline-none
            placeholder:text-white/40
            focus:border-white
            disabled:opacity-50
          "
        />

        <label htmlFor="connect-message" className="sr-only">
          Your message
        </label>

        <textarea
          id="connect-message"
          name="message"
          placeholder="Your message"
          rows={4}
          required
          disabled={isSubmitting}
          className="
            resize-none
            border-b border-white/30
            bg-transparent
            px-3 py-5
            text-white
            outline-none
            placeholder:text-white/40
            focus:border-white
            disabled:opacity-50
          "
        />

        {status.type && (
          <p
            role="status"
            className={`mt-5 text-sm ${
              status.type === "success"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            mt-7 w-fit cursor-pointer
            rounded-md
            bg-orange-500
            px-7 py-4
            text-sm
            uppercase
            tracking-wide
            text-white
            transition-all
            hover:scale-105
            disabled:cursor-not-allowed
            disabled:opacity-60
            disabled:hover:scale-100
          "
        >
          {isSubmitting ? "Sending..." : "Submit message"}
        </button>
      </form>
    </div>
  );
};

export default ConnectForm;