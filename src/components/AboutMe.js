import React from "react";
import me from "../images/me.jpg";

function AboutMe() {
  return (
    <div className="display aboutMe">
      <h2 className="aboutMeHeader">About me</h2>
      <img className="myPic" src={me} alt="Me" />
      <p className="bio">
        Hello! My name is Jacob and I live in the Kansas City metro area. I
        graduated from the University of Missouri - Kansas City in 2021 with a
        BA in Economics. I have long had an interest in programming. I've done
        some self-teaching throughout the years but, in the summer of 2022, I
        decided I wanted to get serious about persuing a career in software
        engineering and enrolled in the Full-Stack Coding Bootcamp at the
        University of Kansas.Upon my completion of this bootcamp in May of 2023,
        I will receive my full-stack certification. For more information on my
        coding competencies, please see the <a href="">Resume</a> section of
        this site.
      </p>
      <p>
        Outside of programming, I enjoy staying active. I like sports,
        especially soccer and climbing, and I love movies and music. I am
        recently married and a new father to a beautiful baby girl.
      </p>
    </div>
  );
}

export default AboutMe;
