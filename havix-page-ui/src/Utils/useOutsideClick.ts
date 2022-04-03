import { useEffect } from "react";


export const useOutsideClick = (ref: React.MutableRefObject<HTMLInputElement>, onOutsideClick: (event: any) => void) => {

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			onOutsideClick(event);
		}
	};

	useEffect(() => {
		document.addEventListener("mouseup", handleClickOutside);
		return () => {
			document.removeEventListener("mouseup", handleClickOutside);
		};
	}, [ref]);
};