import './App.css';
import Effectful from './Hooks/Effectful';
import Stateful from './Hooks/Stateful';
import Context from './Hooks/context';
import RefHook from './Hooks/refHook';
import MemoHook from './Hooks/memoHook';
import Counter from './Project/counter';
import SearchData from './Project/Search';
import UserForm from './Project/Form';
import QuizApp from './Project/quizApp';
import TodoData from './Project/Todo';


function App() {

  return (
    <div className='App'>
      {/* <Stateful /> */}
      {/* <Effectful/> */}
      {/* <Context/> */}
      {/* <RefHook/> */}
      {/* <MemoHook /> */}
      {/* <Counter/> */}
      {/* <SearchData/> */}
      {/* <UserForm/> */}
      {/* <QuizApp/> */}
      <TodoData/>
    </div>
  );
}

export default App;
