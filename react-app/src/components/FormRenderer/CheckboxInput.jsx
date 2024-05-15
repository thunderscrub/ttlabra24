export default function CheckboxInput(props){
    return(
        <li>
            <label>{props.input.label}: </label><br/>
            <ul>
                {props.input.options.map((option)=>{
                    return (
                        <li>
                            <input {...props.register(option)} id={option} type="checkbox" name={option} value={option} />
                            <label htmlFor={"option-"+option}>{option}</label>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}