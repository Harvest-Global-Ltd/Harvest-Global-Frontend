import raw from "./data.json";

const STAGE_ACCENTS = new Set<TechStage["accent"]>([
  "neutral",
  "orange",
  "emerald",
]);

export interface NavigationLink {
  label: string;
  href: string;
}

export interface HeroData {
  titleLine1: string;
  titleLine2: string;
  subtitle: string[];
  primaryCta: string;
  secondaryCta: string;
}

export interface AboutData {
  eyebrow: string;
  scrollTitle: string;
  scrollHint: string;
  title: string;
  highlight: string;
  paragraph1: string;
  paragraph2: string;
  domainsEyebrow: string;
  domains: string[];
}

export interface TechStage {
  number: string;
  label: string;
  title: string;
  description: string;
  accent: "neutral" | "orange" | "emerald";
  coords: string;
}

export interface InfrastructureMetric {
  label: string;
  caption: string;
}

export interface TechnologyData {
  eyebrow: string;
  title: string[];
  description: string;
  stages: TechStage[];
  infrastructureNote: {
    eyebrow: string;
    description: string;
    metrics: InfrastructureMetric[];
  };
  cards: TechCard[];
}

export interface TechCard {
  number: string;
  title: string;
  description: string;
  items: string[];
  accent: "neutral" | "orange" | "emerald";
  visual: "image" | "grid" | "none";
  image?: string;
  coords?: string;
}

export interface ApplicationItem {
  id: string;
  image: string;
  label: string;
  shortLabel: string;
  alt: string;
  description: string;
  tag: string;
  coords: string;
}

export interface ApplicationsData {
  eyebrow: string;
  title: string[];
  description: string;
  items: ApplicationItem[];
}

export interface CredentialRecognition {
  id: string;
  category: string;
  title: string;
  description: string;
  year?: string;
  image?: string;
}

export interface CredentialMedia {
  id: string;
  publication: string;
  title: string;
  description: string;
  year?: string;
  link?: string;
  image?: string;
}

export interface CredentialForum {
  id: string;
  title: string;
  venue: string;
  location: string;
  description: string;
  year?: string;
  image?: string;
}

export interface CredentialEcosystem {
  id: string;
  phase: string;
  title: string;
  description: string;
  status?: string;
  image?: string;
}

export interface CredentialAffiliation {
  id: string;
  name: string;
  type: string;
  description: string;
  year?: string;
  image?: string;
}

export interface CredentialSectionHeader {
  eyebrow: string;
  title: string;
  description: string;
}

export interface CredentialsData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  sections: {
    recognition: CredentialSectionHeader;
    media: CredentialSectionHeader;
    forums: CredentialSectionHeader;
    ecosystem: CredentialSectionHeader;
    affiliations: CredentialSectionHeader;
  };
  recognition: CredentialRecognition[];
  media: CredentialMedia[];
  forums: CredentialForum[];
  ecosystem: CredentialEcosystem[];
  affiliations: CredentialAffiliation[];
}

export interface CtaData {
  title: string;
  buttonLabel: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  image: string;
  linkedin?: string;
}

export interface SiteData {
  site: {
    name: string;
    shortName: string;
    tagline: string;
    websiteUrl: string;
    website: string;
    phone: string;
  };
  navigation: {
    links: NavigationLink[];
    actions: NavigationLink[];
  };
  hero: HeroData;
  about: AboutData;
  technology: TechnologyData;
  applications: ApplicationsData;
  credentials: CredentialsData;
  cta: CtaData;
  team: TeamMember[];
  footer: {
    brandDescription: string;
    contact: {
      phone: string;
      addressLines: string[];
      website: string;
      websiteUrl: string;
    };
    copyright: string;
    tagline: string;
  };
}

// Strict annotation (not a cast): shape drift in data.json now fails the build.
// JSON imports widen `accent` to string, so stages are mapped through a typed,
// runtime-guarded narrowing of the accent union.
export const data: SiteData = {
  ...raw,
  technology: {
    ...raw.technology,
    stages: raw.technology.stages.map((stage) => {
      if (!STAGE_ACCENTS.has(stage.accent as TechStage["accent"])) {
        throw new Error(`Unknown technology stage accent: ${stage.accent}`);
      }
      return { ...stage, accent: stage.accent as TechStage["accent"] };
    }),
    cards: raw.technology.cards.map((card) => {
      if (!STAGE_ACCENTS.has(card.accent as TechCard["accent"])) {
        throw new Error(`Unknown technology card accent: ${card.accent}`);
      }
      if (!["image", "grid", "none"].includes(card.visual)) {
        throw new Error(`Unknown technology card visual: ${card.visual}`);
      }
      return {
        ...card,
        accent: card.accent as TechCard["accent"],
        visual: card.visual as TechCard["visual"],
      };
    }),
  },
};
