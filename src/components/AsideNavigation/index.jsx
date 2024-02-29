import NavigationItem from "../NavigationItem"
import StyledAside from "./asideNavigation"


const AsideNavigation = () => {

return(

<StyledAside>
    <nav>
        <ul>
            <NavigationItem
            activeImg="./public/icons/home-ativo.png" 
            inactiveImg="./public/icons/home-inativo.png"
            altText="Ícone branco mostrando uma casa"
            active>
                Início
            </NavigationItem>

            <NavigationItem
            activeImg="./public/icons/mais-vistas-ativo.png" 
            inactiveImg="./public/icons/mais-vistas-inativo.png"
            altText="Ícone branco mostrando um olho"
            >
                Mais Vistas
            </NavigationItem>

            <NavigationItem
            activeImg="./public/icons/mais-curtidas-ativo.png" 
            inactiveImg="./public/icons/mais-curtidas-inativo.png"
            altText="Ícone branco mostrando uma mão com o polegar levantado"
            >
                    Mais Curtidas
            </NavigationItem>

            <NavigationItem
            activeImg="./public/icons/novas-ativo.png" 
            inactiveImg="./public/icons/novas-inativo.png"
            altText="Ícone branco mostrando um ponto com traços ao seu redor apontando para ele, formando o desenho de uma estrela" 
            >
                    Novas
            </NavigationItem>

            <NavigationItem
            activeImg="./public/icons/surpreenda-me-ativo.png" 
            inactiveImg="./public/icons/surpreenda-me-inativo.png"
            altText="Ícone branco mostrando uma lâmpada"
            >
                Surpreenda-me
            </NavigationItem>
        </ul>
    </nav>
</StyledAside>

)

}

export default AsideNavigation