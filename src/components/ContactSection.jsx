import { useState } from "react";
import emailjs from "@emailjs/browser";
import { personal, socials, socialIcons } from "../data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please fill in your name";
    }
    if (!formData.email.trim()) {
      errs.email = "Please fill in your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Invalid email format (e.g. name@domain.com)";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter your message";
    } else if (formData.message.trim().length < 5) {
      errs.message = "Message must be at least 5 characters";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");
    setErrorMessage("");

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_wbttiyf";
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_9mytz7l";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "zKVX1QMfXWK-EpDIL";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          user_email: formData.email,
          // Keep the recipient tied to the profile data so submissions reach Adhitya's inbox.
          to_email: personal.email,
          time: new Date().toLocaleString("id-ID", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
          message: formData.message,
          to_name: personal.name,
        },
        publicKey
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMessage(
        err?.text || "Failed to send message. Please try again or email directly."
      );
    }
  };

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32 scroll-mt-28" id="contact">
      <div className="mb-8 reveal-pop">
        <h2 className="font-headline-md text-headline-md text-on-surface bg-brick-yellow border-4 border-on-surface px-4 py-2 inline-block w-fit brick-shadow uppercase">
          CONTACT
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="reveal-left delay-100">
          <h3 className="font-display-lg text-on-surface uppercase mb-4 leading-tight text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg">
            LET&apos;S BUILD
            <br />
            <span className="text-primary">SOMETHING TOGETHER</span>
          </h3>
          <p className="font-body-lg text-on-surface mb-6 text-body-lg leading-relaxed">
            Have a project in mind, an opportunity to discuss, or just want to connect? Send me a message or find me on social media!
          </p>

          {/* Hire Me Direct Gmail Action Button */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent(
              "Let's Unlock Your Potential"
            )}&body=${encodeURIComponent(
              "Hi Adhitya,\n\nI saw your portfolio and would love to connect with you regarding…"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3.5 bg-brick-yellow text-on-surface border-4 border-on-surface brick-btn mb-8 relative select-none cursor-pointer group"
            title="Click to send email directly via Gmail"
          >
            <div className="absolute -top-2.5 left-0 w-full flex justify-around px-3 pointer-events-none">
              <span className="w-3 h-3 rounded-full bg-brick-yellow border-2 border-on-surface" />
              <span className="w-3 h-3 rounded-full bg-brick-yellow border-2 border-on-surface" />
              <span className="w-3 h-3 rounded-full bg-brick-yellow border-2 border-on-surface" />
            </div>
            <span className="material-symbols-outlined text-primary text-[22px] group-hover:scale-110 transition-transform">
              rocket_launch
            </span>
            <span className="font-button-text text-sm sm:text-base font-bold uppercase tracking-wide">
              Hire me to unlock my potential
            </span>
            <span className="material-symbols-outlined text-on-surface text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>

          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  className="w-14 h-14 bg-white text-on-surface border-4 border-on-surface brick-shadow hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#1a1c1c] transition-all inline-flex items-center justify-center rounded-xl cursor-pointer group"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  {Icon && (
                    <Icon className="w-6 h-6 fill-current text-on-surface group-hover:scale-110 transition-transform" />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="brick-card p-8 bg-white relative reveal-right delay-200">
          <div className="absolute -top-3 left-8 flex gap-6 px-2 pointer-events-none z-20">
            <span className="w-6 h-6 rounded-full bg-white border-2 border-on-surface" />
            <span className="w-6 h-6 rounded-full bg-white border-2 border-on-surface" />
            <span className="w-6 h-6 rounded-full bg-white border-2 border-on-surface" />
          </div>

          {status === "success" ? (
            <div className="pt-6 pb-4 flex flex-col items-center text-center gap-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-brick-yellow border-4 border-on-surface flex items-center justify-center brick-shadow">
                <span className="material-symbols-outlined text-on-surface text-[32px]">
                  check_circle
                </span>
              </div>
              <h4 className="font-headline-md text-on-surface uppercase text-xl">
                MESSAGE DELIVERED!
              </h4>
              <p className="font-body-md text-on-surface-variant max-w-sm text-sm">
                Thank you for reaching out! Your message has been sent successfully to {personal.name}. I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-2.5 bg-primary text-white font-button-text text-xs uppercase brick-btn cursor-pointer"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5 pt-2">
              {status === "error" && (
                <div className="p-3 bg-red-100 border-3 border-primary text-primary text-xs font-bold font-label-caps flex items-center gap-2 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake">
                  <span className="material-symbols-outlined text-[18px]">
                    error
                  </span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label
                    className="font-label-caps font-bold text-on-surface uppercase text-xs"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  {errors.name && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-100 text-primary border-2 border-primary font-label-caps text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_#ba1a1a] animate-fadeIn select-none">
                      <span className="material-symbols-outlined text-[13px]">error</span>
                      {errors.name}
                    </span>
                  )}
                </div>
                <input
                  className={`border-3 border-on-surface p-3.5 font-body-md bg-surface-container transition-all brick-shadow text-sm focus:outline-none focus:bg-white focus:border-brick-blue focus:shadow-[6px_6px_0px_0px_#1a1c1c] ${
                    errors.name
                      ? "border-primary bg-red-50/60 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake"
                      : ""
                  }`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  type="text"
                  autoComplete="name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label
                    className="font-label-caps font-bold text-on-surface uppercase text-xs"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  {errors.email && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-100 text-primary border-2 border-primary font-label-caps text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_#ba1a1a] animate-fadeIn select-none">
                      <span className="material-symbols-outlined text-[13px]">error</span>
                      {errors.email}
                    </span>
                  )}
                </div>
                <input
                  className={`border-3 border-on-surface p-3.5 font-body-md bg-surface-container transition-all brick-shadow text-sm focus:outline-none focus:bg-white focus:border-brick-blue focus:shadow-[6px_6px_0px_0px_#1a1c1c] ${
                    errors.email
                      ? "border-primary bg-red-50/60 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake"
                      : ""
                  }`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  type="text"
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label
                    className="font-label-caps font-bold text-on-surface uppercase text-xs"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  {errors.message && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-100 text-primary border-2 border-primary font-label-caps text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_#ba1a1a] animate-fadeIn select-none">
                      <span className="material-symbols-outlined text-[13px]">error</span>
                      {errors.message}
                    </span>
                  )}
                </div>
                <textarea
                  className={`border-3 border-on-surface p-3.5 font-body-md bg-surface-container transition-all brick-shadow min-h-[120px] text-sm focus:outline-none focus:bg-white focus:border-brick-blue focus:shadow-[6px_6px_0px_0px_#1a1c1c] ${
                    errors.message
                      ? "border-primary bg-red-50/60 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake"
                      : ""
                  }`}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to build or discuss?"
                />
              </div>

              <button
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-on-primary font-button-text text-button-text brick-btn uppercase relative mt-2 w-full cursor-pointer disabled:opacity-50"
                type="submit"
                disabled={status === "sending"}
              >
                <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
                  <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
                  <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
                  <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
                </div>
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    SENDING…
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
