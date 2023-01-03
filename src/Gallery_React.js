import React, { useState } from 'react'
import "./Tab.css";
import Menu from './Menu.js';

const GalleryReact = () => {
    const [items, setItems] = useState(Menu);

    const filter1=(categItem)=>{
        const updateditems = Menu.filter((curElem)=>{
            return curElem.category == categItem;
        });
        setItems(updateditems);

    }

    return (
        <><h1 className='mt-5 text-center main-heading'>Food Gallery</h1>
            <h1 className='mt-5 text-center main-heading'>Order Your favourite</h1>
            <hr />
            <div className='menu-tabs container'>
                <div className='menu-tab d-flex justify-content-around' >
                    <button className="btn btn-warning" onClick={()=> filter1('Breakfast')}>BreakFast</button>
                    <button className="btn btn-warning" onClick={()=> filter1('Lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={()=> filter1('Evening')}>Evening</button>
                    <button className="btn btn-warning" onClick={()=> filter1('Dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={()=> setItems(Menu)}>all</button>
                </div>
            </div>

            {/*my main item section */}
            <div className='menu-items container-fluid mt-5'>
                <div className='row'>
                    <div className='col-11 mx-auto'>
                        <div className='row my-5'>
                            {
                                items.map((elem) => {
                                    const { id, name, image, description, price } = elem;
                                    return (
                                        <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5'>
                                            <div className='row Item-inside'>
                                                {/* for Images */}
                                                <div className='col-12 col-md-12 col-lg-4 img-div'>
                                                    <img src={image} alt={name} className='img-fluid' />
                                                </div>

                                                {/* Menu Descriptions*/}
                                                <div className='col-12 col-md-12 col-lg-8'>
                                                    <div className='main-title pt-4 pb-3'>
                                                        <h1>{name}</h1>
                                                        <p>{description}</p>
                                                    </div>
                                                    <div className='menu-price-book'>
                                                        <div className='price-book-divide d-flex justify-content-between'>
                                                            <h2> Price : Rs {price}</h2>
                                                            <a href='#'>
                                                                <button className='btn btn-primary'>Order Now</button>
                                                            </a>

                                                        </div>
                                                        <p>prices vary on item </p>



                                                    </div>


                                                </div>





                                            </div>
                                        </div>






                                    )
                                })
                            }







                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default GalleryReact;