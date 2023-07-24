import styled from "styled-components";

export const NavStyle = styled.nav`
    
`

export const NavItemsStyle = styled.li`
    display: flex;
    flex-direction: row;

    &.showNavBar {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
        margin: 15px;
        width: 100%;
    }

    & .navLink {
        margin-right: 1rem;
        opacity: .8;
        padding: 0%.15rem 0.35rem;
        border: 1px solid transparent;
        border-radius: 3px;
        transition: all .2s ease;
        &:hover {
            border: 1px solid #ddd;
        }
        &.active {
            background: #fff;
            color: #000;
            transition: all 0.2s ease;
        }
        &.showNavBar {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        }
    }
`


