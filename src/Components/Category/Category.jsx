import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { GiIndianPalace } from "react-icons/gi";
import { TbAlphabetKorean } from "react-icons/tb";
import { LuJapaneseYen } from "react-icons/lu";
import { GiItalia } from "react-icons/gi";
import { SiLanguagetool } from "react-icons/si";
import { LuSwissFranc } from "react-icons/lu";
import { LuLanguages } from "react-icons/lu";
import { FaLanguage } from "react-icons/fa";
import { Link } from "react-router-dom";

const languages = [
    { id: 1, icon: <RiEnglishInput />, title: "English" },
    { id: 2, icon: <LuLanguages />, title: "Spanish" },
    { id: 3, icon: <LuSwissFranc />, title: "French" },
    { id: 4, icon: <SiLanguagetool />, title: "German" },
    { id: 5, icon: <GiItalia />, title: "Italian" },
    { id: 6, icon: <LuJapaneseYen />, title: "Japanese" },
    { id: 7, icon: <FaLanguage />, title: "Chinese" },
    { id: 8, icon: <TbAlphabetKorean />, title: "Korean" },
    { id: 9, icon: <GiIndianPalace />, title: "Hindi" },
];
const Category = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Explore Languages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {languages.map((language) => (
                        <Link to={`/findTutors/${language.title}`}
                            key={language.id}
                            className="flex items-center justify-between bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300"
                        >
                            {/* Icon */}
                            <div className="text-4xl text-blue-500">{language.icon}</div>
                            {/* Title */}
                            <h3 className="text-xl font-semibold">{language.title}</h3>
                            {/* Arrow Icon */}
                            <MdKeyboardArrowRight  className="text-blue-500 text-4xl" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;