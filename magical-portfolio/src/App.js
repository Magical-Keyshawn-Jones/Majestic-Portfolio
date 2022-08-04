import './App.css';
import profilePic from './Images/Keyshawn_Profile_Pic2.jpg'

function App () {
  return (
    <main>
      <header>
        <div>
          <p className='KeyshawnJones'>Keyshawn Jones</p>
          <p>Full Stack Web Developer | Software Engineer</p>
        </div>
      </header>
      <section>
        <div>
          <div className='profilePic'>
            <img src={profilePic} alt='Profile_Picture'/>
          </div>
        </div>
        <div className='technicalSkills'>
          <h1>Technical Super Powers</h1>
          <p className='lineSpace' ><span className='bold'>Frontend: </span>HTML, CSS, JavaScript, React.js, Redux, Hooks, Context API, Yup,  Jest, Cypress, Axios, Responsive Design</p>
          <p><span className='bold' >Backend: </span>Node.js, Express, SQL, Git CLI, GitHub, VS Code, Vercel, Heroku, Knex</p>
        </div>
      </section>
        <aside>
          <h1>About Me</h1>
          <p> I create the best code and solutions for any company as a full stack software engineer. Attention to detail, communication, and hard work are how I operate in any coding environment. Good vibes and positive energy are what you'll notice when I'm under pressure. Your company will make the best investment by hiring me.
            <br/>
            <br/>
            ~My nickname is Doorknob
            <br/>
            ~I love the color pink
            <br/>
            ~I love to make people laugh
            <br/>
            <br/>
            I love to code and work on my side projects. I play video games and hangout with friends in my spare time.
            My future goal is to become a millionaire by the time I'm 30.
            My dream to live a comfortable life with my family someday is a powerful dream that drives me.
          </p>
        </aside>
    </main>
  )
}

export default App;
