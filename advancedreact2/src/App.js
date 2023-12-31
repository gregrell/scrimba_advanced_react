import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import Advanced from './Components/Advanced/Advanced';
import Layout from './Components/Routing/Layout';
import Library from './Components/Routing/Library';
import PerformancePage from './Components/Routing/Performance'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Advanced/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/performance" element={<PerformancePage/>}/>

      </Route>
    )
  )

  

  return (
    <div className="App">
      <RouterProvider router={router}/>


    {/*   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

export default App;
