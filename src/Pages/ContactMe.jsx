import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactMe = () => {
    const handleSendEmail=(e)=>{
        e.preventDefault();
        toast.success("Message Sent Successfully");
        e.target.reset();
    }
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-2xl p-8 max-w-4xl w-full flex flex-col md:flex-row">
        
        {/* Contact Info Sidebar */}
        <div className="md:w-1/3 border text-white p-6 rounded-lg flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <div className="flex  items-center gap-2 mb-3">
            <FaEnvelope className="text-xl" />
            <p>support@tutorhub.com</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <FaPhoneAlt className="text-xl" />
            <p>+123 456 7890</p>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xl" />
            <p>123 New York, USA</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Contact Us</h2>
          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-600">Name</label>
              <input type="text" required placeholder="Enter your name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input type="email" required placeholder="Enter your email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            <div>
              <label className="block text-gray-600">Subject</label>
              <input type="text" placeholder="Enter subject" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            <div>
              <label className="block text-gray-600">Message</label>
              <textarea rows="4" required placeholder="Your message..." className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
            </div>
            <button className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
