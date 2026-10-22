import { personalInfo } from "@/content/personal";
import SectionShell from "@/components/ui/SectionShell";
import ExternalLink from "@/components/ui/ExternalLink";

export default function ContactSection() {
  const { email, github, linkedin, cv } = personalInfo.contact;

  return (
    <SectionShell
      id="contact"
      index="05"
      title="Contact"
      intro="Email is the most direct way to reach me."
      dark
    >
      <a
        href={`mailto:${email}`}
        className="text-link block break-words text-[clamp(1.25rem,0.8rem+2.2vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em]"
      >
        {email}
      </a>

      <ul className="mt-10 space-y-2">
        <li>
          <ExternalLink href={github}>GitHub profile</ExternalLink>
        </li>
        <li>
          <ExternalLink href={linkedin}>LinkedIn profile</ExternalLink>
        </li>
        {cv ? (
          <li>
            <a href={cv} download className="text-link">
              Download CV
            </a>
          </li>
        ) : null}
      </ul>
    </SectionShell>
  );
}
