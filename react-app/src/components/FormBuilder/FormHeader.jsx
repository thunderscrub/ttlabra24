export default function FormHeader(props){
    return(
        <div id="formHeader">
            <label htmlFor="formName">Form name: </label>
            <input id="formName" type="text" size={50} onChange={e => props.handleFormNameChange(e.target.value)} value={props.formName} style={{fontSize: "16px"}}/>
        </div>
    )
}