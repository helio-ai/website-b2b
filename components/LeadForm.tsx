"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";

/**
 * Demo / contact form. It validates in the browser and shows a success
 * state; wire `onSubmit` to your CRM or form backend.
 */
export function LeadForm({ submitLabel = "Submit" }: { submitLabel?: string }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-white p-10 text-center text-text ring-1 ring-line">
        <CircleCheck className="h-12 w-12 text-accent-500" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-semibold">Thanks, we got your details</h2>
        <p className="mt-2 text-sm text-text-2">Placeholder confirmation message. Nothing was sent: connect this form to a backend.</p>
      </div>
    );
  }

  const field = "mt-1 h-11 w-full rounded-lg bg-white px-3 text-sm text-text ring-1 ring-line outline-none focus:ring-2 focus:ring-brand-400";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4 rounded-2xl bg-white p-6 text-text ring-1 ring-line sm:grid-cols-2 sm:p-8"
    >
      <label className="text-sm font-medium">
        First name
        <input name="firstName" required autoComplete="given-name" className={field} />
      </label>
      <label className="text-sm font-medium">
        Last name
        <input name="lastName" required autoComplete="family-name" className={field} />
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Work email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="text-sm font-medium">
        Company
        <input name="company" required autoComplete="organization" className={field} />
      </label>
      <label className="text-sm font-medium">
        Company size
        <select name="size" required className={field} defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {["1-10", "11-50", "51-200", "201-1000", "1000+"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Phone number
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        How can we help?
        <textarea name="message" rows={4} className={`${field} h-auto py-2`} />
      </label>
      <label className="flex items-start gap-2 text-xs text-text-2 sm:col-span-2">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-brand-500" />
        I agree to the placeholder privacy terms.
      </label>
      <button type="submit" className="h-11 rounded-lg bg-brand-500 text-sm font-medium text-white hover:bg-brand-600 sm:col-span-2">
        {submitLabel}
      </button>
    </form>
  );
}
