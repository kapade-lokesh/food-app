import React from "react";
import { Layout } from "../Components";
import { useSelector } from "react-redux";
import {
  CubeIcon,
  BriefcaseIcon,
  CreditCardIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { Profilehead, Personlnfo, Asidemenu } from "../Components";
const Profile = () => {
  const { data } = useSelector((state) => state.Auth);

  const ProfileMenus = [
    {
      heading: "My Orders",
      icon: <CubeIcon />,
      key: "order",
    },

    {
      heading: "Account",
      icon: <BriefcaseIcon />,
      key: "account",
    },

    {
      heading: "Payments",
      icon: <CreditCardIcon />,
      key: "payments",
    },

    {
      heading: "Log Out",
      icon: <PowerIcon />,
      key: "logout",
    },
  ];
  return (
    <div>
      <Layout>
        <div className="px-6 py-24 ">
          <div className="flex flex-row bg-white gap-6  align-center p-6 ">
            {/* first div */}
            <div className="flex-1/4 p-6">
              {/* Welcome name plate */}
              <Profilehead data={data} />
              {/*Aside Bar */}
              <Asidemenu ProfileMenus={ProfileMenus} />
            </div>

            {/* second div */}
            <div className="flex-auto px-6 py-6 shadow-sm shadow-gray-500">
              <Personlnfo data={data} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
