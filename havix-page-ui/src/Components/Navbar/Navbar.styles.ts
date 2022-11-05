import styled from "styled-components";
import { Colors } from "../../ThemeContext/ThemeContext.styles";
import { StyledNavbarTileProps } from "./Navbar.interfaces";

export const StyledNavbar = styled.div`
    display: flex;
    height: 6%;
    width: 100%;
    min-height:44px;
    background-color: ${Colors.darkGray};
    font-family: "PressStart";
`;

export const StyledNavbarTile = styled.div<StyledNavbarTileProps>`
    display: flex;
    position: relative;
    height: 100%;
    padding: 0 3rem 0 3rem;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background-color: ${Colors.darkGray};
    user-select: none;
    text-decoration:${(props) => props.isSelected ? "underline" : "none"};
    cursor: pointer;
    border-right:${(props) => props.isLast ? "none" : `solid 2px ${Colors.gray}`};

    &:hover{
        background-color: ${Colors.lightGray};
    }
`;

export const StyledNavbarMenu = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    top: 100%;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.darkGray};
    z-index: 2;
`;

export const StyledNavbarMenuTile = styled.div<StyledNavbarTileProps>`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    padding: 0.7rem 0;
    background-color: ${Colors.darkGray};
    border-bottom: 2px solid #aaaaaa;
    user-select: none;
    font-weight:${(props) => props.isSelected ? "bold" : "none"};
    color: ${(props) => props.isSelected ? "red" : "#ffffff"};
    cursor: pointer;

    &:hover{
        background-color: ${Colors.lightGray};
    }
`;
