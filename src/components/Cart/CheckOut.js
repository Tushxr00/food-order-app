import classes from "./CheckOut.module.css"

const CheckOut = (props) => {

    const confirmHandler = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return <form className={classes.form} onSubmit={confirmHandler}>
        <div className={classes.control}>
            <label htmlFor="name"> Your Name </label>
            <input type="text" id="name" />
        </div>
        <div className={classes.control}>
            <label htmlFor="address"> Your Address </label>
            <input type="text" id="address" />
        </div>
        <div className={classes.control}>
            <label htmlFor="postal"> Your Postal </label>
            <input type="text" id="postal" />
        </div>
        <div className={classes.control}>
            <label htmlFor="city"> Your City </label>
            <input type="text" id="city" />
        </div>
        <div className={classes.actions}>
            <button type="button" onClick={props.onCancel}> Cancel </button>
            <button className={classes.submit}> Confirm </button>
        </div>
    </form>

}
export default CheckOut