import React from 'react'
import './Sona_About.css';
import Arrow_Left from '../../../assets/arrow_Left.svg'
import Bot_bol_3 from '../../../assets/bot_bol_3.png'
import Idea_white from '../../../assets/idea_white.svg'

function Your_choice() {
    return (
        <>
            <div className="Your_choice">
                <div className="flex-column">
                    <div className="Your_choice_leftArrow">
                        <img src={Arrow_Left} alt="" />
                    </div>
                    <div className="YourChoice_Details">
                        <h2 className="text-center">
                            We're Your Choice for Aluminium Collapsible <br />
                            Tubes, Containers and Aluminium Bottles/Flasks
                        </h2>
                        <p className="text-center sans_light p-3">With over three decades of experience, Sona Extrusion have made a mark as the pioneer of aluminium collapsible tubes, containers and  aluminium bottles/flasks. Our focus has always been on quality, innovation and customer satisfaction. We have developed a reputation for creating products that are of the highest calibre, dependable and customizable to suit the various industries requirements.</p>
                    </div>
                    <div className='AboutSonaEx_Btn d-flex justify-content-center mb-5'>
                        <button type="button" className='btn'>Learn More</button>
                    </div>
                    <div className='YAboutSonaEx_tubes d-flex justify-content-center '>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img src={Bot_bol_3} alt="" />
                        </div>

                        <div className='YourChoice_tubes_box d-flex align-items-start'>
                            <div className=''>
                                <img src={Idea_white} alt="" />
                            </div>
                            <div className='flex-column text-white p-3'>
                                <h3 className='sans_light'>500 Mn Tubesubes</h3>
                                <p className='sans_light'>By leveraging advanced technology, hiring highly skilled professionals and engaging sustainable production practices, Sona Extrusion is one of the leading manufacturers of aluminium packaging solutions. We produce 500 Mn collapsible tubes per annum, making us one of the country's most sought-after packaging companies.duce high quality collapsible multipurpose tubes that are versatile and easy to use.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Your_choice
