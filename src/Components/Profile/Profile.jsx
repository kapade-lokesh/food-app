import React from "react";
import Layout from "../../Layout/Layout";
import { useSelector } from "react-redux";
const Profile = () => {
  const { data } = useSelector((state) => state.Auth);

  return (
    <Layout>
      <div className="px-6 py-24">
        <h1 className="text-xl font-bold mb-4">Welcome to your Profile</h1>
        <div>{data ? `Hello, ${data.name}` : "Welcome to profile"}</div>
      </div>
    </Layout>
  );
};

export default Profile;
