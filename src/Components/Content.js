import React from 'react'

const Content = () => {
    return (
        <div>

            <div class="card content-card" >
                <div class="row g-0">

                    <div class="col-md-6">
                        <div className='text-center' style={{ marginTop: "20%", fontSize: "75px", fontWeight: "bold", }}>
                            <h4 class="card-title">Introducing</h4>
                            <p class="card-text">
                                Airbnb gift cards
                            </p>
                            <div>
                                <button className='btn btn-sm button'>Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card-body" >
                            <img style={{ width: "660px", height: "380px" }}
                                src="https://toppng.com/uploads/preview/house-snow-trees-winter-snowfall-light-11570188329yzfrmkdobv.jpg"
                                alt="iten-image"
                                className="img-fluid image"
                            />
                        </div >

                    </div>
                </div>
            </div>






        </div>
    )
}

export default Content


