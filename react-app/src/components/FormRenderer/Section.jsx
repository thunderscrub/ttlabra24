import TextInput from "./TextInput"
import CheckboxInput from "./CheckboxInput"
import DropdownInput from "./DropdownInput"
import FileInput from "./FileInput"

export default function Section(props){
    return(
        <div style={{width:"40%"}}>
            <h3>{props.section.sectionName}</h3>
            <ul>
            {props.section.inputs.map((input, i)=>{
                switch(input.type){
                    case 'text':
                        return <TextInput key={"Text-"+i} input={input} register={props.register} errors={props.errors}/>
                    case 'checkbox':
                        return <CheckboxInput key={"Checkbox-"+i} input={input} register={props.register} errors={props.errors}/>        
                    case 'dropdown':
                        return <DropdownInput key={"Dropdown-"+i} input={input} register={props.register} errors={props.errors}/>
                    case 'file':
                        return <FileInput key={"File-"+i} input={input} register={props.register} errors={props.errors}/>
                    default:
                        return
                }
            })}
            </ul>
            <hr/>
        </div>
    )
}