import React, { useState } from 'react'

function Table() {

    const [inputData, setInputData] = useState({ name: "", number: "" });
    const [array, setArray] = useState([])
    const [index, setIndex] = useState()
    const [isUpdate, setIsUpdate] = useState(false);
    let { name, number } = inputData; // desstructuring inputData

    const handleInputData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleAddInputData = () => {
        if (name === "" || number === "") {
            alert("Please enter name and number");
        } else {
            setArray([...array, { name, number }]) // spread opertor to add inputData to array
            setInputData({ name: "", number: "" }); // empty inpu fields after
        }
    };//comment

    const handleDeleteData = (i) => {
        // console.log("This is to be deleted", i);
        let wholeArray = [...array]
        wholeArray.splice(i, 1);
        setArray(wholeArray);
    };

    const handleUpdateData = (i) => {
        let { name, number } = array[i]
        setInputData({ name, number })
        setIsUpdate(true)
        setIndex(i);
    };

    const handleUpdateInfo = () => {
        let total = [...array]
        total.splice(index, 1, { name, number })
        setArray(total);
        setIsUpdate(false);
        setInputData({ name: "", number: "" }); // empty inpu fields after
    }

    return (
        <div>
            <input type='text' value={inputData.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={handleInputData} />
            <input type='number' value={inputData.number || ""} name='number' autoComplete='off' placeholder='Enter Number' onChange={handleInputData} />
            <button onClick={!isUpdate ? handleAddInputData : handleUpdateInfo}>{!isUpdate ? 'Add Data' : 'Update Data'}</button>

            <br />

            <table border="1" width="100%">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Number</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>

                    {
                        array && array.map(
                            (item, i) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.number}</td>
                                        <td><button onClick={() => handleUpdateData(i)}>update</button></td>
                                        <td><button onClick={() => handleDeleteData(i)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table