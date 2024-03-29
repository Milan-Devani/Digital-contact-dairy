import React from 'react';

function Op() {
    return (
        <div className='container '>

            <form className='border mx-auto w-75'>
                <div className=' mx-auto d-flex d-flex justify-content-between flex-wrap'>
                    <div className='w-50 mx-auto'>
                        <label className='w-75 mx-auto d-block'>Name</label>
                        <input className='p-1 w-75 mx-auto d-block' placeholder="Name" required />
                    </div>
                    
                    <div className='w-50 mx-auto'>
                        <label className='w-75 mx-auto d-block'>Address</label>
                        <input className='p-1 w-75 mx-auto d-block' placeholder="Address" required />
                    </div>
                </div>

                <div className=''>
                    <button className='mx-auto d-block btn btn-success w-25' >add</button>
                </div>
                {/* <div className='d-flex justify-content-end'>
    {!id ? <button className=' m-0 w-100 btn btn-success' onClick={handleCreate}>Create</button> :
        <Link to="/"><button className='btn btn-primary w-100' onClick={handleUpdate}>Update</button></Link>}
</div> */}
            </form>

            {/* <thead>
<tr>
    <th className='border p-2 border-dark text-center'>Name</th>
    <th className='border p-2 border-dark text-center'>Contact Number</th>
    <th className='border p-2 border-dark text-center'>Mail ID</th>
    <th className='border p-2 border-dark text-center'>Address</th>
    <th className='border p-2 border-dark text-center action'>Actions</th>
</tr>
<tr className='p-0'>
    <th className='p-0 m-0'><input className='p-2' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required /></th>
    <th className='p-0 m-0'><input className='p-2' type='phone' maxLength={10} value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number" required /></th>
    <th className='p-0 m-0'><input className='p-2' type='mail' value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Mail" required /></th>
    <th className='p-0 m-0'><input className='p-2' value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required /></th>
    <th className='p-0 m-0'></th>
</tr>
</thead> */}
        </div>
    );
}

export default Op;

