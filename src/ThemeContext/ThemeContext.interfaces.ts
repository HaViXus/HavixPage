export enum ThemeElement {
    pageColor = "pageColor",
    defaultTextColor = "defaultTextColor"
}

export type ThemeConfig = {
    [key in ThemeElement]: string;
};

export interface PageStyledProps {
    getThemeStyle: (element: ThemeElement) => string;
}
