import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	
	const {
		value: nameValue,
		isValid: nameIsValid,
		error: nameError,
		changeHandler: nameChangeHandler,
		blurHandler: nameBlurHandler,
		reset: resetName
	} = useInput(value => value.trim() !== '');
		
	const {
		value: emailValue,
		isValid: emailIsValid,
		error: emailError,
		changeHandler: emailChangeHandler,
		blurHandler: emailBlurHandler,
		reset: resetEmail
	} = useInput((value) => value.includes('@'));
	 
	let formIsValid = false;
	
	if (nameIsValid && emailIsValid ) {formIsValid = true} 
		
	const formSubmissionHandler = event => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}	
		resetName();
		resetEmail();
	};
  
    
	const nameClasses = nameError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailError ? 'form-control invalid' : 'form-control';
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <div className={nameClasses}>
		      <label htmlFor='name'>Your Name</label>
		      <input 
		      	type='text'
		        id='name' 
		        onChange={nameChangeHandler}
		        value={nameValue}
		        onBlur={nameBlurHandler}
		      />
		      {nameError && <p className="error-text">Name must not be empty.</p>}  
        </div>
        <div className={emailClasses}>
		      <label htmlFor='email'>Your Email</label>
		      <input 
		      	type='text'
		        id='email' 
		        onChange={emailChangeHandler}
		        value={emailValue}
		        onBlur={emailBlurHandler}
		      />
		      {emailError &&<p className="error-text">Email must contain "@"</p>}
        </div>
      </div>  
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
