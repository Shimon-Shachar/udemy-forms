import { useState } from 'react'; 

const useForm = (validate) => {
	const [value, setValue] = useState('');
	const [isTouched, setIsTouched] = useState('');
	const isValid = validate(value);
	const error = !isValid && isTouched;
	
	
	const changeHandler = event => {
		setValue(event.target.value);
	};	
	const blurHandler = event => {	
		setIsTouched(true);	
	};		
	const reset = () => {
		setValue('');
		setIsTouched(false);
	};
	return {
		value,
		changeHandler,
		blurHandler,
		reset,
		isValid,
		error 
	}		
};
export default useForm;
