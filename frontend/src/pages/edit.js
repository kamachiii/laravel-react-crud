import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import http from "../http";

export default function Edit(props){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [users, setUsers] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser = () => {
        http.get('users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
            });
        });
    }

    const handlechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    const submitForm = () =>{
        http.put('/users/'+id, inputs).then((res)=>{
            navigate('/');
        })
    }
    return (
        <div className="text-center mt-5">
            <div className="row justify-content-md-center">
                <div className="col-sm-8">
                    <div className="card shadow">
                        <h2 className="mt-3">Edit Users</h2>
                        <div className="row text-start">
                            <div className="col-sm-8 justify-content-center container">
                                <label>Name</label>
                                <input type="text" className="form-control mb-2" name="name"
                                        value={inputs.name || ''}
                                        onChange={handlechange} />

                                <label>Email</label>
                                <input type="email" className="form-control mb-2" name="email"
                                        value={inputs.email || ''}
                                        onChange={handlechange} />

                                <div className="text-center">
                                    <button type="button" onClick={submitForm} className="btn btn-primary text-light mt-2 mb-3">Update</button>
                                </div>
                            </div>
                        </div>
                            <Link className='btn btn-primary text-light' to={"/"}>Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
