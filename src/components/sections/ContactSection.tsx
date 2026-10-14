"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Mail, Copy, Check, Send, Sparkles, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { socialLinks } from "@/lib/data";

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Extract raw email from socialLinks or default
  const emailLink = socialLinks.find((s) => s.id === "email");
  const emailAddress = emailLink?.url.replace("mailto:", "") || "your.email@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate interactive submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Trigger mailto client as fallback
      window.location.href = `mailto:${emailAddress}?subject=Portfolio Inquiry from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <Container>
        <SectionHeader
          badge="Get In Touch"
          title="Let's Discuss Your"
          titleHighlight="Next Project"
          description="Whether you have an upcoming project, an engineering inquiry, or want to explore opportunities, feel free to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Email Card */}
            <Card className="border-purple-500/20 bg-gradient-to-br from-[#12121e] to-[#0c0c14]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Direct Email</h3>
                  <p className="text-xs text-neutral-400">Response within 24 hours</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono text-purple-200 truncate select-all">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-neutral-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <Button
                href={`mailto:${emailAddress}`}
                variant="primary"
                size="sm"
                icon={<Mail className="w-3.5 h-3.5" />}
                className="w-full justify-center text-xs"
              >
                Send Email Directly
              </Button>
            </Card>

            {/* Social Network Profiles */}
            <Card>
              <h3 className="text-sm font-semibold text-white mb-3">
                Professional Networks
              </h3>
              <div className="space-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-purple-500/30 text-neutral-300 hover:text-white transition-all text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <IconRenderer name={social.iconName} className="w-4 h-4 text-purple-400" />
                      <span className="font-medium">{social.label}</span>
                    </div>
                    <span className="text-neutral-500 text-[10px]">Visit →</span>
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Functional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="border-white/[0.08]">
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-2">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Message Prepared!</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
                    Your email client has been opened with your inquiry. You can also reach out directly at {emailAddress}.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-4"
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-neutral-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-neutral-500 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-neutral-300 mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-neutral-500 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-neutral-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell me about your project, idea, or opportunity..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-neutral-500 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    icon={
                      isSubmitting ? (
                        <Sparkles className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                    iconPosition="right"
                    className="w-full justify-center"
                  >
                    {isSubmitting ? "Preparing..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
