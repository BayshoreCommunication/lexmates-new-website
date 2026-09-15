import ContactForm from "@/components/ui/ContactForm";
import Hero from "@/components/ui/Hero";
import { partners } from "@/data/partners";

export const metadata = {
  title: "Contact | Lexmates Advocates & Legal Advisers",
  description:
    "Get in touch with Lexmates by WhatsApp, phone, or the contact form to discuss your legal matter.",
};

export default function ContactPage() {
  const [parvez, arif] = partners;

  return (
    <>
      <Hero
        small
        title="Contact Lexmates"
        subtitle="Tell us what is going on. We will tell you plainly where you stand."
      />

      <section className="section">
        <div className="container contact-grid">
          <ContactForm />

          <div className="contact-details">
            <h2>Direct Contact</h2>
            {parvez && (
              <div className="contact-card">
                <h3>{parvez.name}</h3>
                <p className="role">{parvez.role}</p>
                <a
                  className="whatsapp-btn"
                  href={`https://wa.me/${parvez.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.697 4.61 1.902 6.483L4 29l7.694-1.878A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm6.994 16.99c-.298.836-1.47 1.53-2.418 1.735-.643.137-1.483.246-4.31-.925-3.617-1.497-5.944-5.163-6.126-5.404-.176-.24-1.463-1.946-1.463-3.712 0-1.766.928-2.634 1.256-2.994.298-.328.652-.41.87-.41.217 0 .434.002.624.012.2.01.469-.076.734.56.298.71.997 2.474 1.086 2.654.088.18.147.393.03.633-.117.24-.176.39-.352.6-.176.21-.37.47-.528.63-.176.18-.359.375-.153.735.205.36.913 1.507 1.96 2.44 1.347 1.2 2.483 1.573 2.845 1.752.362.18.573.15.786-.09.212-.24.912-1.064 1.156-1.428.244-.365.487-.303.822-.182.335.12 2.126 1.002 2.49 1.183.364.18.607.27.696.42.09.15.09.87-.208 1.706z" />
                  </svg>
                  {parvez.contact.whatsappFormatted}
                </a>
                {parvez.contact.usaPhone && (
                  <p>
                    <strong>USA:</strong>{" "}
                    <a
                      href={`https://wa.me/${parvez.contact.usaPhone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {parvez.contact.usaPhone}
                    </a>
                  </p>
                )}
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${parvez.contact.email}`}>
                    {parvez.contact.email}
                  </a>
                </p>
              </div>
            )}

            {arif && (
              <div className="contact-card">
                <h3>{arif.name}</h3>
                <p className="role">{arif.role}</p>
                <a
                  className="whatsapp-btn"
                  href={`https://wa.me/${arif.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.697 4.61 1.902 6.483L4 29l7.694-1.878A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm6.994 16.99c-.298.836-1.47 1.53-2.418 1.735-.643.137-1.483.246-4.31-.925-3.617-1.497-5.944-5.163-6.126-5.404-.176-.24-1.463-1.946-1.463-3.712 0-1.766.928-2.634 1.256-2.994.298-.328.652-.41.87-.41.217 0 .434.002.624.012.2.01.469-.076.734.56.298.71.997 2.474 1.086 2.654.088.18.147.393.03.633-.117.24-.176.39-.352.6-.176.21-.37.47-.528.63-.176.18-.359.375-.153.735.205.36.913 1.507 1.96 2.44 1.347 1.2 2.483 1.573 2.845 1.752.362.18.573.15.786-.09.212-.24.912-1.064 1.156-1.428.244-.365.487-.303.822-.182.335.12 2.126 1.002 2.49 1.183.364.18.607.27.696.42.09.15.09.87-.208 1.706z" />
                  </svg>
                  {arif.contact.whatsappFormatted}
                </a>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${arif.contact.email}`}>
                    {arif.contact.email}
                  </a>
                </p>
              </div>
            )}

            <div className="contact-card address-card">
              <h3>Office Address</h3>
              <p>
                Lexmates,
                <br />
                House No-35 (3rd Floor),
                <br />
                Road No-04, Block-F, Kolwalapara,
                <br />
                Mirpur, Dhaka 1216, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
