import { useEffect } from 'react';
import './App.css';
import {
  useGetToDoByIdQuery,
  useGetToDosQuery,
  useLazyGetToDoByIdQuery,
} from "./services/api";
// import Demo from './components/useReducer/Demo';
// import Demo from './components/useContext/Demo';
// import Counter from './components/Counter';


function App() {
   const { data = [], isError, isLoading } = useGetToDosQuery();

  useEffect(() => {
    if (isError) console.log("Error occured");
  }, [data]);

  // return (
  //   <div>
  //     {/* <Demo /> */}
  //     {/* <Demo /> */}
  //     {/* <Counter /> */}
  //   </div>
  // );

  return isLoading ? (
    <div> Loading ...</div>
  ) : (
    <div>
      {data.map((d) => {
        return <div key={d.id}>{d.title}</div>;
      })}
    </div>
  );
}

export default App;
