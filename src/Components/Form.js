import React, {useState} from "react";
import PageDisplay from "../utils/PageDisplay";
import data from "../Information/data.js";
function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState(data);
    const FormTitles = ["Sign Up", "Personal Info" , "Other"];
    return (
        <div className="form">
            <div className="progressbar">
                <div style={{  width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"  }}>
                </div>
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body"> <PageDisplay page={page} formData={formData} setFromData={setFormData}/> </div>
                <div className="footer">
                    <button
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currentPage) => currentPage - 1)
                        }}>Prev</button>
                    <button
                        onClick={() => {
                            if(page === FormTitles.length - 1){
                                alert("Submitted...");
                                setFormData(data);
                            }else{
                                setPage((currentPage) => currentPage + 1)
                            }
                        }
                        }>{page === FormTitles.length - 1 ? "Submit" : "Next"}</button>
                </div>
            </div>
        </div>
    )
};

export default Form;