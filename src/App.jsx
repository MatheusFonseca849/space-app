import AsideNavigation from "./components/AsideNavigation"
import Header from "./components/Header"
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
    </main>
    </>
  )
}

export default App
