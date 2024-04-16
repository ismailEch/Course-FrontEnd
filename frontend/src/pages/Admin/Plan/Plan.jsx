import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios  from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../../slice/planSlice'


function Plan() {
    const dispatch = useDispatch()
    const plans = useSelector(state =>state.plans.plans)
    const error = useSelector(state => state.plans.error )

    
    useEffect(()=>{
        dispatch(fetchData())

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
                        return <tr key={plan._id}>
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
