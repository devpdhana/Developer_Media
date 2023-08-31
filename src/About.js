import profileImage from './images/Dhan_profile.jpg';

const About = () => {
  return (
    <article className="glowing-bg about-container">
      <div className="about-profile">
        <img src={ profileImage } alt="Dhanasekar E" className="profile-photo" />
        <h1>About Me</h1>
        <p>
          I am a passionate developer with skills in web development, Android app development, and Python programming.
        </p>
        <p>
          In web development, I specialize in HTML, CSS, JavaScript, and ReactJS. For Android app development,
          I have experience with Java, XML, SQL, and Firebase.
        </p>
      </div>
    </article>

  )
}
export default About