import { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
//import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

// const abouts = [
//   {
//     title: "Frontend Development",
//     description: "I am a good web developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Backend Development",
//     description: "I am a good web developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Mobile Development",
//     description: "I am a good web developer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "MERN Stack",
//     description: "I am a good web developer",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"] | order(_updatedAt)';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Apps</span>
        <br />
        mean <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
