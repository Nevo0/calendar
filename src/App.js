import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './App.css'

import { Time } from './Time';

function App() {
  const tiem_list= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  return (
    <div className="App">
      <header className="calendar-header">
      <Calendar />
      <Time tiem_list={tiem_list}/>
      
      </header>
    </div>
  );
}

export default App;
