import { useState } from "react";
import SectionHeader from './SectionHeader'
import VariableInput from "./VariableInput";

export default function Section(props) {
    let section = props.section;
    const [inputs, setInputs] = useState(section.inputs)
    const removeInput = (index) => {
        let newInputs = inputs.slice()
        newInputs.splice(index, 1)
        setInputs(newInputs)
        props.updateSection(props.index, {...section, inputs: newInputs})
    }
    const addInput = () => {
        let newInputs = inputs.slice()
        newInputs.push({type:"text", label:"", required:true, options:[""], validator:{}})
        setInputs(newInputs)
        props.updateSection(props.index, {...section, inputs: newInputs})
    }
    const updateInput = (index, newInput) => {
        let newInputs = inputs.slice()
        newInputs.splice(index, 1, newInput)
        setInputs(newInputs)
        props.updateSection(props.index, {...section, inputs: newInputs})
    }
    const handleSectionHeaderChange = (event) => {
        section.sectionName = event.target.value;
        props.updateSection(props.index, section)
    }
    return(
        <div id="section" style={{borderStyle: "solid", borderWidth:"1px", borderRadius:"3px", padding:"15px"}}>
        <SectionHeader sectionName={props.section.sectionName} handleSectionHeaderChange={handleSectionHeaderChange} removeSection={props.removeSection} index={props.index}/>
            <ul style={{listStyleType: "none", padding: "0"}}>
                {inputs.map((input, i) => <VariableInput input={input} key={i} index={i} removeInput={removeInput} updateInput={updateInput}/>
                )}
            </ul>
        <button onClick={addInput}>Add input</button>
        </div>
    )
}