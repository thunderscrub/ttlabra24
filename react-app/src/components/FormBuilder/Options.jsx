import OptionInput from "./OptionInput";

export default function Options(props) {
    if(props.type==="checkbox"||props.type==="dropdown"){return(
        <>
            <p style={{padding:"0", margin:"0"}}>Options for {props.type}: </p>
            <ul>
                {props.options.map((option, i)=>{
                    return(<OptionInput key={i} option={option} index={i} removeOptionInput={props.removeOptionInput} handleOptionChange={props.handleOptionChange}/>)
                })}
                <button onClick={props.addOptionInput}>Add option</button>
            </ul>
        </>
    )}
}