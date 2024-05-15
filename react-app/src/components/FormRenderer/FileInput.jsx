export default function FileInput(props){
    return(
        <li>
            <label>{props.input.label}: </label><br/>
            <input {...props.register(props.input.label)} type="file" style={{width:"100%"}}/>
        </li>
    )
}