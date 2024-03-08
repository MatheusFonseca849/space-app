import { styled } from "styled-components";


const StyledAside = styled.aside`

width: var(--width-nav-bar);

padding: 32px;

    ul{

        display: flex;
        flex-direction: column;
        gap: var(--gap-nav-list);

        li{

            font-size: var(--font-size-2);

        }

    }

`

export default StyledAside