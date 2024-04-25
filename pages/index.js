import { Hero } from "../sections";
import MainSection from "../sections/MainSection/MainSection";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};
const mainSectionTitles = {
  title: "Managed agency selection",
  subtitle: "strengthen your onboarding process",
};
const mainSectionProps = [
  {
    id: 1,
    icon: "faPenRuler",
    title: "Brief",
    description:
      "Complete brief writing or simple guidance on what to include, we've got you covered.",
  },
  {
    id: 2,
    icon: "faChartSimple",
    title: "Search",
    description:
      "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
  },
  {
    id: 3,
    icon: "faPeopleArrows",
    title: "Pitch",
    description:
      "Comprehensive pitch management, including comms, diary management and pitch hosting.",
  },
];

export default function Home() {
  return (
    <>
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </>
      <div>
        <Hero {...heroProps} />
        <MainSection {...{ ...mainSectionTitles, mainSectionProps }} />
      </div>
    </>
  );
}
