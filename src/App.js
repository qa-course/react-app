import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Мы на ветке <code>main</code>. Этот код пойдет в production!
        </p>
        <a
          className="App-link"
          href="https://github.com/qa-course/react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Репозиторий проекта на GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
