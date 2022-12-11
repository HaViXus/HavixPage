export interface FilterTagProps {
    key: number;
    className: string;
    disabled: boolean;
    "data-tag-index": number;
    tabIndex: -1;
	label: string;
    onDelete: (event: any) => void;
}
