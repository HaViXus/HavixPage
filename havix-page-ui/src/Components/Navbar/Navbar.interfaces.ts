import { RouterKeys } from "../Router/Router.interfaces";

export interface NavbarTileProps {
    id: RouterKeys;
    selectedTile?: string;
    isLast: boolean;
    isSelected: boolean;
}
export interface StyledNavbarTileProps {
    isLast: boolean;
    isSelected: boolean;
}

