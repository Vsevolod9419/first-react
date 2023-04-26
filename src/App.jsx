import { Task1 } from "./components/Task1";
import { Task2 } from "./components/Task2";
import { Task3 } from "./components/Task3";
import { Task4 } from "./components/Task4";
import { Task5 } from "./components/Task5";


function App() {

  let obj ={
    alt: 'Название картинки',
    img: "./images/joanna1.webp",
    title: "Описание поста",
    time: "1 минута"
  }

  return (
    <>

    <Task1/>
    <Task2/>
    <Task3/>
    
    <Task4 obj= {obj}/>


    <Task5 {...obj}/>

    </>
  );
}

export default App;
