import { Banner, AboutMe, ContactMe, Skills, Projects } from "@/components";

export default async function HomePage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        <Banner />
        <div className="section-container">
          <AboutMe />
        </div>
        <Projects />
        <div className="section-container">
          <Skills />
        </div>
        <ContactMe />
      </div>
    </>
  );
}
