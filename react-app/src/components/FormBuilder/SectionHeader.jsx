export default function SectionHeader(props){
    return(
        <div>
            <label htmlFor={"section-"+props.index}>Section name: </label>
            <input id={"section-"+props.index} type="text" onChange={props.handleSectionHeaderChange} value={props.sectionName}/>
            <button onClick={() => props.removeSection(props.index)}>x</button>
        </div>
    )
}