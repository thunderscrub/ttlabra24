import { useState } from "react";
import Selector from "./Selector"
import Options from "./Options";
import Validator from "./Validator";

export default function VariableInput (props) {
    let input = props.input
    const [label, setLabel] = useState(props.input.label)
    const [type, setType] = useState(props.input.type)
    const [required, setRequired] = useState(props.input.required)
    const [options, setOptions] = useState(props.input.options||[])
    const [validator, setValidator] = useState(props.input.validator||{})

    const types = ["text", "checkbox", "dropdown", "file"]

    const handleLabelChange = (newLabel) => {
        setLabel(newLabel)
        input.label = newLabel
        props.updateInput(props.index, input)
    }
    const handleTypeChange = (index, newType) => {
        if(newType==="text"||newType==="file"){
            setOptions([])
        }
        setType(newType)
        input.type = newType
        props.updateInput(props.index, input)
    }
    const handleRequiredChange = (newRequired) => {
        setRequired(newRequired)
        input.required = newRequired
        props.updateInput(props.index, input)
    }
    const handleOptionChange = (index, newOption) => {
        let newOptions = options.slice()
        newOptions.splice(index, 1, newOption)
        setOptions(newOptions)
        input.options = newOptions
        props.updateInput(props.index, input)
    }
    const addOptionInput = () => {
        let newOptions = options.slice()
        newOptions.push("")
        setOptions(newOptions)
        input.options = newOptions
        props.updateInput(props.index, input)
    }
    const removeOptionInput = (index) => {
        let newOptions = options.slice()
        newOptions.splice(index, 1)
        setOptions(newOptions)
        input.options = newOptions
        props.updateInput(props.index, input)
    }
    const handleValidatorTypeChange = (index, newValidatorType) => {
        let newValidator = {...validator}
        newValidator.validatorType = newValidatorType
        setValidator(newValidator)
        input.validator = newValidator
        props.updateInput(props.index, input)
    }
    const handleValidatorValueChange = (index, newValidatorValue) => {
        let newValidator = {...validator}
        newValidator.validatorValue = newValidatorValue
        setValidator(newValidator)
        input.validator = newValidator
        props.updateInput(props.index, input)
    }
    const addValidatorSelector = () => {
        let newValidator = {validatorType:"email",validatorValue:""}
        setValidator(newValidator)
        input.validator = newValidator
        props.updateInput(props.index, input)
    }
    const removeValidatorSelector = (index) => {
        let newValidator = {}
        setValidator({})
        input.validator = newValidator
        props.updateInput(props.index, input)
    }
    return(
        <li>
            <label htmlFor={"TypeSelector"+props.index}>Input type: </label>
            <Selector id={"TypeSelector"+props.index} value={type} options={types} handleChange={handleTypeChange}/>
            <label htmlFor={"VarInput"+props.index}> Label: </label>
            <input id={"VarInput"+props.index} type="text" value={label} onChange={e => handleLabelChange(e.target.value)}/>
            <label htmlFor={"VarRequired"+props.index}> Required: </label>
            <input type="checkbox" id={"VarRequired"+props.index} onChange={e => handleRequiredChange(e.target.checked)} checked={required}/>
            <button onClick={()=>props.removeInput(props.index)}>x</button>
            <Options type={type} options={options}  
            removeOptionInput={removeOptionInput} handleOptionChange={handleOptionChange} addOptionInput={addOptionInput} />
            <Validator type={type} validator={validator}
            removeValidatorSelector={removeValidatorSelector} handleValidatorTypeChange={handleValidatorTypeChange} handleValidatorValueChange={handleValidatorValueChange} addValidatorSelector={addValidatorSelector}/>
            <hr/>
        </li>
    )
}