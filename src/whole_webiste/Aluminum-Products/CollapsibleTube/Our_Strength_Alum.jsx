import React from 'react'
import Arrow_Left from '../../../assets/arrow_Left.svg'
import Double_bol_line from '../../../assets/double_bol_line.svg'
import FirstRate from '../../../assets/First-Rate.svg'
import Environment from '../../../assets/Environment.svg'
import Convenient from '../../../assets/Convenient.svg'
import Practical from '../../../assets/Practical.svg'
import './Colla.css'

function Our_Strength_Alum({ Type }) {
    return (
        <>
            <div className='Our_Strength_Alum'>
                <div className='flex-column'>
                    <div className='Our_Strength_Alumimages'>
                        <img src={Arrow_Left} alt="" className='Strength_Alumleft_arwOurSt' />
                        <img src={Double_bol_line} alt="" srcset="" className='Strength_AlumDoubleBolLine_Our' />
                    </div>
                    <div className='Our_Strength_Alumdetails'>
                        <h1 className='sans_bold text-center'>Our Strength</h1>
                        {Type === "Colla" ?
                                        <>
                                           <p className='sans_light text-center text-secondary'>Our Formula for success: Precision manufacturing, quality assurance and
                                           state-of-the-art technology.</p>
                                        </>
                                        :
                                        Type === "Flask" ?
                                            <>
                                                <p className='sans_light text-center text-secondary'>Perfection Delivered: Stylish, versatile and functional Flask and Bottles</p>
                                            </>
                                            :
                                            Type === "Table" ?
                                                <>
                                                   <p className='sans_light text-center text-secondary'>Durability and Convenience: Market leaders in tablet canisters</p>
                                                </>
                                                :
                                                <>
                                                    sorry
                                                </>
                                    }

                    </div>
                    <div className='Our_Strength_Alumcards_details'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-3 col-lg-4 col-md-6 mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 d-flex justify-content-center'>
                                <div className='Our_Strength_Alumcards flex-column '>
                                    {Type === "Colla" ?
                                        <>
                                            <div>
                                                <div>
                                                    <img src={FirstRate} alt="" className='OurSoluImgAlum' />
                                                </div>
                                                <div className='mt-5'>
                                                    <h5 className='sans_Medium'>First Rate Quality</h5>
                                                    <p className='text-secondary sans_Light mt-3'>We cater to a wide-range of industries providing them with highly durable, flexible, and lightweight premium quality aluminium collapsible tubes.</p>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        Type === "Flask" ?
                                            <>
                                                <div>
                                                    <img src={FirstRate} alt="" className='OurSoluImgAlum' />
                                                </div>
                                                <div className='mt-5'>
                                                    <h5 className='sans_Medium'>High Quality Material</h5>
                                                    <p className='text-secondary sans_Light mt-3'>Our flasks and bottles are constructed from the best materials available to last you a long time and withstand use.</p>
                                                </div>
                                            </>
                                            :
                                            Type === "Table" ?
                                                <>
                                                    <div>
                                                        <img src={FirstRate} alt="" className='OurSoluImgAlum' />
                                                    </div>
                                                    <div className='mt-5'>
                                                        <h5 className='sans_Medium'>Resilient & Robust</h5>
                                                        <p className='text-secondary sans_Light mt-3'>Our tablet canisters are designed to withstand wear and tear ensuring long lasting performance and durability.</p>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    sorry
                                                </>
                                    }

                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 mt-5 mt-sm-5 mt-md-0 mt-lg-5 mt-xl-5 mt-xxl-5 d-flex justify-content-center'>
                                <div className='Our_Strength_Alumcards flex-column '>
                                    {Type === "Colla" ?
                                        <>
                                            <div>
                                                <img src={Environment} alt="" className='OurSoluImgAlum' />
                                            </div>
                                            <div className='mt-5'>
                                                <h5 className='sans_Medium'>Environment Safety</h5>
                                                <p className='text-secondary sans_Light mt-3'>We cater to a wide-range of industries providing them with highly durable, flexible, and lightweight premium quality aluminium collapsible tubes.</p>
                                            </div>
                                        </>
                                        :
                                        Type === "Flask" ?
                                            <>
                                                <div>
                                                    <img src={Environment} alt="" className='OurSoluImgAlum' />
                                                </div>
                                                <div className='mt-5'>
                                                    <h5 className='sans_Medium'>Wide Range of Options</h5>
                                                    <p className='text-secondary sans_Light mt-3'>Our flask and bottles come in a wide-range of sizes, shapes, and designs to meet the needs of all types of consumers.</p>
                                                </div>
                                            </>
                                            :
                                            Type === "Table" ?
                                                <>
                                                    <div>
                                                        <img src={Environment} alt="" className='OurSoluImgAlum' />
                                                    </div>
                                                    <div className='mt-5'>
                                                        <h5 className='sans_Medium'>Compact & Portable</h5>
                                                        <p className='text-secondary sans_Light mt-3'>Our tablet canisters are compact and lightweight making them easy to carry without compromising on the quality.</p>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    sorry
                                                </>
                                    }

                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0 d-flex justify-content-center'>
                                <div className='Our_Strength_Alumcards flex-column '>
                                    {Type === "Colla" ?
                                        <>
                                            <div>
                                                <img src={Convenient} alt="" className='OurSoluImgAlum' />
                                            </div>
                                            <div className='mt-5'>
                                                <h5 className='sans_Medium'>Convenient & Handy </h5>
                                                <p className='text-secondary sans_Light mt-3'>We produce tubes that are easy to use, transport, and store, which has made us very well-liked by a variety of business verticals.</p>
                                            </div>
                                        </>
                                        :
                                        Type === "Flask" ?
                                            <>
                                                <div>
                                                    <img src={Convenient} alt="" className='OurSoluImgAlum' />
                                                </div>
                                                <div className='mt-5'>
                                                    <h5 className='sans_Medium'>Highly Versatile</h5>
                                                    <p className='text-secondary sans_Light mt-3'>Our flasks and bottles can be used in a wide variety of industries due to their exceptional versatility.</p>
                                                </div>
                                            </>
                                            :
                                            Type === "Table" ?
                                                <>
                                                    <div>
                                                        <img src={Convenient} alt="" className='OurSoluImgAlum' />
                                                    </div>
                                                    <div className='mt-5'>
                                                        <h5 className='sans_Medium'>Accessible & Efficient </h5>
                                                        <p className='text-secondary sans_Light mt-3'>We utilise our knowledge and skill to deploy processes that allow us to design accessible and efficient product.</p>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    sorry
                                                </>
                                    }

                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 mt-5 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5 mt-xxl-5 d-flex justify-content-center '>
                                <div className='Our_Strength_Alumcards flex-column '>
                                    {Type === "Colla" ?
                                        <>
                                            <div>
                                                <img src={Practical} alt="" className='OurSoluImgAlum' />
                                            </div>
                                            <div className='mt-5'>
                                                <h5 className='sans_Medium'>Practical & Profitable</h5>
                                                <p className='text-secondary sans_Light mt-3'>Our aluminium collapsible tubes are cost-effective and offer value for money along with being efficient, corrosion-resistant, and versatile.</p>
                                            </div>
                                        </>
                                        :
                                        Type === "Flask" ?
                                            <>
                                                <div>
                                                    <img src={Practical} alt="" className='OurSoluImgAlum' />
                                                </div>
                                                <div className='mt-5'>
                                                    <h5 className='sans_Medium'>Reduce Carbon Footprint</h5>
                                                    <p className='text-secondary sans_Light mt-3'>Our commitment to eco-friendliness has encouraged us to adopt processes that produce products that are reusable.</p>
                                                </div>
                                            </>
                                            :
                                            Type === "Table" ?
                                                <>
                                                    <div>
                                                        <img src={Practical} alt="" className='OurSoluImgAlum' />
                                                    </div>
                                                    <div className='mt-5'>
                                                        <h5 className='sans_Medium'>Safe & Long Lasting</h5>
                                                        <p className='text-secondary sans_Light mt-3'>Our tablet canisters provided a secure and safe storage solution, shielding them from any external damage</p>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    sorry
                                                </>
                                    }

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Our_Strength_Alum