import React from "react";
import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = ({SearchTerm}) => {

    const navigate=useNavigation()
    const isSubmitting=navigate.state==='submitting'
   
	return (
		<Wrapper>
			<Form className="form">
				<input
					type="search"
					name="search"
					id="search"
					defaultValue={SearchTerm}
					className="form-input"
				></input>
				<button type="submit" className="btn" disabled={isSubmitting}>
					{isSubmitting ? 'Searching' : 'Seach'}
				</button>
			</Form>
		</Wrapper>
	);
};

export default SearchForm;
