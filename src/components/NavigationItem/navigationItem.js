import { styled, css } from "styled-components";


const StyledNavItem = styled.li`

    display: flex;
    align-items: center;
    gap: var(--gap-nav-item);
    
    ${({$active}) => $active ? css`color: var(--color-icon-active);` : css`color:var(--color-grey-900);`}
    font-size: var(--font-size-3);

    cursor: pointer;
    
    width: fit-content;

    padding: var(--padding-nav-item);

    img{

        width: var(--width-nav-item-img);
        height: var(--height-nav-item-img);

    }

`

export default StyledNavItem