"use client";

import { useState } from "react";

const serviceOptions = [
  "Bridal Makeup",
  "Pre-wedding Makeup",
  "Makeup + Hair Package",
  "Event Makeup",
  "Graduation Makeup",
  "Hair Styling",
  "Other",
];

interface FormState {
  name: string;
  phone: string;
  lineId: string;
  email: string;
  serviceType: string;
  eventDate: string;
  location: string;
  numberOfPeople: string;
  message: string;
}

const empty: FormState = {
  name: "",
  phone: "",
  lineId: "",
  email: "",
  serviceType: "",
  eventDate: "",
  location: "",
  numberOfPeople: "1",
  message: "",
};

const inputClass =
  "w-full bg-transparent border-b border-charcoal/20 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-gold transition-colors duration-300";

const labelClass =
  "block font-sans text-[10px] tracking-[0.25em] uppercase text-charcoal/50 mb-2";

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.serviceType) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitting(true);
    // TODO Phase 3: send to server action → email/LINE notification
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-5">
        <div className="w-12 h-px bg-gold mx-auto" />
        <h3 className="font-serif text-3xl text-charcoal font-light">
          Thank You
        </h3>
        <p className="font-serif italic text-warm-gray text-lg">
          Your inquiry has been received.
        </p>
        <p className="font-sans text-sm text-charcoal/55 max-w-xs leading-relaxed">
          I&apos;ll be in touch within 24 hours to confirm your booking details.
        </p>
        <button
          onClick={() => { setForm(empty); setSubmitted(false); }}
          className="mt-4 font-sans text-[11px] tracking-[0.18em] uppercase text-charcoal/45 hover:text-gold transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>
            Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>
            Phone <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+66 XX XXX XXXX"
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* LINE + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>LINE ID</label>
          <input
            type="text"
            name="lineId"
            value={form.lineId}
            onChange={handleChange}
            placeholder="@yourlineid"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            Email <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Service type */}
      <div>
        <label className={labelClass}>
          Service <span className="text-gold">*</span>
        </label>
        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer appearance-none`}
          required
        >
          <option value="" disabled>
            Select a service…
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Event date + location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Number of People</label>
          <input
            type="number"
            name="numberOfPeople"
            value={form.numberOfPeople}
            onChange={handleChange}
            min="1"
            max="20"
            className={inputClass}
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className={labelClass}>Event Location</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Venue name or area"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your event, any special requirements, or questions…"
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="font-sans text-xs text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full font-sans text-[11px] tracking-[0.22em] uppercase bg-charcoal text-ivory py-4 hover:bg-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Send Inquiry"}
      </button>

      <p className="font-sans text-[10px] text-charcoal/35 text-center leading-relaxed">
        By submitting, you agree to be contacted regarding your booking inquiry.
      </p>
    </form>
  );
}
