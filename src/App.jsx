/* eslint react/prop-types: 0 */
import { useState } from 'react'
import { format } from 'date-fns'
import './App.css'

function AboutMeForm({ updateFunction, infoObject }) {

  function handleName(name) {
    updateFunction({ ...infoObject, name: name })
  }

  function handleRole(role) {
    updateFunction({ ...infoObject, role: role })
  }

  function handlePNum(pNum) {
    updateFunction({ ...infoObject, pNum: pNum })
  }

  function handleEmail(email) {
    updateFunction({ ...infoObject, email: email })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const tempObject = { ...infoObject }

    if (infoObject.name && infoObject.pNum && infoObject.email) {
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
      <input type="text" id="role" onChange={(e) => handleRole(e.target.value)} value={infoObject.role} />
      <label htmlFor="pNum">Phone Number:</label>
      <input type="tel" id="pNum" onChange={(e) => handlePNum(e.target.value)} value={infoObject.pNum} required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" onChange={(e) => handleEmail(e.target.value)} value={infoObject.email} required />
      <button className="submit-btn">Update</button>
    </form>
  )
}

function ExperienceForm({ updateFunction, infoObject }) {

  function handleCompanyName(companyName) {
    updateFunction({ ...infoObject, companyName: companyName })
  }

  function handleRole(role) {
    updateFunction({ ...infoObject, role: role })
  }

  function handleStartDate(startDate) {
    updateFunction({ ...infoObject, startDate: startDate })
  }

  function handleEndDate(endDate) {
    updateFunction({ ...infoObject, endDate: endDate })
  }

  function handleJobDescription(jobDescription) {
    updateFunction({ ...infoObject, jobDescription: jobDescription })
  }

  function handleSubmit(e) {

    e.preventDefault()

    if (infoObject.companyName && infoObject.startDate && infoObject.endDate && infoObject.jobDescription) {
      updateFunction({ ...infoObject, filled: true })
    } else {
      updateFunction({ ...infoObject, filled: false })
    }
  }


  return (
    <form className="form-content" onSubmit={handleSubmit}>
      <label htmlFor="companyName">Company Name:</label>
      <input type="text" id="companyName" onChange={(e) => handleCompanyName(e.target.value)} value={infoObject.companyName} required />
      <label htmlFor="role">Role:</label>
      <input type="text" id="role" onChange={(e) => handleRole(e.target.value)} value={infoObject.role} />
      <label htmlFor="startDate">Start Date:</label>
      <input type="date" id="startDate" onChange={(e) => handleStartDate(e.target.value)} value={infoObject.startDate} required />
      <label htmlFor="endDate">End Date:</label>
      <input type="date" id="endDate" onChange={(e) => handleEndDate(e.target.value)} value={infoObject.endDate} required />
      <label htmlFor="jobDescription">Job Description:</label>
      <textarea rows={10} name="jobDescription" id="jobDescription" onChange={(e) => handleJobDescription(e.target.value)} value={infoObject.jobDescription} required />
      <button className="submit-btn">Update</button>
    </form>
  )
}

function EducationForm({ updateFunction, infoObject }) {

  function handleSchoolName(schoolName) {
    updateFunction({ ...infoObject, schoolName: schoolName })
  }

  function handleStartDate(startDate) {
    updateFunction({ ...infoObject, startDate: startDate })
  }
  function handleEndDate(endDate) {
    updateFunction({ ...infoObject, endDate: endDate })
  }

  function handleAchievements(achievements) {
    updateFunction({ ...infoObject, achievements: achievements })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (infoObject.schoolName && infoObject.startDate && infoObject.endDate && infoObject.achievements) {
      updateFunction({ ...infoObject, filled: true })
    } else {
      updateFunction({ ...infoObject, filled: false })
    }
  }
  return (
    <form className="form-content" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="schoolName">School Name:</label>
      <input type="text" id="schoolName" onChange={(e) => handleSchoolName(e.target.value)} value={infoObject.schoolName} />
      <label htmlFor="startDate">Start Date:</label>
      <input type="date" id="startDate" onChange={(e) => handleStartDate(e.target.value)} value={infoObject.startDate} />
      <label htmlFor="endDate">End Date:</label>
      <input type="date" id="endDate" onChange={(e) => handleEndDate(e.target.value)} value={infoObject.endDate} />
      <label htmlFor="achievements">Achievements:</label>
      <textarea rows={10} name="jobDescription" id="achievements" onChange={(e) => handleAchievements(e.target.value)} value={infoObject.achievements} ></textarea>
      <button className="submit-btn">Update</button>
    </form>
  )
}


function ExpandableForm({ childFormId, title, updateFunction, infoObject }) {

  const [expanded, setExpanded] = useState(false)

  function toggleExpand() {
    setExpanded(!expanded)
  }

  const formComponents = {
    1: < AboutMeForm updateFunction={updateFunction} infoObject={infoObject} />,
    2: < ExperienceForm updateFunction={updateFunction} infoObject={infoObject} />,
    3: < EducationForm updateFunction={updateFunction} infoObject={infoObject} />
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

  const [aboutMe, setAboutMe] = useState({ name: "", role: "", pNum: "", email: "", filled: false })
  const [experience, setExperience] = useState({ companyName: "", role: "", startDate: null, endDate: null, jobDescription: "", filled: false })
  const [education, setEducation] = useState({ schoolName: "", startDate: "", endDate: "", achievements: "", filled: false })

  const experiencePoints = experience.jobDescription.split("\n")
  const educationPoints = education.achievements.split("\n")
  console.log(experiencePoints)

  return (
    <>
      <div className="forms">
        < ExpandableForm childFormId={1} title="About me" updateFunction={setAboutMe} infoObject={aboutMe} />
        < ExpandableForm childFormId={2} title="Experience" updateFunction={setExperience} infoObject={experience} />
        < ExpandableForm childFormId={3} title="Education" updateFunction={setEducation} infoObject={education} />
      </div>

      <div className="resume-page">
        <div className="about-me-section">
          {aboutMe.filled && (<h1>{aboutMe.name}{aboutMe.role && ", "}{aboutMe.role}</h1>)}
          {aboutMe.filled && (<h3 className="contact-details">{aboutMe.pNum}, {aboutMe.email}</h3>)}
        </div>
        {experience.filled && (<div className="experience-section section-block">
          <h3 className="section-title">EMPLOYMENT HISTORY</h3>
          <div className="section-header">
            {experience.filled && (<h3>{experience.role}{experience.role && ","} {experience.companyName}</h3>)}
            {experience.filled && (<h3 className="date-range">{format(new Date(experience.startDate), "MMM yyyy")} - {format(new Date(experience.endDate), "MMM yyyy")}</h3>)}
          </div>

          <ul>
            {experiencePoints.map((point) =>
              point && <li key={point}>{point}</li>
            )}
          </ul>
        </div>)}

        <div className="education-section section-block">
           <h3 className="section-title">EDUCATION</h3>
           <div className="section-header">
           {education.filled && (<h3>{education.schoolName}</h3>)}
           {education.filled && (<h3 className="date-range">{format(new Date(education.startDate), "yyyy")} - {format(new Date(education.endDate), "yyyy")}</h3>)}
           </div>
           <ul>
            {educationPoints.map((point)=>point&&<li key={point}>{point}</li>)
            }
          </ul>


        </div>

      </div>
    </>
  )
}

export default App
