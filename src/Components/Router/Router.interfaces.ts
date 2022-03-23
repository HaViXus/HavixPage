import React from "react";

export interface RouterPath {
    path: string;
    pageComponent: React.ReactNode;
    nameToDisplay: string;
    display?: boolean;
    category?: string;
    isRoot?: boolean;
}
