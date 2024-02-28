import StyledSearchForm from "./searchForm.js";

const SearchForm = () => {

return(
    <StyledSearchForm>
        <input type="text" placeholder="O que você procura?"/>
        <button><img src="./src/assets/searchIcon.svg" alt="Icone de uma lupa" /></button>
    </StyledSearchForm>
)

}

export default SearchForm