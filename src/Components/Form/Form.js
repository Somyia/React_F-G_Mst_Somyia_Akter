import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const [feedbackData, setFeedbackData] = useState([]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newFeedbackData = [...feedbackData, data];
        setFeedbackData(newFeedbackData);
        localStorage.setItem('feedback', JSON.stringify(newFeedbackData));
        alert('Thank you for completing the information');
    }
    console.log(feedbackData);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex">
                <div className="w-50 form-left">
                    <div>
                        <label htmlFor="name">Customer Name</label>
                        <input {...register("name", { required: true })} />
                        <br />
                        {errors.name?.type === 'required' && "Error:This is mendatory field"}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ })} />
                        <br />
                        {errors.email?.type === 'required' && "Error:This is mendatory field"}
                        {errors.email?.type === 'pattern' && "Error:Invalid Email"}
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input {...register("phone", { required: true, pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g })} />
                        <br />
                        {errors.phone?.type === 'required' && "Error:This is mendatory field"}
                        {errors.phone?.type === 'pattern' && "Error:Invalid Phone"}
                    </div>
                </div>
                <div className="w-50 form-right">
                    <div>
                        <label>Please rate the quality of the service you received from your host.</label>
                        <input
                            {...register("serviceQuality", { required: true })}
                            type="radio"
                            name="serviceQuality"
                            value="Excellent"
                        /> Excellent
                     <input
                            {...register("serviceQuality", { required: true })}
                            type="radio"
                            name="serviceQuality"
                            value="Good"
                        /> Good
                     <input
                            {...register("serviceQuality", { required: true })}
                            type="radio"
                            name="serviceQuality"
                            value="Fair"
                        /> Fair
                     <input
                            {...register("serviceQuality", { required: true })}
                            type="radio"
                            name="serviceQuality"
                            value="Bad"
                        /> Bad
                    <br />
                        {errors.serviceQuality?.type === 'required' && "Error:This is mendatory field"}
                    </div>

                    <div>
                        <label>Please rate the quality of your beverage</label>
                        <input
                            {...register("beverageQuality", { required: true })}
                            type="radio"
                            name="beverageQuality"
                            value="Excellent"
                        /> Excellent
                     <input
                            {...register("beverageQuality", { required: true })}
                            type="radio"
                            name="beverageQuality"
                            value="Good"
                        /> Good
                     <input
                            {...register("beverageQuality", { required: true })}
                            type="radio"
                            name="beverageQuality"
                            value="Fair"
                        /> Fair
                     <input
                            {...register("beverageQuality", { required: true })}
                            type="radio"
                            name="beverageQuality"
                            value="Bad"
                        /> Bad
                    <br />
                        {errors.beverageQuality?.type === 'required' && "Error:This is mendatory field"}
                    </div>

                    <div>
                        <label>Was our restaurant clean?</label>
                        <input
                            {...register("cleaning", { required: true })}
                            type="radio"
                            name="cleaning"
                            value="Excellent"
                        /> Excellent
                     <input
                            {...register("cleaning", { required: true })}
                            type="radio"
                            name="cleaning"
                            value="Good"
                        /> Good
                     <input
                            {...register("cleaning", { required: true })}
                            type="radio"
                            name="cleaning"
                            value="Fair"
                        /> Fair
                     <input
                            {...register("cleaning", { required: true })}
                            type="radio"
                            name="cleaning"
                            value="Bad"
                        /> Bad
                    <br />
                        {errors.cleaning?.type === 'required' && "Error:This is mendatory field"}
                    </div>

                    <div>
                        <label>Please rate your overall dining experience.</label>
                        <input
                            {...register("experience", { required: true })}
                            type="radio"
                            name="experience"
                            value="Excellent"
                        /> Excellent
                     <input
                            {...register("experience", { required: true })}
                            type="radio"
                            name="experience"
                            value="Good"
                        /> Good
                     <input
                            {...register("experience", { required: true })}
                            type="radio"
                            name="experience"
                            value="Fair"
                        /> Fair
                     <input
                            {...register("experience", { required: true })}
                            type="radio"
                            name="experience"
                            value="Bad"
                        /> Bad
                    <br />
                        {errors.experience?.type === 'required' && "Error:This is mendatory field"}
                    </div>
                </div>
            </div>

            <input type="submit" className="feedback-btn" />
        </form>
    );
};

export default Form;