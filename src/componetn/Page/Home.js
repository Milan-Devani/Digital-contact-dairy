import React, { useEffect, useState } from 'react';
import { firebaseconfing } from '../../config/firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
    });
}

function Home() {
    const [val, setVal] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = async (id) => {
        const deleteVal = doc(firebaseconfing, "digital-contact-diary", id);
        await deleteDoc(deleteVal);
    };
    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(collection(firebaseconfing, "digital-contact-diary"));
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        getData();
    }, [handleDelete]);

    // Filter data based on search term
    const filteredData = val
        .filter(value => {
            return (
                toPascalCase(value?.name?.toLowerCase()).includes(toPascalCase(searchTerm.toLowerCase())) ||
                toPascalCase(value.number.toLowerCase()).includes(toPascalCase(searchTerm.toLowerCase())) ||
                toPascalCase(value.address.toLowerCase()).includes(toPascalCase(searchTerm.toLowerCase())) ||
                toPascalCase(value.mail.toLowerCase()).includes(toPascalCase(searchTerm.toLowerCase()))
            );
        })
        .sort((a, b) => toPascalCase(a.name).localeCompare(toPascalCase(b.name)));

    return (
        <div className='container'>
            <div className='my-3'>
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Search contact details"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th className='border p-1 border-dark text-center'>NO .</th>
                        <th className='border p-1 border-dark text-center'>Name</th>
                        <th className='border p-1 border-dark text-center'>Contact Number</th>
                        <th className='border p-1 border-dark text-center'>Mail ID</th>
                        <th className='border p-1 border-dark text-center'>Address</th>
                        <th className='border p-1 border-dark text-center action'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((values, index) => (
                            <tr key={values.id}>
                                <td className='border border-dark text-center'>{index + 1}</td>
                                <td className='border border-dark '>{toPascalCase(values?.name)}</td>
                                <td className='border border-dark '>{values?.number}</td>
                                <td className='border border-dark '>{values?.mail}</td>
                                <td className='border border-dark '>{values?.address}</td>
                                <td className='border border-dark '>
                                    <button className='w-50 btn btn-danger' onClick={() => handleDelete(values?.id)}>Delete</button>
                                    <Link to={`/contact?id=${values?.id}&name=${values?.name}&address=${values?.address}&mail=${values?.mail}&number=${values?.number}`}>
                                        <button className='w-50 btn btn-secondary'>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className='border border-dark text-center'>No data available</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
}

export default Home;
