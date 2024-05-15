export default function DropdownInput(props){
    return(
        <li>
            <label>{props.input.label}: </label><br/>
            <select {...props.register(props.input.label)} style={{width:"91%"}}>
                <option selected="selected"></option>
                {props.input.options.map((option, i)=>{
                    return <option key={i} >{option}</option>
                })}
            </select>
        </li>
    )
}