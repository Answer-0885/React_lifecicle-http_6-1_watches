import './App.css';
import Watches from './components/Watches';

const App = () => {
  return (
    <Watches items={[{ name: 'UTC', zone: 0 }]}/>
  );
}

export default App;