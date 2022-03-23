import React from "react";
import { Banner } from "../../Components/Banner/Banner";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PageTemplateProps } from "./PageTemplate.interfaces";

export const PageTemplate: React.FC<any> = ({ children }) => {
	return (
		<>
			<Banner />
			<Navbar />
			{children}
		</>
	);
};