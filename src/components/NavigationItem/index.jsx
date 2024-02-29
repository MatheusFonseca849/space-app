

const NavigationItem = ({ children, activeImg, inactiveImg, altText, active = false }) => {
console.log(active)
    return (

        <li>
            <img src={active ? activeImg : inactiveImg} alt={altText} />
            {children}
        </li>

    )

}

export default NavigationItem