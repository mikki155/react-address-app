import React, {useState}from 'react';


function Todo(){
    const [isSent, setIsSent] = useState(false)
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");
    const [phoneNumber, setPhonenUmber]= useState("");
    const [address, setAddress]= useState("");

  //  const handleSubmit = ()=> {
        //alert(`Submitting Personal Details: Name- ${name.firstName} ${name.lastName}, Phone number- ${name.phoneNumber}, Address - ${name.Address} `)
  //      alert(JSON.stringify(name))
   // }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        console.log(JSON.stringify({firstName, lastName, phoneNumber, address}))
        e.preventDefault()
        fetch(`/person`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({firstName, lastName, phoneNumber, address})
        })
        .then(res => res.json())
        .then((data) => {
            console.log('Success:', data)
        })
            .catch((error) => {
                console.error('Error:', error)
                })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={e => {
                        setFirstName( e.target.value);
                    }}
                />
                </label>
                <br/>
                <label>
                    Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={e => {
                        setLastName(e.target.value);
                    }}
                />
                </label>
                <br/>
                <label>
                    Phone number:
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={e => {
                        setPhonenUmber(e.target.value);
                    }}
                />
                </label>
                <br/>
                <label>
                    Address:
                <input
                    type="text"
                    value={address}
                    onChange={e => {
                        setAddress(e.target.value);
                    }}
                />
                </label>
                <br/>
                <input type="submit" value="Submit" />
                 <h2> {JSON.stringify(firstName)},{JSON.stringify(lastName)},{JSON.stringify(phoneNumber)},{JSON.stringify(address)}</h2>
            </form>

        </div>

    )
}

export default Todo
