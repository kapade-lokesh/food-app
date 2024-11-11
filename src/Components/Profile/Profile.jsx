import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useSelector } from "react-redux";
import { UserCircleIcon } from "@heroicons/react/24/outline";
const Profile = () => {
  const { data } = useSelector((state) => state.Auth);

  return (
    <Layout>
      <div className="px-6 py-24">
        <div className="flex align-center justify-between">
          <div className="shadow-sm shadow-gray-500 px-10 py-2">
            <div className="inline-block">
              <UserCircleIcon className="h-10 w-10" />
            </div>

            <div>
              <div className="inline-block">
                <span className="text-lg font-semibold">
                  Welcome to your Profile
                </span>
              </div>

              <div>
                <span className="font-light text-sm ms-10">Hello, </span>
                <span>
                  {data ? `${data && data.name} ` : " Welcome to profile"}
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
