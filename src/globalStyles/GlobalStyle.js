import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{

    --color-icon-active: #7B78E5;
    --color-primary: #001634;
    --color-primary-light: #04244F;
    --color-fixed-white: #fff;
    --color-grey-900: #D9D9D9;
    --color-grey-90030: #D9D9D930;

    --font-gandhi-regular: 'GandhiSansRegular';
    --font-gandhi-bold: 'GandhiSansBold';

    --font-size-0: 2.5rem; /* 40px */
    --font-size-1: 2rem; /* 32px */
    --font-size-2: 1.5rem; /* 24px */
    --font-size-3: 1.125rem; /* 18px */
    --font-size-4: 1rem; /* 16px */

    --gap-nav-list: 1rem;
    --gap-nav-item: 1rem;

    --height-header: 120px;
    --height-nav-item-img: 34px;

    --margin-default: 0.5rem;

    --padding-app: 0 12px;
    --padding-nav-item: 0 8px;

    --radius-default: 4px;
    --radius-button: 8px;


    --width-nav-item-img: 34px;
    --width-nav-bar: 256px;


}

`

export default GlobalStyle