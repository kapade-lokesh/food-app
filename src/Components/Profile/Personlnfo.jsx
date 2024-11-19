import React, { useState, useEffect } from "react";
import Button from "../Common/Buttons/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../Stores/Slices/AuthSilce";
const Personlnfo = () => {
  const { data } = useSelector((state) => state.Auth);
  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState({
    username: data?.username || "",
    email: data?.email || "",
    mobile: data?.mobile || "",
  });

  const dispatch = useDispatch();

  const unableEdit = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const handeleInput = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handeleSubmit = () => {
    dispatch(updateUser({ _id: data._id, ...info }));
    unableEdit();
  };

  return (
    <>
      <div className="px-4 sm:px-0 flex justify-between">
        <div>
          <h3 className="text-base/7 font-semibold text-gray-900">
            Account Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            Personal details
          </p>
        </div>
        <div className="flex gap-2">
          {edit ? (
            <Button title="save" arrow={false} handleClick={handeleSubmit} />
          ) : null}
          <Button
            title={edit ? "Cancle" : "Edit"}
            arrow={false}
            handleClick={unableEdit}
          />
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {edit ? (
                <div className="relative w-1/2">
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={info?.username}
                      onChange={handeleInput}
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              ) : (
                data && data.username
              )}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Gender</dt>
            <dd className="mt-1 flex gap-10 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {edit ? (
                <div className="flex gap-10">
                  <div>
                    <label
                      htmlFor="Address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Male
                    </label>
                    <div className="mt-2">
                      <input
                        id="gender"
                        name="gender"
                        type="radio"
                        value="male"
                        onChange={handeleInput}
                        autoComplete="email"
                        className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="Address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Female
                    </label>
                    <div className="mt-2">
                      <input
                        id="gender"
                        name="gender"
                        type="radio"
                        value="female"
                        onChange={handeleInput}
                        autoComplete="email"
                        className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                data && data.gender
              )}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {edit ? (
                <div className="relative w-1/2">
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={info?.email}
                      onChange={handeleInput}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              ) : (
                data && data.email
              )}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Mobile number
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {edit ? (
                <div className="relative w-1/2">
                  <div className="mt-2">
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      required
                      value={info?.mobile}
                      onChange={handeleInput}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              ) : (
                data && data.mobile
              )}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laudantium repellat corrupti illum non nostrum nemo
              unde voluptates cumque suscipit?
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default Personlnfo;
