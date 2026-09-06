"use client";

import ApplicationExpanded from "../ui/ApplicationExpanded";
import ApplicationTabs from "../ui/ApplicationTabs";
import TopographicBackground from "../ui/Topography";

const applicationsData = {
  agriculture: {
    title: "Agriculture",
    desc: "AI-powered intelligence across the agricultural lifecycle.",
    image: "/images/application/Agriculture/agriculture.png",

    subtopic: [
      {
        title: "Crop Planning",
        desc: "Intelligence to support better crop planning and resource allocation.",
        img: "/images/application/Agriculture/sub/1.png",
      },
      {
        title: "Crop Monitoring",
        desc: "Monitor crop health and growth throughout the agricultural lifecycle.",
        img: "/images/application/Agriculture/sub/2.png",
      },
      {
        title: "Yield Estimation",
        desc: "Estimate crop yields using Earth Observation and GeoAI.",
        img: "/images/application/Agriculture/sub/3.png",
      },
      {
        title: "Crop Insurance",
        desc: "Enable data-driven crop risk assessment and insurance intelligence.",
        img: "/images/application/Agriculture/sub/4.png",
      },
    ],
  },

  climateIntelligence: {
    title: "Climate Intelligence",
    desc: "Climate modelling, environmental monitoring and spatial risk intelligence to identify changing patterns and support resilient decision-making.",
    image: "/images/application/climate/climate.png",

    subtopic: [
      {
        title: "Climate Risk",
        desc: "Identify and assess climate-related risks across regions and assets.",
        img: "/images/application/climate/sub/1.png",
      },
      {
        title: "Climate Modelling",
        desc: "Use spatial intelligence and AI to understand evolving climate patterns.",
        img: "/images/application/climate/sub/2.png",
      },
      {
        title: "Environmental Change",
        desc: "Monitor environmental changes and their impact across landscapes.",
        img: "/images/application/climate/sub/3.png",
      },
      {
        title: "Heat & Drought Intelligence",
        desc: "Identify heat and drought patterns to support proactive resilience planning.",
        img: "/images/application/climate/sub/4.png",
      },
    ],
  },

  disasterManagement: {
    title: "Disaster Management",
    desc: "GeoAI-powered monitoring and predictive intelligence for faster disaster preparedness, response and recovery.",
    image: "/images/application/disaster/disaster.png",

    subtopic: [
      {
        title: "Flood Intelligence",
        desc: "Monitor flood conditions and identify areas at risk.",
        img: "/images/application/disaster/sub/1.png",
      },
      {
        title: "Landslide Monitoring",
        desc: "Detect and monitor landslide-prone areas using Earth Observation.",
        img: "/images/application/disaster/sub/2.png",
      },
      {
        title: "Vulnerability Mapping",
        desc: "Map vulnerable populations, infrastructure and regions to improve preparedness.",
        img: "/images/application/disaster/sub/3.png",
      },
      {
        title: "Early Warning",
        desc: "Deliver predictive intelligence to support faster disaster warnings and response.",
        img: "/images/application/disaster/sub/4.png",
      },
    ],
  },

  urbanPlanning: {
    title: "Urban Planning",
    desc: "Spatial intelligence for understanding urban growth, infrastructure, land use and climate vulnerability.",
    image: "/images/application/urban-plan/Urban.png",

    subtopic: [
      {
        title: "Urban Growth",
        desc: "Monitor and analyse the expansion and transformation of cities.",
        img: "/images/application/urban-plan/sub/1.png",
      },
      {
        title: "Land Use",
        desc: "Understand changing land-use patterns across urban environments.",
        img: "/images/application/urban-plan/sub/2.png",
      },
      {
        title: "Infrastructure",
        desc: "Map and monitor critical urban infrastructure and development.",
        img: "/images/application/urban-plan/sub/3.png",
      },
      {
        title: "Climate Resilience",
        desc: "Assess urban climate vulnerability and support resilient city planning.",
        img: "/images/application/urban-plan/sub/4.png",
      },
    ],
  },

  insurance: {
    title: "Insurance",
    desc: "GeoAI transforms spatial and environmental data into actionable intelligence for insurance and risk assessment.",
    image: "/images/application/insurance/insurance.png",

    subtopic: [
      {
        title: "Crop Insurance",
        desc: "Assess agricultural risk and crop conditions using Earth Observation intelligence.",
        img: "/images/application/insurance/sub/1.png",
      },
      {
        title: "Damage Assessment",
        desc: "Rapidly assess damage after climate and natural hazard events.",
        img: "/images/application/insurance/sub/2.png",
      },
      {
        title: "Risk Analytics",
        desc: "Transform spatial and environmental data into measurable risk intelligence.",
        img: "/images/application/insurance/sub/3.png",
      },
      {
        title: "Yield Estimation",
        desc: "Estimate agricultural yields to improve underwriting and risk assessment.",
        img: "/images/application/insurance/sub/4.png",
      },
    ],
  },

  renewableEnergy: {
    title: "Renewable Energy",
    desc: "Use Earth Observation and spatial AI to identify opportunities, assess environmental conditions and monitor renewable energy assets.",
    image: "/images/application/renewable/Renewable.png",

    subtopic: [
      {
        title: "Site Suitability",
        desc: "Identify optimal locations for renewable energy development.",
        img: "/images/application/renewable/sub/1.png",
      },
      {
        title: "Solar Intelligence",
        desc: "Analyse solar potential and environmental conditions for solar deployment.",
        img: "/images/application/renewable/sub/2.png",
      },
      {
        title: "Land Assessment",
        desc: "Assess land characteristics and constraints for renewable energy projects.",
        img: "/images/application/renewable/sub/3.png",
      },
      {
        title: "Asset Monitoring",
        desc: "Monitor renewable energy assets and surrounding environmental conditions.",
        img: "/images/application/renewable/sub/4.png",
      },
    ],
  },

  forestry: {
    title: "Forestry",
    desc: "GeoAI-powered intelligence for understanding forest change, land-use dynamics and environmental conditions.",
    image: "/images/application/forest/forestry.png",

    subtopic: [
      {
        title: "Forest Monitoring",
        desc: "Track forest cover, health and deforestation trends.",
        img: "/images/application/forest/sub/2.png",
      },
      {
        title: "Change Detection",
        desc: "Detect changes across forest landscapes with high-resolution insights.",
        img: "/images/application/forest/sub/1.png",
      },
      {
        title: "Land-Use Change",
        desc: "Analyse land-use dynamics and encroachment across forest regions.",
        img: "/images/application/forest/sub/3.png",
      },
      {
        title: "Carbon Intelligence",
        desc: "Enable carbon accounting and support climate action through forest intelligence.",
        img: "/images/application/forest/sub/4.png",
      },
    ],
  },
} as const;

