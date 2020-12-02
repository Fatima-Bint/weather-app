import React, {useState} from 'react'
//import Loader from './components/Loader'
//import BrowserRoute{Route, Switch} from 'react-router-dom'

export const AppContext = React.createContext();


function App() {
  const [isloading, setIsLoading] = useState(false)

  return (
    <AppContext.Provider value={{isloading, setIsLoading}}>

    <div className='App'>
      {/* <Switch>
        <Route path='/' exact= {true} component={Home}/>
      </Switch> */}

    </div>


    </AppContext.Provider>

    
    
  )
}

export default App
