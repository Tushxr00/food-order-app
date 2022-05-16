import { useRef, useState } from "react";
import classes from "./CheckOut.module.css";

const isEmpty = (value) => value.trim() === "";
const isFIveChars = (value) => value.trim().length === 6;

const CheckOut = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    address: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFIveChars(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      city: enteredCity,
      postal: enteredPostal,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;

  const addressControlClasses = `${classes.control} ${
    formInputValidity.address ? "" : classes.invalid
  }`;

  const postalControlClasses = `${classes.control} ${
    formInputValidity.postal ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name"> Your Name </label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please Enter a valid Name !</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address"> Your Address </label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputValidity.address && <p>Please Enter a valid address !</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal"> Your Postal </label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postal && (
          <p>Please Enter a valid postal ( 5 characters long) !</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city"> Your City </label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please Enter a valid city !</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}> Confirm </button>
      </div>
    </form>
  );
};
export default CheckOut;
