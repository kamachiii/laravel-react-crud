import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import http from "../http";

export default function Create(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handlechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    const submitForm = () =>{
        http.post('/users', inputs).then((res)=>{
            navigate('/');
        })
    }
    return (
        <div className="text-center mt-5">
            <div className="row justify-content-md-center">
                <div className="col-sm-8">
                    <div className="card shadow">
                        <h2 className="mt-3">New Users</h2>
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

                                <label>Password</label>
                                <input type="password" className="form-control mb-2" name="password"
                                        value={inputs.password || ''}
                                        onChange={handlechange} />

                                <div className="text-center">
                                    <button type="button" onClick={submitForm} className="btn btn-primary text-light mt-2 mb-3">Create</button>
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
