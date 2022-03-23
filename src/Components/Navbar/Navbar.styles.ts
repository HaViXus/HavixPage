import styled from "styled-components";

export const StyledNavbar = styled.div`
    display: flex;
    height: 6%;
    width: 100%;
    min-height:44px;
    background-color: red;
`;

export const StyledNavbarTile = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    padding: 0 3rem 0 3rem;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background-color: black;
`;

export const StyledNavbarMenu = styled.div`
    display: flex;
    position: absolute;
    top: 100%;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem 0 1rem;
    font-size: 2rem;
    background-color: green;
`;

export const StyledNavbarMenuTile = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background-color: yellow;
`;
