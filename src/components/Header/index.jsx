import SearchForm from "../SearchForm/index.jsx";
import StyledHeader from "./header.js";

const Header = () => {

return(

    <StyledHeader>

    <img src="./src/assets/logo.svg" alt="Logo do aplicativo Space App. À esquerda, um planeta com um anel em um degradê roxo e, à direita, o nome SpaceApp" />

    <SearchForm/>

    </StyledHeader>

    

)

}

export default Header