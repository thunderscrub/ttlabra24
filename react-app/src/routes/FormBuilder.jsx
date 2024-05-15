import { useState } from "react";
import Section from "../components/FormBuilder/Section";
import FormHeader from "../components/FormBuilder/FormHeader";
import { useLocation } from 'react-router-dom'

export default function FormBuilder(props) {
    const location = useLocation()
    let newForm = Object.hasOwn(location.state.from, 'newForm')
    let locationForm = location.state.from
    delete locationForm.newForm
    const [form, setForm] = useState(props.form||locationForm||{formName:"",sections:[]})
    const handleFormNameChange = (newName) => {
        let newForm = {...form}
        newForm.formName = newName;
        setForm(newForm)
    }
    const removeSection = (index) => {
        let newSections = form.sections.slice()
        newSections.splice(index, 1)
        let newForm = {...form, sections: newSections}
        setForm(newForm)
    }
    const addSection = () => {
        let newSections = form.sections.slice()
        newSections.push({
            sectionName: '',
            inputs: [
              
                ],
            }
        )
        let newForm = {...form, sections: newSections}
        setForm(newForm)
    }
    const updateSection = (index, section) => {
        let newSections = form.sections.slice()
        newSections.splice(index, 1, section)
        let newForm = {...form, sections: newSections}
        setForm(newForm)
    }
    const handleSubmit = async () => {
        newForm?fetch():fetch()
    }
    return(
        <div id="form" style={{display: "flex" ,flexDirection: "column", justifyContent: "center",alignItems: "center", gap: "4px", margin:"20px"}}>
            <FormHeader formName={form.formName} handleFormNameChange={handleFormNameChange}/>
            {form.sections.map((section, i)=>{
                return <Section section={section} key={i} index={i} removeSection={removeSection} updateSection={updateSection}/>
            })}
            <button onClick={() => addSection()}>Add section</button>
            <button onClick={() => console.log(JSON.stringify(form))}>Print form in console</button>
        </div>
    )
}