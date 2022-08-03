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
    </main>
  )
}

export default App;
