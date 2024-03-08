import StyledNavItem from "./navigationItem.js";

const NavigationItem = ({ children, activeImg, inactiveImg, altText, active = false }) => {

    return (

        <StyledNavItem $active={active} onClick={(active) => !active}>
            <img src={active ? activeImg : inactiveImg} alt={altText}/>
            {children}
        </StyledNavItem>

    )

}

export default NavigationItem