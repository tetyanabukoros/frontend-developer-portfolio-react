import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>Skills</h1>

          <ul className="content-list">

            <li className="content-list__item">
              <h2>Web</h2>

              <p>HTML5, CSS3, JavaScript (ES6+), TypeScript, DOM</p>
            </li>

            <li className="content-list__item">
              <h2>Frameworks</h2>

              <p>React, Angular, Gatsby, Bootstrap, Material-UI, Sass/SCSS</p>
            </li>

            <li className="content-list__item">
              <h2>Version Control</h2>

              <p>Git, GitHub, Bitbucket</p>
            </li>

            <li className="content-list__item">
              <h2>APIs</h2>

              <p>REST, GraphQL</p>
            </li>

            <li className="content-list__item">
              <h2>Design</h2>

              <p>Responsive Design, Mobile-First, Component-Based Architecture, SOLID, DRY</p>
            </li>

            <li className="content-list__item">
              <h2>Tools</h2>

              <p>VS Code, Chrome DevTools, Postman, Figma, Lighthouse, Jira, Confluence, Miro</p>
            </li>
          </ul>
        </div>
      </main>

    </>
  );
}

export default Home;