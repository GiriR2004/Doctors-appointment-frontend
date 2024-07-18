import React from "react";

const DoctorAbout = () => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                    <span>About of </span>
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                        Muhibur Rahman
                    </span>
                </h3>
                <p className="text__para p-5 px-0">
                    Dr. Muhibur Rahman, a dedicated and skilled physician, specializes in cardiac surgery, boasting over a decade of experience. His commitment to patient care is evident in his compassionate approach and exemplary surgical outcomes. Dr. Rahman's expertise and professionalism make him a trusted name in the medical community, renowned for his contributions to healthcare.
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Education
                </h3>

                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                26 jun, 2006
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                PHD in Surgeon
                            </p>
                            <p className="text-[16px] leading-5 font-medium text-textColor sm:px-0 md:px-50 mt-2"> {/* Adjusted padding */}
                                New Apollo Hospital, New york
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DoctorAbout;
