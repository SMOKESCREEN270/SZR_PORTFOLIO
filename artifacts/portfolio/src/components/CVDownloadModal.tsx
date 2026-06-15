import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Loader2, CheckCircle2 } from "lucide-react";

interface FormData {
  fullName: string;
  organization: string;
  linkedin: string;
  mobile: string;
  email: string;
  reason: string;
}

interface FormErrors {
  fullName?: string;
  organization?: string;
  linkedin?: string;
  mobile?: string;
  email?: string;
  reason?: string;
}

const REASONS = [
  "Select a reason...",
  "Job / Recruitment Opportunity",
  "Freelance Project",
  "Hackathon / Competition Collaboration",
  "Academic Research",
  "Business Partnership",
  "General Interest / Networking",
  "Other",
];

const EMPTY: FormData = {
  fullName: "",
  organization: "",
  linkedin: "",
  mobile: "",
  email: "",
  reason: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim() || data.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  } else if (!/^[a-zA-Z\s'.'-]+$/.test(data.fullName.trim())) {
    errors.fullName = "Name may only contain letters, spaces, and apostrophes.";
  }

  if (!data.organization.trim() || data.organization.trim().length < 2) {
    errors.organization = "Please enter your company, institution, or organization.";
  }

  if (!data.linkedin.trim()) {
    errors.linkedin = "LinkedIn profile URL is required.";
  } else if (!/^https?:\/\/(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9\-_%]+\/?$/.test(data.linkedin.trim())) {
    errors.linkedin = "Enter a valid LinkedIn URL (e.g. https://linkedin.com/in/yourname).";
  }

  if (!data.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!/^\+?[0-9]{7,15}$/.test(data.mobile.replace(/[\s\-()]/g, ""))) {
    errors.mobile = "Enter a valid mobile number (7–15 digits, with or without country code).";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[a-zA-Z0-9._%+\-]+@gmail\.com$/.test(data.email.trim())) {
    errors.email = "Only Gmail addresses are accepted (must end in @gmail.com).";
  }

  if (!data.reason || data.reason === "Select a reason...") {
    errors.reason = "Please select a reason for downloading the CV.";
  }

  return errors;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function CVDownloadModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate({ ...form, [field]: e.target.value })[field] }));
    }
  };

  const blur = (field: keyof FormData) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validate(form)[field] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(EMPTY).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      const a = document.createElement("a");
      a.href = "/zaid-rahman-cv.pdf";
      a.download = "Shaikh_Zaid_Rahman_CV.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => {
        onClose();
        setForm(EMPTY);
        setErrors({});
        setTouched({});
        setStatus("idle");
      }, 1800);
    }, 1200);
  };

  const fieldClass = (field: keyof FormData) =>
    `w-full bg-black/30 border rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors text-sm ${
      touched[field] && errors[field]
        ? "border-red-500/70 focus:border-red-400"
        : "border-white/10 focus:border-cyan-400"
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={status !== "submitting" ? onClose : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-lg glass border border-white/10 rounded-2xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {status !== "success" ? (
              <>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                  data-testid="button-close-cv-modal"
                  disabled={status === "submitting"}
                >
                  <X size={20} />
                </button>

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/15 flex items-center justify-center">
                      <Download size={18} className="text-cyan-400" />
                    </div>
                    <h2 className="text-xl font-display font-bold text-white">Download CV</h2>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    One quick form before the download — this helps Zaid understand who's reviewing his work.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className="block text-xs text-white/50 font-medium mb-1.5 uppercase tracking-wider">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      value={form.fullName}
                      onChange={set("fullName")}
                      onBlur={blur("fullName")}
                      className={fieldClass("fullName")}
                      data-testid="input-cv-fullname"
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 font-medium mb-1.5 uppercase tracking-wider">
                      Company / Organization / Institution <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp / IIT Bombay / Freelancer"
                      value={form.organization}
                      onChange={set("organization")}
                      onBlur={blur("organization")}
                      className={fieldClass("organization")}
                      data-testid="input-cv-organization"
                    />
                    {touched.organization && errors.organization && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.organization}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 font-medium mb-1.5 uppercase tracking-wider">
                      LinkedIn Profile URL <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/yourname"
                      value={form.linkedin}
                      onChange={set("linkedin")}
                      onBlur={blur("linkedin")}
                      className={fieldClass("linkedin")}
                      data-testid="input-cv-linkedin"
                    />
                    {touched.linkedin && errors.linkedin && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.linkedin}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 font-medium mb-1.5 uppercase tracking-wider">
                      Mobile Number <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={form.mobile}
                      onChange={set("mobile")}
                      onBlur={blur("mobile")}
                      className={fieldClass("mobile")}
                      data-testid="input-cv-mobile"
                    />
                    {touched.mobile && errors.mobile && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.mobile}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 font-medium mb-1.5 uppercase tracking-wider">
                      Gmail Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={form.email}
                      onChange={set("email")}
                      onBlur={blur("email")}
                      className={fieldClass("email")}
                      data-testid="input-cv-email"
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 font-medium mb-1.5 uppercase tracking-wider">
                      Reason for Downloading <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={form.reason}
                      onChange={set("reason")}
                      onBlur={blur("reason")}
                      className={`${fieldClass("reason")} appearance-none cursor-pointer`}
                      data-testid="select-cv-reason"
                    >
                      {REASONS.map((r) => (
                        <option key={r} value={r === "Select a reason..." ? "" : r} className="bg-[#0a0f1e] text-white">
                          {r}
                        </option>
                      ))}
                    </select>
                    {touched.reason && errors.reason && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.reason}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full mt-2 bg-white text-black font-semibold rounded-xl py-3.5 flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed group"
                    data-testid="button-cv-submit"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                        <span>Download CV</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                className="flex flex-col items-center justify-center py-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle2 size={56} className="text-cyan-400 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Download Started</h3>
                <p className="text-white/50 text-sm">Thanks — your download of Zaid's CV has begun.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
