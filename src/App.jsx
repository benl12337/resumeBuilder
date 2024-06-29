/* eslint react/prop-types: 0 */
import { useState } from 'react'
import './App.css'

function AboutMeForm({ updateFunction, infoObject }) {

  const [tempObject, setTempObject] = useState({...infoObject})

  function handleName(name) {
    const tempObject = {...infoObject, name:name }
    updateFunction(tempObject)
  }

  function handleRole(role) {
    const tempObject = {...infoObject, role:role }
    updateFunction(tempObject)
  }

  function handlePNum(pNum) {
    const tempObject = {...infoObject, pNum:pNum }
    updateFunction(tempObject)
  }

  function handleEmail(email) {
    const tempObject = {...infoObject, email:email }
    updateFunction(tempObject)
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
      <input type="text" id="name" onChange={(e) => handleName(e.target.value)} value={infoObject.name} />
      <label htmlFor="name">Role:</label>
      <input type="text" id="role" onChange={(e) => handleRole(e.target.value)} value={infoObject.role} />
      <label htmlFor="pNum">Phone Number:</label>
      <input type="tel" id="pNum" onChange={(e) => handlePNum(e.target.value)} value={infoObject.pNum} />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" onChange={(e) => handleEmail(e.target.value)} value={infoObject.email} />
      <button>Update</button>
    </form>
  )
}

function ExperienceForm({ updateFunction }) {

  const [name, setName] = useState("")
  const [pNum, setPNum] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e) {
    
    e.preventDefault()

    const tempObject = {
      name: name, pNum: pNum, email: email
    }

    updateFunction(tempObject)
  }


  return (
    <form className="form-content">
      <label htmlFor="companyName">Company Name:</label>
      <input type="text" id="companyName" />
      <label htmlFor="startDate">Start Date:</label>
      <input type="date" id="startDate" />
      <label htmlFor="endDate">End Date:</label>
      <input type="date" id="endDate" />
      <label htmlFor="jobDescription">Job Description:</label>
      <textarea name="jobDescription" id="jobDescription"></textarea>
      <button>Update</button>
    </form>
  )
}

function EducationForm({ updateFunction }) {
  return (
    <form className="form-content">
      <label htmlFor="schoolName"></label>
      <input type="text" id="schoolName" />
      <label htmlFor="startDate"></label>
      <input type="date" id="startDate" />
      <label htmlFor="endDate"></label>
      <input type="date" id="endDate" />
      <label htmlFor="achievments"></label>
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
  const [experience, setExperience] = useState({ companyName: "", startDate: "", endDate: "", jobDescription: "" })
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
          {
            aboutMe.filled && (<h1>{aboutMe.name}, {aboutMe.role}</h1>)
            }
         
          {
          aboutMe.filled && (<h3>{aboutMe.pNum}, {aboutMe.email}</h3>)
          }
        </div>
        <div className="experience-section">{ }</div>
        <div className="education-section">{ }</div>
      </div>
    </>
  )
}

export default App
