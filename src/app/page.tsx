import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {
  HowItWorks,
  Talent,
  Companies,
  Tournaments,
  Networking,
  News,
  Closing,
} from "./components/Sections";
import { Newsletter } from "./components/Newsletter";
import { getMessages } from "./language";

export default function Home() {
  const content = getMessages("es");

  return (
    <>
      <Header content={content} />
      <main>
        <Hero content={content.hero} />
        <HowItWorks content={content.howItWorks} />
        <Talent content={content.talent} />
        <Companies content={content.companies} />
        <Tournaments content={content.tournaments} />
        <Networking content={content.networking} />
        <News content={content.news} />
        <Newsletter content={content.newsletter} />
        <Closing content={content.closing} />
      </main>
      <Footer
        content={content.footer}
        brand={content.brand}
        accessibility={content.accessibility}
      />
    </>
  );
}
