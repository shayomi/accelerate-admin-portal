import React from "react";
import { useRouter } from "next/router";
import { TestimonialList } from "@/pages/components/testimonial/testimonaildata";
import TestimonialForm from "@/pages/components/testimonial/TestimonialForm";


const EditTestimonialPage = () => {
  const router = useRouter();
  const { id } = router.query;


  const testimonialData = TestimonialList.find((testimonial) => testimonial.id === Number(id));

  const handleEditTestimonial = (updatedTestimonial: {
    id: number;
    name: string;
    testimonial: string;
    embeddedLink: string;
  }) => {
    const index = TestimonialList.findIndex((testimonial) => testimonial.id === updatedTestimonial.id);
    if (index !== -1) {
      TestimonialList[index] = updatedTestimonial;
    }
  };

  return (
    <TestimonialForm
      testimonialData={testimonialData}
      onSubmit={handleEditTestimonial}
    />
  );
};

EditTestimonialPage.layout = "Contentlayout"
export default EditTestimonialPage;