// Flatten the keyed object into the array shape the tab UI needs.
const applications = Object.entries(applicationsData).map(([id, app]) => ({
  id,
  shortLabel: app.title,
  label: app.title,
  alt: app.title,
  description: app.desc,
  image: app.image,
  subtopic: app.subtopic,
}));

export default function Applications() {
  return (
    <section
      id="applications"
      className="relative w-full min-h-screen bg-[url('/images/site-bg/bg2.png')] bg-cover bg-center bg-no-repeat px-5 py-24 text-white  md:overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <TopographicBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto container">
        {/* HEADER */}
        <div className="header">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            {/* Left */}
            <div>
              <h2 className="w-full max-w-2xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                APPLICATIONS
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-7 text-white md:text-lg">
                Earth Intelligence across critical sectors - transforming Earth
                Observation, spatial data and AI into actionable intelligence.
              </p>
            </div>

            <div className=" hidden lg:flex flex-col gap-3">
              <h3 className="text-lg font-semibold uppercase tracking-widest text-white">
                <span className="block">real</span>
                <span className="block">Insights</span>
                <span className="block">Real impact</span>
                <span className="block">Accross Sector</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">

        <ApplicationTabs applications={applications} />
        </div>
        <div className="lg:hidden">

        <ApplicationExpanded applications={applications}  />
        </div>
      </div>
    </section>
  );
}
