import React from 'react';
import BannerImg from '../assets/more/3.png';
import AwesomeAroma from '../assets/icons/1.png';
import HighQuality from '../assets/icons/2.png';
import PureGrade from '../assets/icons/3.png';
import ProperRoasting from '../assets/icons/4.png';

const Banner = () => {
    return (
        <div>
            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
                style={{ backgroundImage: `url(${BannerImg})` }}
            >
                <div className="text-center text-white  bg-opacity-50 p-6 rounded">
                    <h1 className="text-3xl md:text-5xl  mb-4 rancho ">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="text-lg mb-6">
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! 
                        Your companion of every moment!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <button className="rancho bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center py-12 px-4 bg-[#fdfdfd]">
                <div>
                    <img src={AwesomeAroma} alt="Awesome Aroma" className="mx-auto mb-4 w-12 h-12" />
                    <h3 className="font-bold text-[#331A15] rancho text-xl mb-2">Awesome Aroma</h3>
                    <p className="text-sm text-gray-600">You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={HighQuality} alt="High Quality" className="mx-auto mb-4 w-12 h-12" />
                    <h3 className="font-bold text-[#331A15] rancho text-xl mb-2">High Quality</h3>
                    <p className="text-sm text-gray-600">We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src={PureGrade} alt="Pure Grades" className="mx-auto mb-4 w-12 h-12" />
                    <h3 className="font-bold text-[#331A15] rancho text-xl mb-2">Pure Grades</h3>
                    <p className="text-sm text-gray-600">The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src={ProperRoasting} alt="Proper Roasting" className="mx-auto mb-4 w-12 h-12" />
                    <h3 className="font-bold text-[#331A15] rancho text-xl mb-2">Proper Roasting</h3>
                    <p className="text-sm text-gray-600">Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
