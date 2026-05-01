import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
      id: "work",
      onEnter: () => toggleIcons(true),
      onEnterBack: () => toggleIcons(true),
      onLeave: () => toggleIcons(false),
      onLeaveBack: () => toggleIcons(false),
    },
  });

  function toggleIcons(hide: boolean) {
    const icons = document.querySelector(".icons-section") as HTMLElement;
    if (icons) {
      icons.style.opacity = hide ? "0" : "1";
      icons.style.pointerEvents = hide ? "none" : "auto";
      icons.style.transition = "opacity 0.3s ease";
    }
  }

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Facial Recognition Alert System</h4>
                  <p>AI / Security System</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, OpenCV, Face Recognition, SMTP (Email Alerts)</p>
            </div>
            <WorkImage image="/images/project1.png" alt="Facial Recognition Alert System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Behavior-Threat Intelligence System</h4>
                  <p>AI / Security / Surveillance</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Computer Vision, Deep Learning, OpenCV</p>
            </div>
            <WorkImage image="/images/project2.png" alt="Behavior-Threat Intelligence System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>StudyFlow (Smart Study App)</h4>
                  <p>Mobile App</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React Native, Expo, TypeScript</p>
            </div>
            <WorkImage image="/images/project3.png" alt="StudyFlow Smart Study App" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>AI Video Generation SaaS</h4>
                  <p>Web App / SaaS</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, TypeScript, Node.js, AI APIs</p>
            </div>
            <WorkImage image="/images/project4.png" alt="AI Video Generation SaaS" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>AI Network Guardian</h4>
                  <p>Web app / Cyber Security</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python. Node.js, Typescript, React</p>
            </div>
            <WorkImage image="/images/project5.png" alt="AI Network Guardian" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>AI Pathfinding Visualizer</h4>
                  <p>Web App / Algorithm Visualization</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>JavaScript, React, DSA Algorithms</p>
            </div>
            <WorkImage image="/images/react.webp" alt="AI Pathfinding Visualizer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
