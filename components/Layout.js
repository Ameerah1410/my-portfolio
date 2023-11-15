import Header from "./Header";
import "@fontsource/roboto-slab";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: "Roboto Slab";
        background-image: url("../static/background.jpg");
        background-size: cover;
        background-position: center;
      }
      .layout {
        max-width: 800px;
        margin: 0 auto;
        overflow: hidden;
      }
      main {
        position: relative;
        z-index: 1;
      }
    `}</style>
  </div>
);

export default Layout;
