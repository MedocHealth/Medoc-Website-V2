import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className="form min-h-screen flex items-center justify-center  p-4">
            <div className=" w-full bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2 bg-gradient-to-r from-teal-300 to-gray-600 p-8 text-white flex flex-col justify-center">
                        <h2 className="medoc-form-title">Medoc Free Demo Registration</h2>
                        <p className="medoc-form-para">Welcome to Medoc! Simplify healthcare with affordable finances and trusted family medicine. Join us today!</p>
                    </div>

                    {/* Form begins here */}
                    <div className="md:w-1/2 p-8">
                        <form action="https://formspree.io/f/mjvnnlnq" method="POST" className="space-y-4">
                            <input
                                type="text"
                                placeholder="Doctor/Hospital Name"
                                className="w-full px-3 py-2 border input-font-style border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <select name="Specialities" placeholder="Type" className="input-font-style w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="general">Type</option>
                                <option value="general">Doctor</option>
                                <option value="pediatrics">Hospital</option>
                                <option value="cardiology">Clinic</option>
                                <option value="neurology">Emergency</option>
                                <option value="orthopedics">Other</option>
                            </select>

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input-font-style w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <select name="States" className="input-font-style w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select a State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>

                            <div className="flex">
                                <select name="Country-Code" className="input-font-style w-[28%] px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="+91">+91 India</option>
                                    <option value="+1">+1 USA/Canada</option>
                                    <option value="+44">+44 United Kingdom</option>
                                    <option value="+49">+49 Germany</option>
                                    <option value="+33">+33 France</option>
                                    <option value="+81">+81 Japan</option>
                                    <option value="+61">+61 Australia</option>
                                    <option value="+86">+86 China</option>
                                    <option value="+55">+55 Brazil</option>
                                    <option value="+27">+27 South Africa</option>
                                    <option value="+82">+82 South Korea</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="input-font-style w-3/4 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input-font-style w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <textarea
                                placeholder="Your message....."
                                rows="4"
                                className="input-font-style w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="input-font-style w-full bg-gradient-to-r from-teal-300 to-gray-600 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
                            >
                                Request Free Demo
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;

