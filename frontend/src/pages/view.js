import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import http from "../http";

export default function View(props){
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
    return (
        <div className="text-center mt-5">
            <div className="row justify-content-md-center">
                <div className="col-sm-8">
                    <div className="card shadow">
                        <h2 className="mt-3">Users</h2>
                        <div className="row text-start">
                            <div className="col-sm-8 justify-content-center container">
                                <div className="card shadow mb-5 p-4">
                                    <h4>Name</h4>
                                    <p>{ inputs.name }</p>
                                    <h4>Email</h4>
                                    <p>{ inputs.email }</p>
                                    <Link className='btn btn-primary text-light' to={"/"}>Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
