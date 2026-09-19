"use client";

import { sendMail } from "@/action/contact";
import { useFetch } from "@/hooks/useFetch";
import { contactSchema } from "@/models/contact";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const ConnectForm = () => {
  const {
    fn: sendiMailFn,
    loading: sending,
    error: mailError,
    data: mailData,
  } = useFetch(sendMail);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  const onsubmit = async (data: z.infer<typeof contactSchema>) => {
    if (sending) return;

    await sendiMailFn(data);
    reset();
  };

  useEffect(() => {
    if (mailData?.status) {
      toast.success(mailData.message);
    }
    if (!mailData?.status && mailData?.message) {
      toast.error(mailData.message);
    }
    if (mailError) {
      toast.error("Something went wrong. Please try again.");
    }
  }, [mailData, mailError]);

  return (
    <div
      className="connect-block rounded-md border border-white/20
        bg-[#0E1C20]/90 p-5 text-white backdrop-blur-md
      "
    >
      <p className="mb-8 text-sm">Fill in our form:</p>

      <form className="flex flex-col" onSubmit={handleSubmit(onsubmit)}>
        {/* Name */}
        <label htmlFor="connect-name" className="sr-only">
          Name
        </label>

        <input
          id="connect-name"
          type="text"
          placeholder="Name"
          autoComplete="name"
          {...register("name")}
          disabled={sending}
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

        <p className="min-h-[1.25rem] px-3 pt-1 text-xs text-red-400">
          {errors.name?.message}
        </p>

        {/* Email */}
        <label htmlFor="connect-email" className="sr-only">
          Email address
        </label>

        <input
          id="connect-email"
          type="email"
          placeholder="Email address"
          autoComplete="email"
          {...register("email")}
          disabled={sending}
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

        <p className="min-h-[1.25rem] px-3 pt-1 text-xs text-red-400">
          {errors.email?.message}
        </p>

        {/* Subject */}
        <label htmlFor="connect-subject" className="sr-only">
          Subject
        </label>

        <input
          id="connect-subject"
          type="text"
          placeholder="Subject"
          {...register("subject")}
          disabled={sending}
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

        <p className="min-h-[1.25rem] px-3 pt-1 text-xs text-red-400">
          {errors.subject?.message}
        </p>

        {/* Message */}
        <label htmlFor="connect-message" className="sr-only">
          Your message
        </label>

        <textarea
          id="connect-message"
          placeholder="Your message"
          rows={4}
          {...register("message")}
          disabled={sending}
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

        <p className="min-h-[1.25rem] px-3 pt-1 text-xs text-red-400">
          {errors.message?.message}
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={sending}
          className="
            mt-7 flex min-w-[140px]
            cursor-pointer
            items-center
            justify-center
            gap-2
            rounded-md
            bg-orange-500
            px-7 py-4
            text-sm
            font-bold
            uppercase
            tracking-wide
            text-white
            transition-all
            hover:bg-orange-600
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {sending ? (
            <>
              <Spinner className="size-4" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ConnectForm;