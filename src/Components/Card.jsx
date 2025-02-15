import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Card = ({ data }) => {
  const stud = useSelector((state) => state.auth.student.user);
  const handleSubmit = () => {
    initiateRazorpayPayment(stud.id, "order_Put8O8Hf9NCtd5");
  };

  const initiateRazorpayPayment = async (id, orderId) => {
    try {
      // Razorpay options setup
      const options = {
        key: "rzp_test_IsocOrs4VaPcZ9",
        amount: "500 * 100",
        currency: "INR",
        name: "The Maximus Report",
        description: "Research Paper Submission",
        // order_id: orderId,
        handler: async function (response) {
          // try {
          //   // Send the payment details to your server for verification
          //   await razorPayApi(id, {
          //     razorpay_order_id: response.razorpay_order_id,
          //     razorpay_payment_id: response.razorpay_payment_id, // Include payment ID for verification
          //   });

          toast.success("Payment successful!");
          //   navigate(/payment-success/${response.razorpay_payment_id});
          // } catch (error) {
          //   console.error("Error verifying payment:", error);
          //   toast.error("Payment verification failed.");
          // }
        },
        prefill: {
          name: stud.name,
          email: stud.email,
          //   contact: formData.author_contact,
        },
        theme: {
          color: "#1D4ED8",
        },
      };

      // Open Razorpay modal
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initiating Razorpay payment:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
      }
      toast.error("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <div className="w-full p-4">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl cursor-pointer">
        {/* Course Image */}
        <img
          src={data.courseImage}
          alt="Course Image"
          className="w-full h-48 object-cover"
        />

        {/* Card Content */}
        <div className="p-4 flex flex-col">
          {/* Course Name */}
          <h5
            className="text-lg font-bold text-gray-800 truncate"
            title={data.coursename}
          >
            {data.coursename}
          </h5>

          {/* Brief Description */}
          <p className="text-sm text-gray-600 mt-2">{data.brief}</p>

          {/* Date and Amount */}
          <div className="flex justify-between items-center mt-4">
            {/* Created Date */}
            <div className="flex items-center text-gray-500">
              <i className="bx bx-calendar text-xl"></i>
              <span className="ml-2 text-sm">
                {new Date(data.createdAt).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            {/* Amount */}
            <div className="text-green-600 font-semibold text-lg">
              ₹{data.amount}
            </div>
          </div>

          {/* Buy Now Button */}
          <button
            className="mt-4 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={handleSubmit}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
