import { Task1 } from "./components/Task1";
import { Task2 } from "./components/Task2";
import { Task3 } from "./components/Task3";
import { Task4 } from "./components/Task4";
import { Task5 } from "./components/Task5";
import { Task6 } from "./components/Task6";
import { Task7 } from "./components/Task7";


function App() {

  let obj ={
    alt: 'Название картинки',
    img: "./images/joanna1.webp",
    title: "Описание поста",
    time: "1 минута"
  }

  let prod= [
     {
    type: "Free",
    price: 10050,
    content: "банан"
  },
  {
    type: "Base",
    price: 0,
    content: "яблоко"
  },
 {
    type: "Premium",
    
    content: "апельсин"
  }
  ]
  return (
    <>

    <Task1/>
    <Task2/>
    <Task3/>
    <Task4 obj= {obj}/>
    <Task5 {...obj}/>

    {prod.map((el)=> <Task6 {...el}> Sign up for </Task6>
    )}
{/* 
     <Task6 obj={prod[0]}>Жми сюда</Task6>
    <Task6 obj={prod[1]}>Жми сюда</Task6>
    <Task6 obj={prod[2]}>Жми сюда</Task6>   */}

<Task7/>

    </>
  );
}

export default App;
