import './App.css';
import CreateReactApp from './component/bai_tap_buoi_1';
import Exercise1 from './component/ex1';
import Form from './component/ex2';
import Languages from './component/ex3';
import Timer from './component/ex4';
import Ex5 from './component/ex5';
import TodoList from './component/todo-list';

function App() {
  return (
    <div className="App">
      <CreateReactApp/>
      <Exercise1/>
      <Form/>
      <Languages/>
      <Timer/>
      <Ex5/>
      <TodoList/>
    </div>
  );
}

export default App;
