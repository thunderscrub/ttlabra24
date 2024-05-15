export default function TextInput(props){
    return(
        <li>
            <label>{props.input.label}: </label><br/>
            <input {...props.register(props.input.label)} type="text" style={{width:"90%"}}></input>
        </li>
    )
}