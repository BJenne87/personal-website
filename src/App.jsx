import Header from './Components/Header.jsx'
import Body from './Components/Body.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {
    return(
       <div className='layout'>
        <Header/>
        <main>
        <Body/>
        </main>
        <Footer/>
       </div>
    )
}

export default App;