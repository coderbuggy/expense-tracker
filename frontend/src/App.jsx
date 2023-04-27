import styled from 'styled-components'
import bg from '../src/img/bg.png'
import {MainLayout} from './styles/Layout'
import Orb from './Components/Orb/Orb'

function App() {

  return (
    <AppStyled bg={bg} className='App'>
     <Orb />
       <MainLayout>
        <h1>test</h1>
       </MainLayout>
    </AppStyled>
  )
}


const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
`;



export default App
