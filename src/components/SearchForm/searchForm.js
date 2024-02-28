import { styled } from "styled-components";

const StyledSearchForm = styled.form`

    display: flex;
    align-items: center;
    gap: 8px;
    border: 2px solid transparent;
    background: linear-gradient(#031936, #031936) padding-box, linear-gradient(90deg, rgba(201,140,241,1) 0%, rgba(123,120,229,1) 100%);
    border-radius: var(--radius-default);
    padding: 8px;

    input{

    color: var(--color-fixed-white);
    min-width: 256px;
    background-color: #031936;
    
    }

    input::placeholder{
        color: var(--color-grey-900);
    }

    button{

        width: 24px;
        height: 24px;
        background-color: transparent;

    img{
        width: 18px;
        height: 18px;

    }

}
`

export default StyledSearchForm