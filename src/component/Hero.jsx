import MaskRevealUp from "/src/Text/MaskRevealUp";
import KineticCenterBuild from "../Text/KineticCenterBuild";

function Hero() {
  return (
    <>
   
      <div className="main-home">
        <div className="home-hero">
          <div className="box1">
            <div className="highlight-text">
            <KineticCenterBuild
               phrases={["PORTFOLIO","  ", "FULL STACK DEVELOPER","  ", "SEO ENTHUSIAST", "WEB DEVELOPER"]}
               className="text-navbar"
               interval={2000}
             /></div>
             <div className="highlight-text-heading">
             <MaskRevealUp 
             className="text-heading"
              delay={1000}
              lines={["Hello, I'm Adil Ehtesham"]} />
             </div>

             <div className="highlight-text-paragraph">
    <MaskRevealUp
      className="text-bio"
      delay={1000}
      lines={["I’m a MERN Stack Developer focused on building modern, responsive, and scalable web applications.","I specialize in React.js, Node.js, Express.js, and MongoDB, with hands-on experience in REST APIs, authentication, and deployment","I also bring practical SEO knowledge to build fast, user-friendly, and search-optimized websites."]}
    /></div>
  </div>
          <div className="box2">
            <div className="circle"></div>
            <img className="hero-image" src="img/image1.png" alt="Hero Image" />
          </div>
        </div>
      </div>
</>
  );
}

export default Hero;