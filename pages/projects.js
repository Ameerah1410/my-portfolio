import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <div className="container">
      <h1 className="heading">My Projects</h1>
      <div className="project">
        <h2>itunes search app</h2>
        <p>
          This fullstack app combines Express for the backend and React for the
          frontend to allow users to search for content within the iTunes and
          Apple Bookstore. Users can also add their favorite items to a list.
        </p>
        <p>react, express</p>
        <div className="links">
          <Link href="https://github.com/Ameerah1410/itunes-search-app">
            <p>GitHub Repository</p>
          </Link>
          <Link href="https://itunes-search-app-tapk.onrender.com">
            <p>Live Demo</p>
          </Link>
        </div>
      </div>

      <div className="project">
        <h2>hangman app</h2>
        <p>
          This is a simple Hangman game built using React. The game prompts the
          player to guess the name of a country within a limited number of
          attempts.
        </p>
        <p>react</p>
        <div className="links">
          <Link href="https://github.com/Ameerah1410/hangman-react-app">
            <p>GitHub Repository</p>
          </Link>
        </div>
      </div>

      <div className="project">
        <h2>hiking website</h2>
        <p>
          This website provides information on Cape Town's hiking trails, built
          with HTML and styled using CSS. Users can save trails for later and
          express their liking for each trail.
        </p>
        <p>html, css</p>
        <div className="links">
          <Link href="https://github.com/Ameerah1410/capstoneRepo">
            <p>GitHub Repository</p>
          </Link>
        </div>
      </div>

      <div className="project">
        <h2>todo app with authentication</h2>
        <p>
          his is a basic to-do application developed using React and Express.
          Users have the ability to add, edit, and delete tasks. Authentication
          is implemented through JWT tokens, with additional middleware for user
          registration, sign-in, and task protection.
        </p>
        <p>react, express, jwt</p>
        <div className="links">
          <Link href="https://github.com/Ameerah1410/todo-with-authentication">
            <p>GitHub Repository</p>
          </Link>
        </div>
      </div>

      <div className="project">
        <h2>my cv</h2>
        <p>
          My Curriculum Vitae (CV) developed using React, showcasing my skills
          and experience{" "}
        </p>
        <p>react</p>
        <div className="links">
          <Link href="https://github.com/Ameerah1410/my-cv-react">
            <p>GitHub Repository</p>
          </Link>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        max-width: 800px;
        margin-top: 100px;
        margin-left: 300px;
        padding: 20px;
      }
      .heading {
        text-align: center;
      }
      p {
        text-align: center;
      }
      .project {
        margin-bottom: 40px;
        border: 1px solid #ddd;
        padding: 20px;
        border-radius: 8px;
      }
      h2 {
        margin-bottom: 10px;
        text-align: center;
      }
      p {
        margin-bottom: 15px;
      }
      .links {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </Layout>
);
