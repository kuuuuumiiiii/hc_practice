import { useEffect, useState } from 'react';
import './App.css';
import { InputForm } from './components/InputForm';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { useMediaQuery } from 'react-responsive';

function App() {
  // 初期状態としてlocalStorageからデータを取得
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem('taskList');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // taskListが変更されるたびにlocalStorageに保存
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });

  
  return (
    <div className={isLargeScreen ? 'body-large' : 'body'}>
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList}/>
      <TodoList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
