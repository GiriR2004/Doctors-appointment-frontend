import React, { useState } from "react"; // Import useState from React
import avatar from "../../assets/images/avatar-icon.png"; // Ensure this path is correct
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from "./FeedbackForm";
import Sidepanel from "./Sidepanel";

const Feedback = () => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false); // Initialize useState

    return (
        <div>
            <div className="mb-[50px]">
                <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
                    All reviews(272)
                </h4>
            </div>

            <div className="flex gap-10 mb-[30px]">
                <div className="flex items-center">
                    <figure className="w-10 h-10 rounded-full">
                        <img className="w-full" src={avatar} alt="" />
                    </figure>
                    <div className="ml-4">
                        <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                            Ali Ahmed 
                        </h5>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold" color="">
                            26 jun, 2006
                        </span>
                        <p className="text_para mt-3 font-medium text-[15px]">
                            Good Services, highly recommended
                        </p>
                    </div>
                </div>

                <div className="flex gap-1"> {/* Changed class to 'flex' for horizontal alignment */}
                    {[...Array(5).keys()].map((_, index) => (
                        <AiFillStar key={index} color="#0067FF" />
                    ))}
                </div>
            </div>

            { !showFeedbackForm && 
                <div className="text-center">
                    <button className="btn" onClick ={()=>setShowFeedbackForm(true)}> {/* Corrected onclick to onClick */}
                        Give Feedback
                    </button>
                </div>
            }

            {showFeedbackForm && <FeedbackForm />}
        </div>
    );
};

export default Feedback;
