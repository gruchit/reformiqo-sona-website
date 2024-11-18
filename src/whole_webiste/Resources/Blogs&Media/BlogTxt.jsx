import React from 'react'
import './Blog.css'
import BlogImg1 from '../../../assets/Home4.svg'
import BlogImg2 from '../../../assets/Home_main.svg'


function BlogTxt() {
    return (
        <>
            <div className='BlogTxt'>
                <div className='container'>

                    <div className='BlogTxtBody mb-5'>
                        <h2 className='text-center sans_Light mb-5'>Let's Learn More About Aluminium Extrusion News?</h2>
                        <p className='text-center text-secondary sans_Light'>Sona Extrusion is a great place to kickstart your career. You will contribute to our business from day one and get access to build your skills for your future. You’ll also collaborate with global teams, take advantage of opportunities – all in a dynamic environment filled with industry experts.</p>
                        <p className='text-center text-secondary sans_Light'>We take our responsibilities as an employer very seriously. We take good care of our new employees, but we also challenge them from the very beginning by giving them responsibilities very quickly.</p>
                    </div>
                    <div className='BlogBodyBox mt-5'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                <div className='BlogBox'>
                                    <div className='BlogBoxImg'>
                                        <img src={BlogImg1} alt="" srcset="" />
                                    </div>

                                    <div className='BlogBoxTxt p-3'>
                                        <p className=' sans_Light text-center'>The future of Aluminium Collapsible Tubes</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <button className='btn BlogBtn'>Read More</button>
                                    </div>

                                </div>
                            </div>
                            <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                <div className='BlogBox'>
                                    <div className='BlogBoxImg'>
                                        <img src={BlogImg2} alt="" srcset="" />
                                    </div>
                                    <div className='BlogBoxTxt p-3'>
                                        <p className=' sans_Light text-center'>Define the advantages and application: technological effectiveness in the field of aluminium collapsible tubes?</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <button className='btn BlogBtn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogTxt