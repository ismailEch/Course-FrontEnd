import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios  from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getPlan } from '../../slice/planSlice'


function Plan() {
    const dispatch = useDispatch()
    const plans = useSelector(state =>state.plans.plans)
    console.log( useSelector(state =>state.plans.plans))
    
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const res = await axios.get('http://localhost:3000/api/plan')
                dispatch(getPlan(res.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])
    return (
        <div className='vh-100 bg-primary'>
            <button className='btn btn-success btn-sm'>
                add+
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {plans.map(plan =>{
                        return <tr>
                            <td>{plan.name}</td>
                            <td>{plan.price}</td>
                            <td>{plan.description}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Plan
