import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { toast } from "react-toastify";
import { getCoursesApi } from "../network/api";
import Card from "../Components/Card";

const Courses = () => {
  const [data, setData] = useState([]);

  // Fetch courses from the API
  const fetchData = async () => {
    try {
      const response = await getCoursesApi();
      if (response.status === 200) {
        setData(response.data.courses);
        toast.success("Courses Loaded");
      }
    } catch (e) {
      toast.error(e.response?.data?.message ?? "Failed to load courses");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Available Courses
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data && data.length > 0 ? (
              data.map((item, index) => <Card key={index} data={item} />)
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No courses available at the moment.
              </p>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Courses;
