import {useForm} from "react-hook-form";
import {useState} from "react";

export const useContactForm = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({mode: 'onChange'});
    const [showSuccess, setShowSuccess] = useState(false);
    const onSubmit = async (formData) => {
        try {
            await fetch('/api/mail', {
                method: "POST",
                body: JSON.stringify(formData)
            });
            setShowSuccess(true);
        } catch (err) {
            console.log(err);
        }
    }
    return {register, handleSubmit, errors, isSubmitting, showSuccess, onSubmit}
}