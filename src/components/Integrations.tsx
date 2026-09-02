import {
  siGmail,
  siGoogleads,
  siGooglecalendar,
  siGooglesheets,
  siMeta,
  siRazorpay,
  siWhatsapp,
  siZapier,
  siZoom,
} from "simple-icons";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import type { ReactNode } from "react";
import { integrations } from "@/content/site";
import Reveal from "./Reveal";

/** Renders an authentic brand mark from simple-icons at its official color. */
function Brand({ icon }: { icon: { hex: string; path: string } }) {
  return (
    <svg viewBox="0 0 24 24" width={17} height={17} fill={`#${icon.hex}`} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

// Real, recognisable brand marks — only for integrations that have one.
// Names without an entry here (IndiaMART, JustDial, Tally, Truecaller, and the
// generic "Website Forms" / "SMS Gateways" / "REST API & Webhooks" categories)
// fall back to the neutral dot, since no authentic logo asset is available.
const LOGOS: Record<string, () => ReactNode> = {
  "WhatsApp Business": () => <Brand icon={siWhatsapp} />,
  "Meta Lead Ads": () => <Brand icon={siMeta} />,
  "Google Ads": () => <Brand icon={siGoogleads} />,
  "Gmail": () => <Brand icon={siGmail} />,
  "Outlook": () => <PiMicrosoftOutlookLogoFill size={17} color="#0078D4" />,
  "Google Calendar": () => <Brand icon={siGooglecalendar} />,
  "Razorpay": () => <Brand icon={siRazorpay} />,
  "Zoom": () => <Brand icon={siZoom} />,
  "Google Sheets": () => <Brand icon={siGooglesheets} />,
  "Zapier": () => <Brand icon={siZapier} />,
};

export default function Integrations() {
  return (
    <section className="section section--tight section--paper">
      <div className="wrap">
        <Reveal>
          <div className="head-block head-block--center">
            <span className="eyebrow">Integrations</span>
            <h2 className="display">Plugs into the channels your enquiries already come from</h2>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="intg">
            {integrations.map((n) => {
              const renderLogo = LOGOS[n];
              return (
                <span key={n}>
                  {renderLogo ? renderLogo() : <span className="intg__dot" />}
                  {n}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
