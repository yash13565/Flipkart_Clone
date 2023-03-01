import React from 'react'
import { atom2 } from '../../Components/ConstData/Constdata'
import { useRecoilValue } from 'recoil'
function Filterdata() {
    let data = useRecoilValue(atom2)
    return (
        <div>
            {
                data.map((x, i) => {
                    return (
                        <div key={i}>
                            <p>{x.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Filterdata