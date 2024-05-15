export default function OptionInput(props){
    return(
        <li>
            <input id={"OptionInput"+props.index} value={props.option} type="text" onChange={e => props.handleOptionChange(props.index, e.target.value)}/>
            <button onClick={() => props.removeOptionInput(props.index)}>x</button>
        </li>
    )
}