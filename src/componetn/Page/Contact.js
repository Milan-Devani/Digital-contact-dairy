import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import { Link, useLocation } from 'react-router-dom';
import { firebaseconfing } from '../../config/firebase';


function Contact() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const allowedMailDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'icloud.com'];

    const [name, setName] = useState(queryParams.get('name') || '');
    const [address, setAddress] = useState(queryParams.get('address') || '');
    const [mail, setMail] = useState(queryParams.get('mail') || '');
    const [number, setNumber] = useState(queryParams.get('number') || '');
    const [id, setId] = useState(queryParams.get('id') || '');
    const [val, setVal] = useState([]);

    const value = collection(firebaseconfing, "digital-contact-diary");


    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value);
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        getData();
    }, [value]);

    const handleCreate = async (e) => {
        e.preventDefault();

        if (!name || !address || !mail || !number) {
            alert('Please fill in all the required fields.');
            return;
        }

        const isNumberAlreadyExists = val.some((contact) => contact.number === number);
        const isValidMailDomain = allowedMailDomains.some((domain) => mail.endsWith(domain));

        if (isNumberAlreadyExists) {
            alert('This number already exists!');
        } else if (!isValidMailDomain) {
            alert('Invalid mail type');
        } else {
            await addDoc(value, {
                name: name,
                address: address,
                mail: mail,
                number: number
            });
            clearFields();
        }
    };

    const handleUpdate = async () => {
        const updateData = doc(firebaseconfing, "digital-contact-diary", id);
        await updateDoc(updateData, {
            name: name,
            address: address,
            mail: mail,
            number: number
        });
        clearFields();
        setId('');
    };

    const clearFields = () => {
        setName('');
        setAddress('');
        setMail('');
        setNumber('');
    };

    return (
        <div className=''>
            <div className='bg-img container mx-auto'>
                <form className=' form-box border mx-auto w-50'>
                    <div className='seb-box mx-auto d-flex d-flex justify-content-between flex-wrap'>
                        <div className='w-50 mx-auto'>
                            <label className='w-75 mx-auto d-block'>Name</label>
                            <input className='p-1 w-75 mx-auto d-block' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                        </div>

                        <div className='w-50 mx-auto'>
                            <label className='w-75 mx-auto d-block'>Address</label>
                            <input className='p-1 w-75 mx-auto d-block' value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
                        </div>

                        <div className='w-50 mx-auto'>
                            <label className='w-75 mx-auto d-block'>Number</label>
                            <input
                                className='p-1 w-75 mx-auto d-block'
                                type='tel'
                                pattern="[0-9]*"
                                maxLength={10}
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Number"
                                required
                                onKeyPress={(e) => {
                                    // Allow only numeric values (0-9)
                                    const keyCode = e.charCode || e.keyCode;
                                    const isValid = /\d/.test(String.fromCharCode(keyCode));
                                    if (!isValid) {
                                        e.preventDefault();
                                    }
                                }}
                            />

                        </div>

                        <div className='w-50 mx-auto'>
                            <label className='w-75 mx-auto d-block'>Mail id</label>
                            <input
                            className='p-1 w-75 mx-auto d-block'
                            type='email'
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            placeholder="Mail"
                            required
                            pattern={`^[a-zA-Z0-9._-]+@(${allowedMailDomains.join('|')})$`}
                        />
                        </div>
                    </div>

                    <div className=''>
                        {!id ? <button className='mx-auto d-block btn btn-success w-25' onClick={handleCreate}>Create</button> :
                            <Link to="/"><button className='mx-auto d-block btn btn-primary w-25' onClick={handleUpdate}>Update</button></Link>}
                        {/* <button className='mx-auto d-block btn btn-success w-25' >add</button> */}
                    </div>
                    {/* <div className='d-flex justify-content-end'>
    {!id ? <button className=' m-0 w-100 btn btn-success' onClick={handleCreate}>Create</button> :
        <Link to="/"><button className='btn btn-primary w-100' onClick={handleUpdate}>Update</button></Link>}
</div> */}
                </form>
            </div>
        </div>
    );
}

export default Contact;
