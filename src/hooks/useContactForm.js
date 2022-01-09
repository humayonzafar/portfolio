import {useForm} from "react-hook-form";
import {useState} from "react";

export const useContactForm = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({mode: 'onChange'});
    const [showResponse, setShowResponse] = useState(true);
    const onSubmit = async (formData) => {
        try {
            const response = await fetch('/api/mail', {
                method: "POST",
                body: JSON.stringify(formData)
            });
            setShowResponse(response.status===200);
        } catch (err) {
            console.log(err);
        }
    }
    return {register, handleSubmit, errors, isSubmitting, showResponse, onSubmit}
}