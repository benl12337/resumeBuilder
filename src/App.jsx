/* eslint react/prop-types: 0 */
import { useState } from 'react'
import './App.css'

function AboutMeForm({ updateFunction, infoObject }) {

  function handleName(name) {
    updateFunction({...infoObject, name:name})
  }

  function handleRole(role) {
    updateFunction({...infoObject, role:role })
  }

  function handlePNum(pNum) {
    updateFunction({...infoObject, pNum:pNum })
  }

  function handleEmail(email) {
    updateFunction({...infoObject, email:email })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const tempObject = {...infoObject}
    
    if (infoObject.name && infoObject.role && infoObject.pNum && infoObject.email) {
      tempObject.filled = true
    } else {
      tempObject.filled = false
    }
    updateFunction(tempObject)
  }

  return (
    <form className="form-content" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" onChange={(e) => handleName(e.target.value)} value={infoObject.name} required />
      <label htmlFor="name">Role:</label>
      <input type="text" id="role" onChange={(e) => handleRole(e.target.value)} value={infoObject.role} required />
      <label htmlFor="pNum">Phone Number:</label>
      <input type="tel" id="pNum" onChange={(e) => handlePNum(e.target.value)} value={infoObject.pNum} required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" onChange={(e) => handleEmail(e.target.value)} value={infoObject.email} required />
      <button>Update</button>
    </form>
  )
}

function ExperienceForm({ updateFunction, infoObject }) {

  function handleCompanyName(companyName) {
    updateFunction({...infoObject, companyName: companyName})
  }

  function handleRole(role) {
    updateFunction({...infoObject, role: role})
  }

  function handleStartDate(startDate) {
    updateFunction({...infoObject, startDate: startDate})
  }

  function handleEndDate(endDate) {
    updateFunction({...infoObject, endDate: endDate})
  }

  function handleJobDescription(jobDescription) {
    updateFunction({...infoObject, jobDescription: jobDescription})
  }

  function handleSubmit(e) {
    
    e.preventDefault()

    if (infoObject.companyName && infoObject.role && infoObject.startDate && infoObject.endDate && infoObject.jobDescription) {
      infoObject.filled = true
    } else {
      infoObject.filled = false;
    }

    updateFunction(infoObject)
  }


  return (
    <form className="form-content" onSubmit={handleSubmit}>
      <label htmlFor="companyName">Company Name:</label>
      <input type="text" id="companyName" onChange={(e)=>handleCompanyName(e.target.value)} value={infoObject.companyName} required />
      <label htmlFor="role">Role:</label>
      <input type="text" id="role"onChange={(e)=>handleRole(e.target.value)} value={infoObject.rolee} required />
      <label htmlFor="startDate">Start Date:</label>
      <input type="date" id="startDate" onChange={(e)=>handleStartDate(e.target.value)} value={infoObject.startDate} required />
      <label htmlFor="endDate">End Date:</label>
      <input type="date" id="endDate" onChange={(e)=>handleEndDate(e.target.value)} value={infoObject.endDate} required />
      <label htmlFor="jobDescription">Job Description:</label>
      <textarea name="jobDescription" id="jobDescription"onChange={(e)=>handleJobDescription(e.target.value)} value={infoObject.jobDescription} required />
      <button>Update</button>
    </form>
  )
}

function EducationForm({ updateFunction }) {
  return (
    <form className="form-content">
      <label htmlFor="schoolName">School Name:</label>
      <input type="text" id="schoolName" />
      <label htmlFor="startDate">Start Date:</label>
      <input type="date" id="startDate" />
      <label htmlFor="endDate">End Date:</label>
      <input type="date" id="endDate" />
      <label htmlFor="achievments">Achievments:</label>
      <textarea name="jobDescription" id="achievments"></textarea>
      <button>Update</button>
    </form>
  )
}


function ExpandableForm({ childFormId, title, updateFunction, infoObject }) {

  const [expanded, setExpanded] = useState(false)

  function toggleExpand() {
    setExpanded(!expanded)
  }

  const formComponents ={
    1:< AboutMeForm updateFunction={updateFunction} infoObject={infoObject} />, 
    2:< ExperienceForm updateFunction={updateFunction} infoObject={infoObject} />, 
    3:< EducationForm updateFunction={updateFunction} infoObject={infoObject} />
  }

  return (
    <div className="expandable-form">
      <div className="form-header">
        <h1>{title}</h1>
        <button onClick={toggleExpand}>{expanded ? "Close" : "Edit"}</button>
      </div>
      {
        expanded && formComponents[childFormId]
      }
    </div>
  )
}


function App() {

  const [aboutMe, setAboutMe] = useState({ name: "", role: "", pNum: "", email: "", filled:false })
  const [experience, setExperience] = useState({ companyName: "", role: "", startDate: "", endDate: "", jobDescription: "", filed: false })
  const [education, setEducation] = useState({})

  return (
    <>
      <div className="forms">
        < ExpandableForm childFormId={1} title="About me" updateFunction={setAboutMe} infoObject={aboutMe}/>
        < ExpandableForm childFormId={2} title="Experience" updateFunction={setExperience} infoObject={experience} />
        < ExpandableForm childFormId={3} title="Education" updateFunction={setEducation} />
      </div>


      <div className="resume-page">
        <div className="about-me-section">
          {aboutMe.filled && (<h1>{aboutMe.name}, {aboutMe.role}</h1>)}
          {aboutMe.filled && (<h3 className="contact-details">{aboutMe.pNum}, {aboutMe.email}</h3>)}
        </div>
        <div className="experience-section">
          <h3>EMPLOYMENT HISTORY</h3>
          {/* This section maps through the experiences submitted, then returns a section for each experience */}
          <h3>{experience.role}, {experience.companyName}</h3>
          <h3>{experience.startDate} - {experience.endDate}</h3>
        </div>
        <div className="education-section">{ }</div>
      </div>
    </>
  )
}

export default App
