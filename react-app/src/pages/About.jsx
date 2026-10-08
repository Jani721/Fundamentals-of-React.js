import profileImage from "../assets/thispersondoesnotexist.png";

function About() {
  return (
    <div className="about-page">
      <img
        src={profileImage}
        alt="Profile"
        className="profile-image"
      />

      <h1>About Me</h1>

      <p>
        Hellou my name is Julius L. Pelzer
      </p>

      <p>
        This website is a small React project where I have learned
        how to create multiple pages and navigate between them.
      </p>
    </div>
  );
}

export default About;