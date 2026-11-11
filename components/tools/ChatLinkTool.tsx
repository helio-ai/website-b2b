"use client";

import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import { Check, Copy, Download } from "lucide-react";
import { inputCls } from "./ToolShell";

const codes = [
  ["+1", "US / CA"], ["+44", "UK"], ["+49", "DE"], ["+33", "FR"], ["+34", "ES"], ["+39", "IT"],
  ["+55", "BR"], ["+52", "MX"], ["+91", "IN"], ["+62", "ID"], ["+60", "MY"], ["+65", "SG"],
  ["+63", "PH"], ["+66", "TH"], ["+84", "VN"], ["+971", "AE"], ["+966", "SA"], ["+27", "ZA"],
] as const;

/**
 * Builds a wa.me click-to-chat link from a phone number and optional message.
 * In "qr" mode it also renders the link as a downloadable QR code.
 */
export function ChatLinkTool({ mode }: { mode: "link" | "qr" }) {
  const [code, setCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const [qr, setQr] = useState<string | null>(null);

  const digits = (code + phone).replace(/\D/g, "");
  const valid = phone.replace(/\D/g, "").length >= 6;
  const link = useMemo(
    () => (valid ? `https://wa.me/${digits}${msg ? `?text=${encodeURIComponent(msg)}` : ""}` : ""),
    [digits, msg, valid],
  );

  useEffect(() => {
    if (mode !== "qr" || !link) return;
    let cancelled = false;
    QRCode.toDataURL(link, { width: 480, margin: 1 }).then((url) => {
      if (!cancelled) setQr(url);
    });
    return () => {
      cancelled = true;
    };
  }, [link, mode]);

  const copy = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard blocked: the link is still selectable */
    }
  };

  return (
    <div className="grid gap-6 rounded-3xl bg-white p-5 ring-1 ring-line sm:p-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="grid grid-cols-[120px_1fr] gap-2">
          <label className="text-sm font-medium">
            Code
            <select value={code} onChange={(e) => setCode(e.target.value)} className={inputCls}>
              {codes.map(([c, n]) => (
                <option key={c + n} value={c}>
                  {c} {n}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Phone number
            <input
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="555 123 4567"
              className={inputCls}
            />
          </label>
        </div>
        <label className="block text-sm font-medium">
          Pre-filled message (optional)
          <textarea
            rows={4}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Hi! I'd like to know more about…"
            className={`${inputCls} h-auto py-2`}
          />
        </label>
        {!valid && phone && <p className="text-sm text-rose-600">Enter at least 6 digits.</p>}
      </div>

      <div className="flex flex-col rounded-2xl bg-muted p-5">
        <p className="text-sm font-medium">{mode === "qr" ? "Your QR code" : "Your link"}</p>
        {mode === "qr" && (
          <div className="mt-3 flex flex-1 items-center justify-center rounded-xl bg-white p-4 ring-1 ring-line">
            {link && qr ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={qr} alt="QR code for your chat link" className="aspect-square w-full max-w-[240px]" />
            ) : (
              <span className="py-16 text-center text-sm text-text-3">Enter a phone number to generate a QR code</span>
            )}
          </div>
        )}
        <output className="mt-3 block min-h-11 break-all rounded-lg bg-white p-3 text-sm ring-1 ring-line">
          {link || <span className="text-text-3">https://wa.me/…</span>}
        </output>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={copy}
            disabled={!link}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-ink text-sm font-medium text-white disabled:opacity-40"
          >
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            {copied ? "Copied" : "Copy link"}
          </button>
          {mode === "qr" && (
            <a
              href={link && qr ? qr : undefined}
              download="chat-qr.png"
              aria-disabled={!link}
              className={`inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-brand-500 text-sm font-medium text-white ${link && qr ? "" : "pointer-events-none opacity-40"}`}
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download PNG
            </a>
          )}
          {mode === "link" && (
            <a
              href={link || undefined}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-brand-500 text-sm font-medium text-white ${link ? "" : "pointer-events-none opacity-40"}`}
            >
              Test link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
