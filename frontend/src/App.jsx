import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>DevOps & SRE</h1>
        <p>Frontend em React para o repositório devops-satc</p>
      </header>

      <section>
        <h2>O que é DevOps?</h2>
        <p>
          DevOps é uma cultura e conjunto de práticas que unem desenvolvimento e
          operações para entregar software com mais rapidez e confiabilidade.
        </p>
        <ul>
          <li>Automação</li>
          <li>Integração contínua</li>
          <li>Entrega contínua</li>
          <li>Colaboração entre times</li>
        </ul>
      </section>

      <section>
        <h2>O que é SRE?</h2>
        <p>
          SRE (Site Reliability Engineering) aplica engenharia de software para
          resolver problemas de confiabilidade e escalabilidade.
        </p>
      </section>

      <section>
        <h2>DevOps vs SRE</h2>
        <table>
          <thead>
            <tr>
              <th>DevOps</th>
              <th>SRE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cultura</td>
              <td>Engenharia</td>
            </tr>
            <tr>
              <td>Colaboração</td>
              <td>Métricas (SLO, SLA, SLI)</td>
            </tr>
            <tr>
              <td>Automação geral</td>
              <td>Automação orientada a confiabilidade</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer>
        <p>Projeto DevOps SATC - React</p>
      </footer>
    </div>
  );
}

export default App;