export default function Selector(props) {
    const RemoveButton = () => {
        if(props.removeSelector){
            return <button onClick={() => props.removeSelector(props.index)}>x</button>
        }
    }
    return(
        <>
        <select value={props.value} onChange={e => props.handleChange(props.index, e.target.value)}>
            {props.options.map((option, i)=>{
                return <option key={i} value={option}>{option}</option>
            })}
        </select>
        <RemoveButton />
        </>
    )
}