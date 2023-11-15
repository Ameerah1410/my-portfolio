import Layout from "../components/Layout";

export default () => (
  <Layout>
    <div className="container">
      <div>
        <h1 className="heading">About Me</h1>
        <p>
          I'm on a transformative journey, transitioning from roles in data
          analytics and sports science to pursue a career as a Fullstack Web
          Developer. With a foundation in administration, data services, and a
          BSc in Sport Science, my diverse experiences have cultivated
          adaptability and a commitment to excellence.
        </p>
        <p>
          My professional journey includes roles such as Data Services Associate
          at Boldr - Peerspace, where I refined processes, identified
          opportunities for improvement, and collaborated effectively with
          internal and external teams. As a COVID-19 Vaccination Administrator
          at Parow Family Pharmacy, I managed the vaccine rollout program, led a
          team, and resolved customer queries efficiently.
        </p>
        <p>
          As a Sport Scientist Intern at BioDynamics Institute, I honed
          analytical skills, executed exercise programs, and produced detailed
          reports. My proficiency extends to administration, customer service,
          and team management, as demonstrated during my tenure at A&L Autoworks
          and Western Cape Touch Association.
        </p>
        <p>
          With a BSc in Sport Science from Stellenbosch University and TEFL
          certification, I possess a solid educational foundation. Now, as a
          Fullstack Web Developer Student, I am committed to mastering the art
          of web development, combining technical proficiency with a
          collaborative mindset.
        </p>
        <p>
          Join me on this journey as I leverage my skills in problem-solving,
          adaptability, and teamwork to contribute to the dynamic field of web
          development. Let's build a digital future together!
        </p>
      </div>
    </div>
    <style jsx>{`
      .container {
        max-width: 800px;
        margin-top: 150px;
        margin-left: 350px;
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
