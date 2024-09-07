/* eslint-disable react/prop-types */
function WorkExperiences({ experiences, onChange, onAdd, onRemove }) {
    return (
        <>
            {
                experiences.map((exp, index) => {
                    return (
                        <div key={exp.id} >

                            <div className="form-row">
                                <label htmlFor="company" className={experiences[index].company && "filled"}>Company</label>
                                <input name="company" value={experiences[index].company} onChange={(e) => onChange(index, 'company', e.target.value)} type="text" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="role" className={experiences[index].role && "filled"}>Role</label>
                                <input name="role" value={experiences[index].role} onChange={(e) => onChange(index, 'role', e.target.value)} type="text" />
                            </div>

                            <div className="form-row">
                                <label htmlFor="startDate" className={experiences[index].startDate && "filled"}>Start Date</label>
                                <input name="startDate" value={experiences[index].startDate} onChange={(e) => onChange(index, 'startDate', e.target.value)} type="date" />
                            </div>

                            <div className="form-row">                
                                <label htmlFor="endDate" className={experiences[index].endDate && "filled"}>End Date</label>
                                <input name="endDate" value={experiences[index].endDate} onChange={(e) => onChange(index, 'endDate', e.target.value)} type="date" />
                            </div>

                            <div className="form-row">
                                <label htmlFor="description" className={experiences[index].description && "filled"}>Description</label>
                                <textarea name="description" value={experiences[index].description} onChange={(e) => onChange(index, 'description', e.target.value)} type="text" />
                            </div>

                            <div className="bottom-buttons">
                            <button onClick={() => onRemove(index)}>Remove Experience</button>
                            { index == (experiences.length - 1) && <button onClick={onAdd} >Add Experience</button>  }
                            </div>
                        </div>
                    )

                })
            }
            

        </>
    )
}

export default WorkExperiences;