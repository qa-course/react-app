import logo from './logo.svg';
import './App.css';
import { compareTwoNumbers, sumTwoNumbers } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Мы на ветке <code>test-with-coverage</code>. Здесь мы добавили две новые функции и покрыли их тестами.
        </p>
        <p>
          Результат работы функции <code>sumTwoNumbers</code>: { sumTwoNumbers(10, 4) }
        </p>
        <p>
          Результат работы функции <code>compareTwoNumbers</code>: { compareTwoNumbers(10, 4) }
        </p>
        <a
          className="App-link"
          href="https://github.com/qa-course/react-app/tree/test-with-coverage"
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
