import { FilterDataEntity, FilterProps, FilterRawData} from "./Filter.interfaces";
import { StyledCloseIcon, StyledFilter, StyledSearchButton } from "./Filter.styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FilterTag } from "./FilterTag/FilterTag";
import { IconButton } from "../IconButton/IconButton";
import { ButtonNESTemplate } from "../IconButton/IconButton.interfaces";

export const Filter = (props: FilterProps<FilterRawData>) => {
	const onFilterChange = (_event, newValue) => {	
		props.setFilter(newValue);
	};

	const CloseIcon = <StyledCloseIcon >X</StyledCloseIcon>;

	const onSearchClick = () => {
		props.onSearchClick(props.filter);
	};

	const SearchButton = (	
		<StyledSearchButton>
			<IconButton icon={<i className="nes-icon search"/>} 
				onClick={onSearchClick}
				nesTemplate={ButtonNESTemplate.blue} 
			/>
		</StyledSearchButton>
	);

	return (
		<StyledFilter>		
			<Autocomplete
				className="nes-container is-dark is-rounded"
				disablePortal
				disableCloseOnSelect={true}
				id="combo-box-demo"
				value={props.filter}
				multiple
				filterSelectedOptions
				options={props.options}
				getOptionLabel={(option: FilterDataEntity) => option?.label}
				sx={{ width: "100%" }}
				onChange={onFilterChange}
				clearIcon={CloseIcon}
				renderTags={(value: readonly string[], getTagProps) =>
					value.map((option: any, index: number) => (
						<FilterTag key={index} label={option?.label || option} {...getTagProps({ index })} />
					))
				}
				renderInput={(params) => (
					<TextField
						{...params}
						label=""
						placeholder="Filter"
					/>
				)}
				componentsProps={{paper: {className: "nes-container is-dark is-rounded"}}}
			/>
			{SearchButton}
		</StyledFilter>
		
	);
};
