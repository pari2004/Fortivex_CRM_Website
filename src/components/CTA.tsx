import { ArrowRight, MessageCircle } from "lucide-react";
import { company } from "@/content/site";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="section" id="demo">
      <div className="wrap">
        <Reveal>
          <div className="cta__box">
            <h2 className="display">Stop losing enquiries this intake, not next year.</h2>
            <p>
              Book a 30-minute walkthrough with your own data. We&rsquo;ll import a sample of
              your leads, configure your admission stages and show you exactly where
              your funnel is leaking.
            </p>
            <div className="cta__ctas">
              <a className="btn btn--dark btn--lg" href={`mailto:${company.email}?subject=Fortivex%20CRM%20demo%20request`}>
                Book a live demo <ArrowRight />
              </a>
              <a
                className="btn btn--outline-light btn--lg"
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> WhatsApp us
              </a>
            </div>
            <p className="cta__micro">
              14-day free trial · Onboarding in 48 hours · Data migration included
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
