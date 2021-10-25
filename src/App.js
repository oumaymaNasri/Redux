import './css/main.css';
import DisplayTodos from './Components/ListTask';
import Todos from './Components/AddTask';
import {motion} from 'framer-motion'

function App() {
  return (
    <div className="App">
      <motion.h1  
      initial={{y:-200}}
      animate={{y:0}}
      transition={{duration:0.5}}
      whileHover={{ scale: 1.1 }}
      >Welcome to my Todo App</motion.h1>
      <motion.div 
      initial={{y:1000}}
      animate={{y:0}}
      transition={{type:"spring", duration: 1}}>
        <Todos />
        <DisplayTodos />
     </motion.div>

    </div>
  );
}

export default App;
