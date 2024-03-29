// import React, { useEffect, useState } from 'react';
// import { firebaseconfing } from '../../config/firebase';
// import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

// function Home() {
//     const [name, setName] = useState('');
//     const [address, setAddress] = useState('');
//     const [mail, setMail] = useState('');
//     const [number, setNumber] = useState('');
//     const [id, setId] = useState('');

//     const [show, setShow] = useState(false);
//     const [val, setVal] = useState([]);

//     const value = collection(firebaseconfing, "digital-contact-diary");


//     const handleCreate = async (e) => {
//         e.preventDefault();
//         await addDoc(value, {
//             name: name,
//             address: address,
//             mail: mail,
//             number: number
//         });
//         setName('');
//         setAddress('');
//         setMail('');
//         setNumber('');
//     };

//     const handleDelete = async (id) => {
//         const deleteVal = doc(firebaseconfing, "digital-contact-diary", id);
//         await deleteDoc(deleteVal);
//     };

//     const handleEdit = async (id, n, addr, m, num) => {
//         setName(n);
//         setAddress(addr);
//         setMail(m);
//         setNumber(num);
//         setId(id);
//         setShow(true);
//     };

//     const handleUpdate = async () => {
//         const updateData = doc(firebaseconfing, "digital-contact-diary", id);
//         await updateDoc(updateData, {
//             name: name,
//             address: address,
//             mail: mail,
//             number: number
//         });
//         setShow(false);
//         setName('');
//         setAddress('');
//         setMail('');
//         setNumber('');
//     };

//     useEffect(() => {
//         const getData = async () => {
//             const dbVal = await getDocs(value);
//             setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
//         };
//         getData();
//     }, [handleCreate, handleDelete, handleUpdate]);

//     return (
//         <div className='container'>
//             <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//             <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
//             <input value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Mail" />
//             <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number" />
//             {!show ? <button  onClick={handleCreate}>Create</button> :
//                 <button onClick={handleUpdate}>Update</button>}
//             {
//                 val.map(values =>
//                     <div key={values.id}>
//                         <h1>{values.id}</h1>
//                         <h1>{values.name}</h1>
//                         <h1>{values.address}</h1>
//                         <h1>{values.mail}</h1>
//                         <h1>{values.number}</h1>
//                         <button onClick={() => handleDelete(values.id)}>Delete</button>
//                         <button onClick={() => handleEdit(values.id, values.name, values.address, values.mail, values.number)}>Edit</button>
//                     </div>)
//             }
//         </div>
//     );
// }

// export default Home;