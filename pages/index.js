import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <div className="container">
      <h1 className="heading">Ameerah Moos</h1>
      <p>
        I'm a passionate & aspiring web developer. Explore my work and get in
        touch!
      </p>
      <img
        className="image"
        src="../static/profilePic.png"
        alt="profile picture"
      />
    </div>
    <style jsx>{`
      .container {
        max-width: 800px;
        margin-top: 280px;
        margin-left: 300px;
        padding: 20px;
      }
      .heading {
        text-align: center;
      }
      p {
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default Home;
