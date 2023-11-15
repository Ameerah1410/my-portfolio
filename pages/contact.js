import Layout from "../components/Layout";

export default () => (
  <Layout>
    <div className="container">
      <h1 className="heading">Contact Me</h1>
      <h3>Feel free to reach out to me via email or phone:</h3>
      <p>Email: ameerah14moos3@gmail.com</p>
      <p>Phone: +27 63-627-9185</p>
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
