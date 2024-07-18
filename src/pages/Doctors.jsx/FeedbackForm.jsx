import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const[reviewText,setReviewText] = useState("");

    const handleSubmitReview = async e=>{
        e.preventDefault()
    }

    return (
        <form action="">
            <div>
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                    How would you rate the overall Experience?*
                </h3>

                <div>
                    {[...Array(5).keys()].map((_, index) => {
                        const ratingValue = index + 1;

                        return (
                            <button
                                key={index}
                                type="button"
                                className={`${
                                    ratingValue <= (hover || rating)
                                        ? "text-yellowColor"
                                        : "text-gray-400"
                                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                onClick={() => setRating(ratingValue)}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                                onDoubleClick={() => {
                                    setRating(0);
                                    setHover(0);
                                }}
                            >
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>


            <div className="mt-[30px]">
            <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                    Share your feedback or suggestions*
                </h3>

                <textarea 
                    name="message" 
                    className="border border-solid border-[#0066ff] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md" 
                    rows="8" 
                    placeholder="Write your message here..."
                    onchange={e=>setReview(e.target.value)}
                ></textarea>
            </div>

            <button type="submit" onclick={handleSubmitReview} className="btn">
                Submit Feedback
                </button>
        </form>
    );
};

export default FeedbackForm;
