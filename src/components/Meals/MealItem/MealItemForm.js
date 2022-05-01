import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const ammountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = Number(ammountInputRef.current.value);
    console.log({ enterAmount });
    if (enterAmount < 1 || enterAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={ammountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid ? <p>Please enter a Valid Amount (1-5)</p> : null}
    </form>
  );
};
export default MealItemForm;
