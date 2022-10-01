import { useState } from 'react';

const useInput = (validate) => {

	const [value, setValue] = useState('');
	const [isTouched , setIsTouched] = useState(false);
	const isValid = validate(value);
	const error = !isValid && isTouched;
	
	const changeHandler = (event) => {
		setValue(event.target.value)
	};
	
	const blurHandler = (event) => {
		setIsTouched(true);
	};
	
	const reset = () => {
		setValue('');
		setIsTouched(false);
	}
	
	return {
		value,
		isValid,
		error,
		changeHandler,
		blurHandler,
		reset
	}
}

export default useInput;
