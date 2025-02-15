import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { toast } from "react-toastify";
import { getProfileApi, updateProfileApi } from "../network/api"; // Assume an update API exists
import { useSelector } from "react-redux";

const EditProfile = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    skills: "",
    image: "",
    dob: "",
    education: [
      {
        degree: "",
        institution: "",
        year: "",
      },
    ],
  }); // State to hold profile data
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission
  const id = useSelector((state) => state.auth.student.user.id);

  // Fetch profile data
  const fetchData = async () => {
    try {
      const response = await getProfileApi();
      if (response.status === 200 && response.data) {
        setData(response.data.profile); // Update state with profile data
      }
    } catch (e) {
      toast.error(e.response?.data?.message ?? "Failed to fetch profile data");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle education field changes
  const handleEducationChange = (e, field) => {
    const value = e.target.value;
    setData((prev) => ({
      ...prev,
      education: [
        {
          ...prev.education[0],
          [field]: value,
        },
      ],
    }));
  };

  // Handle file input for the image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  // Save profile data
  const handleSave = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "education") {
          formData.append("education", JSON.stringify(data.education));
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await updateProfileApi(id, data); // Replace with your actual API call
      if (response.status === 200) {
        toast.success("Profile updated successfully");
      }
    } catch (e) {
      toast.error(e.response?.data?.message ?? "Failed to update profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-lg font-semibold text-gray-500">Loading...</p>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <form onSubmit={handleSave}>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium">Name:</label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium">Email:</label>
              <input
                type="email"
                id="email"
                value={data.email}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium">Phone:</label>
              <input
                type="text"
                id="phone"
                value={data.phone}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium">Address:</label>
              <input
                type="text"
                id="address"
                value={data.address}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block font-medium">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={data.dob}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Education: Degree */}
            <div>
              <label className="block font-medium">Degree:</label>
              <input
                type="text"
                value={data.education[0]?.degree || ""}
                onChange={(e) => handleEducationChange(e, "degree")}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Education: Institution */}
            <div>
              <label className="block font-medium">Institution:</label>
              <input
                type="text"
                value={data.education[0]?.institution || ""}
                onChange={(e) => handleEducationChange(e, "institution")}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Education: Year */}
            <div>
              <label className="block font-medium">Year:</label>
              <input
                type="text"
                value={data.education[0]?.year || ""}
                onChange={(e) => handleEducationChange(e, "year")}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block font-medium">Skills:</label>
              <input
                type="text"
                id="skills"
                value={data.skills}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Save Button */}
            <button
              className={`mt-4 bg-green-500 text-white py-2 px-4 rounded ${
                isSubmitting ? "opacity-50" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default EditProfile;
