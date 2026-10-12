
    import { FiPlus } from "react-icons/fi";

    export default function FAQ() {
      const faqs = [
        "Is HireHub free for job seekers?",
        "How do I create a profile on HireHub?",
        "Can I apply to multiple jobs at once?",
        "How do I contact employers?",
      ];
    
      return (
        <div className="bg-black w-full py-16 mt-4">
        
          <div className="flex flex-col justify-center items-center">
            <button className="bg-[#45738c] text-white px-6 py-2 rounded-lg">
              FAQ
            </button>
    
            <h1 className="text-4xl font-bold text-white mt-5">
              Frequently Asked Questions
            </h1>
    
            <p className="text-gray-400 mt-4 text-center">
              Everything you need to know about finding jobs and hiring on HireHub.
            </p>
          </div>
    
          {/* FAQ Items */}
          <div className="mt-12 w-3/4 mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-5 flex justify-between items-center hover:border-blue-500 "
              >
                <h2 className="text-white text-xl">{faq}</h2>
                <FiPlus className="text-white text-2xl cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      );
    }
  
