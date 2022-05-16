import classes from "./CheckOut.module.css"

const CheckOut = (props) => {
    return <form>
        <div className={classes.control}>
            <label htmlFor="name"> Your Name </label>
            <input type="text" id="name"/>
        </div>
        <div className={classes.control}>
            <label htmlFor="address"> Your Address </label>
            <input type="text" id="address"/>
        </div>
        <div className={classes.control}>
            <label htmlFor="postal"> Your Postal </label>
            <input type="text" id="postal"/>
        </div>
        <div className={classes.control}>
            <label htmlFor="city"> Your City </label>
            <input type="text" id="city"/>
        </div>
        <button> submit </button>
    </form>

}
export default CheckOut