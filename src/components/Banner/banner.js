import { styled } from "styled-components";

const StyledBanner = styled.div`

    background: url("./src/assets/banner.png");
    background-size: cover;
    width: 95%;
    height: 364px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    
    h1{
        
        color: var(--color-fixed-white);
        font-size: var(--font-size-0);
        width: 30%;
        margin-left: 38px;

    }

`

export default StyledBanner