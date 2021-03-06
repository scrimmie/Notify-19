import Select from "react-select";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

let locations = require('../components/locations.json');

export default function Modal({ modalClick, date }) {

  const setShowModal = ({ out }) => {
    modalClick(out);
  };

  const storeUserData = ({ oudatat }) => {
    //store the user data
  };

  const [fields, setFields] = useState([{ Location: null }]);
  const [positive, setPositive] = useState(false);


  function handleChange(i, selected, key) {
    const values = [...fields];
    values[i][key] = selected;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ Location: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100	 bg-opacity-95	outline-none focus:outline-none overflow-y-auto max-h-screen">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold">
                {"Logging - " +
                  date.getMonth() +
                  "/" +
                  date.getDate() +
                  "/" +
                  date.getFullYear()}
              </h3>
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </div>
            {/*body*/}
            <div className="">
              {/* Data Input */}
              {fields.map((field, idx) => {
                return (
                  <div
                    className="grid grid-cols-6 grid-rows-2 p-5 grid-flow-row "
                    key={`${field}-${idx}`}
                  >
                    <div
                      key={`${field}-${idx}`}
                      className="col-span-2 px-4 self-center"
                    >
                      <p className="pl-1">Location</p>
                      <Select
                        options={locations.places}
                        key={`${field}-${idx}`}
                        onChange={(selected) =>
                          handleChange(idx, selected.value, "Location")
                        }
                      />
                    </div>
                    <div className="justify-self-center self-center">
                      <p className="pl-1">Time-In</p>
                      <input
                        type="time"
                        placeholder="Time-In"
                        onChange={(selected) =>
                          handleChange(idx, selected.target.value, "Time-In")
                        }
                        className="pl-6 pr-4 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                      />
                    </div>
                    <FontAwesomeIcon
                      className="h-7 mt-5 text-black cursor-pointer leading-none border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none justify-self-center self-center"
                      icon={faArrowRight}
                    />
                    <div className=" justify-self-center self-center">
                      <p className="pl-1">Time-Out</p>
                      <input
                        type="time"
                        placeholder="Time-Out"
                        onChange={(selected) =>
                          handleChange(idx, selected.target.value, "Time-Out")
                        }
                        className="pl-6 pr-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                      />
                    </div>
                    <button
                      className="justify-self-center self-center"
                      onClick={() => handleRemove(idx)}
                    >
                      <FontAwesomeIcon
                        className="h-7 text-black cursor-pointer leading-none pr-3 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none "
                        icon={faTimesCircle}
                      />
                    </button>
                    <div className="col-span-6 ml-4 mr-4 my-3 row-span-1">
                      <input
                        type="text"
                        placeholder="Description"
                        onChange={(selected) =>
                          handleChange(
                            idx,
                            selected.target.value,
                            "Description"
                          )
                        }
                        className="px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full h-full"
                      />
                    </div>
                  </div>
                );
              })}
              <div className="mx-auto flex">
                <label className="inline-flex items-center mt-3 mx-auto">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onClick={() => positive? setPositive(false):setPositive(true)}
                  />
                  <span className="ml-2 text-gray-700">
                    I have shown symptoms or tested positive for COVID-19
                  </span>
                </label>
              </div>
              {positive?
              <div className="mx-auto flex">
                <div className="w-64 mt-4 mb-4 mx-auto">
                  <button className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 w-full inline-flex items-center">
                    <svg
                      fill="#000"
                      height="18"
                      viewBox="0 0 24 24"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                    </svg>
                    <span className="ml-2">Upload Test Results</span>
                    <input
                    className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
                    type="file"
                    name="documents[]"
                    accept="image/*"
                  />
                  </button>
                  
                </div>
              </div>:
              <></>
              }
              <div className="mx-auto flex">
                <button
                  className="mx-auto my-4 grid grid-cols-1 grid-rows-2 justify-items-center"
                  onClick={() => handleAdd()}
                >
                  <FontAwesomeIcon
                    className="h-8 text-black cursor-pointer leading-none border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
                    icon={faPlus}
                  />
                  <p>Add New Location</p>
                </button>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-blue-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => {
                  setShowModal(false);
                  console.log(fields);
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

