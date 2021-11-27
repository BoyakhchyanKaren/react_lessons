import {OtherInfo, PersonalInfo, SignUp} from "../Components";

function PageDisplay({page, formData, setFromData}){
    if(page === 0){
        return <SignUp formData={formData} setFormData={setFromData}/>
    }else if(page === 1) {
        return <PersonalInfo formData={formData} setFormData={setFromData}/>
    }else if(page === 2){
        return <OtherInfo formData={formData} setFormData={setFromData}/>
    }
};


export default PageDisplay;