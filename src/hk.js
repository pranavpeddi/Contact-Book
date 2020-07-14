import React, {useState, useEffect}from 'react';
import Button from '@material-ui/core/Button'

//  function countApp()
// {
//     const [count,setCount]=useState(0);


// return(
//     <div>
//         <h2>You clicked {count} times</h2>
//         <button onClick={()=>setCount(count+1)}>
//             Click me
//         </button>
//     </div>
// );
// }




  function CountApp() {
    const [count, setCount] = useState(0);

    useEffect(()=>
    {
            document.title='you clicked ${count} times';
    });

    return (
      <div className="App">
        <p>You clicked {count} times</p>
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
         Click me
        </Button>
      </div>
    );
  }

export default CountApp;

