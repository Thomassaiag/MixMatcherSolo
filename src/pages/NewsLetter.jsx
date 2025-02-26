import React from "react";
import { Form, redirect } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		const response = await axios.post(newsletterUrl, data);
		console.log(response);
		toast.success(response?.data?.msg);
		return redirect("/");
	} catch (error) {
		console.log(error);
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

const Newsletter = () => {
	return (
		<>
			<Form className="form" method="POST">
				<h4>Our NewsLetter</h4>
				<div className="form-row">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						id="name"
						type="text"
						name="name"
						className="form-input"
						defaultValue="T"
					/>
				</div>
				<div className="form-row">
					<label htmlFor="firstName" className="form-label">
						First Name
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						className="form-input"
						defaultValue="S"
					/>
				</div>
				<div className="form-row">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						id="email"
						type="email"
						name="email"
						className="form-input"
						defaultValue="test@test.com"
					/>
				</div>
				<button type="submit" className="btn">
					Submit
				</button>
			</Form>
		</>
	);
};

export default Newsletter;
