import * as React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AuthProvider } from './context/userAuthContext';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home';
import Main from './pages/Main';
import { ProtectedRoutes } from './components/ProtectedRoutes';
function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/main/' element={<ProtectedRoutes>
          <Main/>
        </ProtectedRoutes>}/>
      </Routes>
      </AuthProvider>
    </Router>
    
    </ChakraProvider>
  )
}

export default App;
