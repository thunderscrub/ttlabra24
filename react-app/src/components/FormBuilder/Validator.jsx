import Selector from "./Selector";

const validators = ["email", "number", "regex"]

const ValidatorSelector = (props) => {
    if(Object.keys(props.validator).length !== 0){
        return(
            <li>
                <label>Type: </label>
                <Selector options={validators} value={props.validator.validatorType}
                handleChange={props.handleValidatorTypeChange}/>
                <ValidatorValueInput validator={props.validator} handleValidatorValueChange={props.handleValidatorValueChange}/>
                <button onClick={() => props.removeValidatorSelector()}>x</button>
            </li>
        )
    }
}
const ValidatorValueInput = (props) => {
    if(props.validator.validatorType === "regex"){
        return(
            <>
                <label> Value: </label>
                <input type="text" value={props.validator.validatorValue} onChange={e => props.handleValidatorValueChange(0, e.target.value)}></input>
            </>
        )
    }
}
const AddValidatorButton = (props) => {
    if(Object.keys(props.validator).length === 0){
        return <button onClick={props.addValidatorSelector}>Add validator</button>
    }
}

export default function Validators(props){
    if(props.type==="text"){return(
        <>
            <p style={{padding:"0", margin:"0"}}>Validator for {props.type}: </p>
            <ul>
                <ValidatorSelector validator={props.validator} handleValidatorTypeChange={props.handleValidatorTypeChange} handleValidatorValueChange={props.handleValidatorValueChange} removeValidatorSelector={props.removeValidatorSelector}/>
                <AddValidatorButton validator={props.validator} addValidatorSelector={props.addValidatorSelector}/>
            </ul>
        </>
    )}
}