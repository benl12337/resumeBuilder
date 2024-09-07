/* eslint-disable react/prop-types */
function Education({ education, onChange, onAdd, onRemove }) {
    return (
        <>
            {
                education.map((edu, index) => {
                    return (
                        <div key={edu.id} >
                            
                            <div className="form-row">
                            <label htmlFor="school" className={education[index].school && "filled"} >School</label>
                            <input name="school" value={education[index].school} onChange={(e) => onChange(index, 'school', e.target.value)} type="text" />
                            </div>

                            <div className="form-row">
                            <label htmlFor="degree" className={education[index].degree && "filled"} >Degree</label>
                            <input name="degree" value={education[index].degree} onChange={(e) => onChange(index, 'degree', e.target.value)} type="text" />
                            </div>

                            <div className="form-row">
                            <label htmlFor="startDate"className={education[index].startDate && "filled"}>Start Date</label>
                            <input placeholder="" name="startDate" value={education[index].startDate} onChange={(e) => onChange(index, 'startDate', e.target.value)} type="date" />
                            </div>

                            <div className="form-row">
                            <label htmlFor="endDate"className={education[index].endDate && "filled"}>End Date</label>  
                            <input placeholder={null} name="endDate" value={education[index].endDate} onChange={(e) => onChange(index, 'endDate', e.target.value)} type="date" />
                            </div>

                            <div className="form-row">
                            <label htmlFor="achievements">Achievements</label>
                            <textarea name="achievements" value={education[index].achievements} onChange={(e) => onChange(index, 'achievements', e.target.value)} type="text" />
                            </div>
                           
                            <div className="bottom-buttons">
                            <button onClick={() => onRemove(index)}>Remove Education</button>
                            {index == education.length - 1 && <button onClick={onAdd} >Add Education</button>}
                            </div>
                        </div>
                    )
                })
            }
             
        </>
    )
}

export default Education;