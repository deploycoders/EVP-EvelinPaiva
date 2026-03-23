import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import PrimaryButton from "@/components/common/PrimaryButton/PrimaryButton";

function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-10 rounded-2xl border border-evp-border bg-gradient-to-b from-evp-section to-evp-bg p-6 shadow-soft md:p-8"
    >
      <SectionTitle
        eyebrow="Contact"
        title="Contact Section | Final conversion"
        description="Initial text for contact channel, booking flow, and next steps."
      />
      <p className="max-w-3xl">
        Closing block prepared for a contact form, WhatsApp flow, or direct booking path.
      </p>
      <PrimaryButton href="mailto:contact@evelinpaiva.com">Send email</PrimaryButton>
    </section>
  );
}

export default ContactSection;
