import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FormsList(props){

    const getForms = async () => {
        const response = await fetch("http://localhost:3000/forms")
        let formsResponse = await response.json()
        console.log(formsResponse)
        if(Array.isArray(formsResponse)){
            setForms(formsResponse)
        }else{
            setForms([formsResponse])
        }
    }

    const [forms, setForms] = useState([])
    useEffect(()=>{
        getForms()
    }, [])
    return(
        <div style={{display: "flex" ,flexDirection: "column", justifyContent: "center", gap: "4px", margin:"20px", width:"80%", float:"right"}}> 
            <table>
                <tr>
                    <th style={{...thtdStyle}}>Form name</th>
                </tr>
                {forms.map((form, i)=>{
                    return <ListedForm key={i} form={form.form}/>
                })}
            </table>
            <Link style={{float:"right"}} to="/FormBuilder" state={{from: {formName:"",sections:[], newForm:true}}}>Create new form</Link>
        </div>
    )
}
const thtdStyle = {border: "1px solid #dddddd",
        textAlign: "left",
        padding: "8px"}
const ListedForm = (props) => {
    return(
        <tr>
            <td style={thtdStyle}>
                <p style={{float:"left"}}>{props.form.formName}</p>
                <button style={{float:"right", padding:"10px", border:"none", background:"none", font: "inherit", cursor: "pointer", color: "purple", textDecoration: "underline"}} onClick={console.log()}>Delete form</button>
                <Link style={{float:"right", padding:"10px"}} to="/FormBuilder" state={{from: props.form}}>Edit</Link>
                <Link style={{float:"right", padding:"10px"}} to="/FormRenderer" state={{from: props.form}}>Create response</Link>
            </td>
        </tr>
    )
}
