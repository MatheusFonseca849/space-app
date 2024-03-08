import AsideNavigation from "./components/AsideNavigation"
import Banner from "./components/Banner"
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
        <section id="mainContent">
          <Banner><h1>A galeria mais completa de fotos do espaço!</h1></Banner>
          
        </section>
    </main>
    </>
  )
}

export default App
