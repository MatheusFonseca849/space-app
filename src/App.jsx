import AsideNavigation from "./components/AsideNavigation"
import Banner from "./components/Banner"
import Header from "./components/Header"
import MainSection from "./components/MainSection"
import GlobalStyle from "./globalStyles/GlobalStyle"
import ResetCss from "./globalStyles/ResetCss"


function App() {

  return (
    <>
    <GlobalStyle/>
    <ResetCss/>
      <Header/>
    <main>
      <AsideNavigation/>
        <MainSection/>
          
    </main>
    </>
  )
}

export default App
