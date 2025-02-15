import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { toast } from "react-toastify";
import { getProfileApi } from "../network/api";

const Profile = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await getProfileApi();
      if (response.status === 200 && response.data) {
        setData(response.data.profile);
      }
    } catch (e) {
      toast.error(e.response?.data?.message ?? "Failed to fetch profile data");
    } finally {
      setIsLoading(false);
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
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden mt-10">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-white">
          <div className="flex flex-col items-center text-center">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&s"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
            />
            <h1 className="text-2xl font-bold mt-4">{data.name || "N/A"}</h1>
            <p className="text-sm font-light">{data.email || "N/A"}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">
                Personal Details
              </h2>
              <div className="space-y-4">
                <DetailRow label="Phone" value={data.phone} />
                <DetailRow label="Address" value={data.address} />
                <DetailRow
                  label="Date of Birth"
                  value={
                    data.dob
                      ? new Date(data.dob).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })
                      : "N/A"
                  }
                />
                <DetailRow label="Skills" value={data.skills} />
              </div>
            </div>

            {/* Education Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">
                Education
              </h2>
              <div className="space-y-4">
                <DetailRow label="Degree" value={data.education?.[0]?.degree} />
                <DetailRow
                  label="Institution"
                  value={data.education?.[0]?.institution}
                />
                <DetailRow label="Year" value={data.education?.[0]?.year} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const DetailRow = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600 font-medium">{label}:</span>
      <span className="text-gray-800">{value || "N/A"}</span>
    </div>
  );
};

export default Profile;
