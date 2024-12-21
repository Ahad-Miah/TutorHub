import { GrUserExpert } from "react-icons/gr";
import { MdPriceCheck } from "react-icons/md";
import { MdScheduleSend } from "react-icons/md";

const Features = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
        <h2 className="text-4xl text-center font-extrabold text-white mb-12">
            Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Expert Tutors Card */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105">
                <div className="bg-yellow-500 text-white p-4 rounded-full inline-block mb-4">
                <GrUserExpert className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Expert Tutors</h3>
                <p className="text-gray-600">
                    Our tutors are highly experienced and passionate about teaching, ensuring the best learning experience.
                </p>
            </div>

            {/* Affordable Pricing Card */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105">
                <div className="bg-yellow-500 text-white p-4 rounded-full inline-block mb-4">
                <MdPriceCheck className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Affordable Pricing</h3>
                <p className="text-gray-600">
                    We offer competitive rates for top-quality tutoring that fits any budget, with no hidden fees.
                </p>
            </div>

            {/* Convenient Scheduling Card */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105">
                <div className="bg-yellow-500 text-white p-4 rounded-full inline-block mb-4">
                <MdScheduleSend className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Convenient Scheduling</h3>
                <p className="text-gray-600">
                    Choose when you want to learn and fit tutoring sessions into your schedule with ease.
                </p>
            </div>
        </div>
    </section>
    );
};

export default Features;