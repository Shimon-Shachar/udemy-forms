import useForm from '../hooks/use-form';

const BasicForm = (props) => {
	
	const {
		value: nameValue, 
		changeHandler: nameChangeHandler,
		blurHandler: nameBlurHandler, 
		reset: resetName,
		isValid: nameIsValid,
		error: nameError
	} = useForm(value => value.trim() !== '');	
	
	const {
		value: lastNameValue, 
		changeHandler: lastNameChangeHandler,
		blurHandler: lastNameBlurHandler, 
		reset: resetLastName,
		isValid: lastNameIsValid,
		error: lastNameError
	} = useForm(value => value.trim() !== '');
	
	const {
		value: emailValue, 
		changeHandler: emailChangeHandler,
		blurHandler: emailBlurHandler, 
		reset: resetEmail,
		isValid: emailIsValid,
		error: emailError
	} = useForm(value => value.includes('@'));
	
	let formIsValid = false
	if (nameIsValid, lastNameIsValid, emailIsValid) {
		formIsValid = true
	}
	
	const submitHandler = event => {
		event.preventDefault();
		if (!formIsValid) {
			return
		}
		resetName();	
		resetLastName();	
		resetEmail();
	};
	
	console.log(`First Name: ${nameValue}, Last Name: ${lastNameValue}, E-mail: ${emailValue}`);
	
	const nameClasses = nameError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameError ? 'form-control invalid' : 'form-control';
	const emailClasses = emailError ? 'form-control invalid' : 'form-control';
	
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text'
           id='name'
           value={nameValue}
           onChange={nameChangeHandler}
           onBlur={nameBlurHandler}/>
           {nameError && <p className='error-text'>Name must not be empty.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text'
           id='last-name'
           value={lastNameValue}
           onChange={lastNameChangeHandler}
           onBlur={lastNameBlurHandler}/>
           {lastNameError && <p className='error-text'>Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email'
         id='email'
         value={emailValue} 
         onChange={emailChangeHandler} 
         onBlur={emailBlurHandler}/>
         {emailError && <p className='error-text'>Email must contain "@".</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
