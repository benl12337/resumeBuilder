/* eslint-disable react/prop-types */
 
function PersonalDetails( {details, onChange} ) {
    return (
        <>
            <div className="form-row">
            <label htmlFor="fullName" className={details.name && "filled"}>Full Name</label>
            <input
                type="text"
                value={details.name}
                name="fullName"
                onChange={(e)=>onChange("name", e.target.value)}
            />
            </div>
            
           <div className="form-row">
            <label htmlFor="email" className={details.email && "filled"}>Email</label>
            <input name="email" type="email" value={details.email} onChange={(e)=>onChange("email", e.target.value)}/>
            </div>
            
            <div className="form-row">
            <label htmlFor="phone" className={details.number && "filled"}>Phone Number</label>
            <input name="phone" type="tel" value={details.number} onChange={(e)=>onChange("number", e.target.value)} />
            </div>
        </>
    )
}

export default PersonalDetails;