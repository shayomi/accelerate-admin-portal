import React from "react";
import { TestimonialList } from "../components/testimonial/testimonaildata";
import TestimonialForm from "../components/testimonial/TestimonialForm";

const CreateTestimonialPage = () => {
	const handleCreateTestimonial = (newTestimonial: {
		id: number;
		name: string;
		testimonial: string;
		embeddedLink: string;
	}) => {
		// Add the new testimonial to the list
		TestimonialList.push(newTestimonial);
		// Navigate to the testimonials list page or show a success message
	};

	return <TestimonialForm onSubmit={handleCreateTestimonial} />;
};

TestimonialForm.layout = "Contentlayout";
export default CreateTestimonialPage;
