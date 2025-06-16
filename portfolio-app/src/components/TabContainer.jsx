import React, { useState } from "react";
import "./TabContainer.css";

const tabs = [
  { label: "Web Development", key: "web" },
  { label: "Game Development", key: "game" },
  { label: "UI/UX Design", key: "ui" },
];

const tabContent = {
  web: {
    // TODO: Replace with actual image path
    image: "../assets/images/Logan.png",
    header: "Web Development",
    // TODO: Replace with actual content
    paragraph:
      "Test: I am a passionate developer with a love for building engaging and performant web applications. With a strong background in JavaScript, React, and modern web technologies, I enjoy solving complex problems and delivering high-quality user experiences.",
  },
  game: {
    // TODO: Replace with actual image path
    image: "../assets/images/Logan.png",
    header: "Game Development",
    // TODO: Replace with actual content
    paragraph:
      "Test: I have a keen interest in game development, particularly in creating immersive experiences using Unity and Unreal Engine. I enjoy exploring game mechanics, storytelling, and the technical challenges of building games.",
  },
  ui: {
    // TODO: Replace with actual image path
    image: "../assets/images/Logan.png",
    header: "UI/UX Design",
    // TODO: Replace with actual content
    paragraph:
      "Test: I believe that great user interfaces and experiences are crucial for the success of any application. I focus on creating intuitive designs that enhance usability and engagement, using tools like Figma and Adobe XD.",
  },
};

function TabContainer() {
  const [selected, setSelected] = useState("web");

  const { image, header, paragraph } = tabContent[selected];

  return (
    <div className="tabcontainer-outer">
      <div className="tabcontainer-box">
        {/* Tab container top banner */}
        <div className="tabcontainer-banner">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tabcontainer-tab${
                selected === tab.key ? " active" : ""
              }`}
              onClick={() => setSelected(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab container body */}
        <div className="tabcontainer-body">
          {/* Tab container image */}
          <div className="tabcontainer-image-wrapper">
            <img src={image} alt={header} className="tabcontainer-image" />
          </div>

          {/* Tab container content */}
          <div className="tabcontainer-content">
            <h2 className="tabcontainer-header">{header}</h2>
            <p className="tabcontainer-paragraph">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContainer;
