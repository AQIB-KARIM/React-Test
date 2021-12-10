import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const Filter = () => {
    return (
        <div className = "Main-Filter">
            <div className='container-fluid' >
                <div className = 'filter-container' style={{ backgroundColor: "white" }} >
                    <div className='spacing'>
                        <strong>Location</strong>
                        <p>Where are you going?</p>
                    </div> |

                    <div className='spacing'>
                        <strong>Check in</strong>
                        <p>Add dates</p>
                    </div>|
                    <div className='spacing'>
                        <strong>Check Out</strong>
                        <p>Add dates</p>
                    </div>|
                    <div className='spacing'>
                        <strong>Guestes</strong>
                        <p>add guests</p>
                    </div>

                    <div >
                    <button className='search btn-danger btn-sm' style = {{marginLeft:"70px"}}><SearchIcon/></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Filter
