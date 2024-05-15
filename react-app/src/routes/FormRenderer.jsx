import { useForm } from "react-hook-form"
import Section from "../components/FormRenderer/Section";
import { useLocation } from 'react-router-dom'

export default function FormRenderer() {
    const location = useLocation()
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()

      const onSubmit = (data) => console.log(data)

    const form = location.state.from
    return(
        <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex" ,flexDirection: "column", justifyContent: "center",alignItems: "center", gap: "4px", margin:"20px"}}>
            <h2>{form.formName}</h2>
            {form.sections.map((section)=>{
                return <Section register={register} errors={errors} section={section}/>
            })}
            <input type="submit"/>
        </form>
    )
}