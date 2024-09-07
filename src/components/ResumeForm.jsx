import { useState } from "react";
import { format } from "date-fns";
import uuid from 'react-uuid';
import PersonalDetails from "./PersonalDetails";
import WorkExperiences from "./WorkExperiences";
import Education from "./Education";
import './form.css';


// while editing the inputs, the resume form should not update
function ResumeForm() {

    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        email: '',
        number: '',
        filled: false
    })

    const [experiences, setExperiences] = useState([
        {
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            description: '',
            id: uuid()
        }
    ])

    const [education, setEducation] = useState([
        {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            achievements: '',
            id: uuid()
        }
    ])

    const [toggles, setToggles] = useState({
        details: false,
        experience: false,
        education: false
    })

    const handleToggle = (field) => {
        const newToggle = !toggles[field];
        const newValue = { ...toggles, [field]: newToggle }
        setToggles(newValue);
    }

    const handlePersonalDetails = (field, value) => {
        setPersonalDetails({
            ...personalDetails, [field]: value
        });
    };

    const handleWorkExperiences = (index, field, value) => {
        const newExperience = [...experiences];
        newExperience[index][field] = value;
        setExperiences(newExperience);
    }

    const handleEducation = (index, field, value) => {
        const newEducation = [...education];
        newEducation[index][field] = value;
        setEducation(newEducation);
    }

    const addExperience = () => {
        if (experiences.length == 3) {
            alert('You cannot add more than three experiences!')
            return;
        }

        const newExperience = [...experiences];
        newExperience.splice(experiences.length, 0, { company: '', role: '', startDate: '', endDate: '', description: '', id: uuid() })
        setExperiences(newExperience)
    }

    const removeExperience = (index) => {
        if (experiences.length == 1) {
            alert('At least one experience required!');
            return;
        }
        const newExperience = experiences.filter((_, i) => i !== index);
        setExperiences(newExperience);
    }

    const addEducation = () => {
        if (education.length == 2) {
            alert('You cannot add more than two schools!')
            return;
        }

        const newEducation = [...education];
        newEducation.splice(education.length, 0, { school: '', degree: '', startDate: '', endDate: '', achievements: '', id: uuid() });
        setEducation(newEducation);
    }

    const removeEducation = (index) => {
        if (education.length == 1) {
            alert('At least one school required!');
            return;
        }
        const newEducation = education.filter((_, i) => i !== index);
        setEducation(newEducation);
    }

    const splitElements = (string) => {
        const value = string.split("\n");
        return value;
    }

    return (
        <>

            <div className="input">

                <div className="input-form">
                    <div className="input-header"><h2>Personal Details</h2>
                        <button onClick={() => handleToggle("details")}>{toggles.details ? "Save" : "Edit"}</button></div>
                    {toggles.details && < PersonalDetails details={personalDetails} onChange={handlePersonalDetails} />}
                </div>

                <div className="input-form">
                    <div className="input-header"><h2>Work Experience</h2>
                        <button onClick={() => handleToggle("experience")} >{toggles.experience ? "Save" : "Edit"}</button></div>
                    {toggles.experience && < WorkExperiences experiences={experiences} onChange={handleWorkExperiences} onAdd={addExperience} onRemove={removeExperience} />}
                </div>

                <div className="input-form">
                    <div className="input-header"><h2>Education</h2>
                        <button onClick={() => handleToggle("education")}>{toggles.education ? "Save" : "Edit"}</button></div>
                    {toggles.education && < Education education={education} onChange={handleEducation} onAdd={addEducation} onRemove={removeEducation} />}
                </div>

            </div>

            <div className="output">
                <div className="resume-page content-to-print">

                    <div className="page-header">
                        <h2>{personalDetails.name}</h2>
                        {personalDetails.email && personalDetails.number && <h3>{personalDetails.email}, {personalDetails.number}</h3>}
                    </div>

                    <div className="block-section">
                        <h2 className="section-title">Work Experience</h2>
                        {
                            experiences.map((experience) => {
                                return (
                                    <div className="block-row" key={experience.id}>
                                        <div className="block-header">
                                            <h3>{experience.role}{experience.role && ","} {experience.company}</h3>
                                            {experience.startDate && experience.endDate && <h3>{format(experience.startDate, "MMM yy")} - {format(experience.endDate, "MMM yy")}</h3>}
                                        </div>

                                        <div className="block-details">
                                            <ul>
                                                {
                                                    splitElements(experience.description).map((detail) => {
                                                        return detail && <li key={detail}>{detail}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="block-section">
                        <h2 className="section-title">Education</h2>
                        {education.map((institution) => {
                            return (
                                <div className="block-row" key={institution.school}>
                                    <div className="block-header">
                                        <h3>{institution.degree}{institution.degree && ","} {institution.school}</h3>
                                        {institution.startDate && institution.endDate && <h3>{format(institution.startDate, "MMM yy")} - {format(institution.endDate, "MMM yy")}</h3>}
                                    </div>

                                    <div className="block-details">
                                        <ul>
                                            {
                                                splitElements(institution.achievements).map((detail) => {
                                                    return detail && <li key={detail}>{detail}</li>
                                                })
                                            }
                                        </ul>
                                    </div>

                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default ResumeForm;