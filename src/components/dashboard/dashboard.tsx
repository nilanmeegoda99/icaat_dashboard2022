import React from 'react'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined'
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined'

function Dashboard () {
  const percentage = 66
  const percentage2 = 80
  const percentage3 = 25

  return (
    <>
      <div>
        <section className="flex items-center justify-center bg-white">
          <div className="mx-auto max-w-[43rem]">
            <div className="text-center">
              <h2 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
                ICAAT dashboard
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-400">
                Specify helps you unify your brand identity by collecting,
                storing and distributing design tokens and assets —
                automatically.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="flex items-center justify-around bg-white w-full">
      <div className="grid grid-cols-3 gap-20 m-6 content-center">
        <div style={{ width: 180, height: 180 }}>
          <CircularProgressbarWithChildren value={percentage}>
            <FaceOutlinedIcon />
            <div style={{ fontSize: 12, marginTop: -1 }}>
              <strong>{percentage}%</strong> Tested children
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div style={{ width: 180, height: 180 }}>
          <CircularProgressbarWithChildren value={percentage2}>
            <FaceOutlinedIcon />
            <div style={{ fontSize: 12, marginTop: -1 }}>
              <strong>{percentage2}%</strong> TBT children
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div style={{ width: 180, height: 180 }}>
          <CircularProgressbarWithChildren value={percentage3}>
            <LocalHospitalOutlinedIcon />
            <div style={{ fontSize: 12, marginTop: -1 }}>
              <strong>{percentage3} </strong> Institutes
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      </section>
      <div className="grid grid-cols-2 gap-5 m-6">
        <div className="relative shadow-sm sm:rounded-lg">
          <p className="mb-3 p-2 font-serif text-md">Child Information</p>
            <div className='overflow-y-auto h-80'>
            <table className="w-full text-sm text-left">
              <thead className="justify-between text-sm">
                <tr className="bg-dark-purple">
                  <th className="py-3 px-6">
                    <span className="text-gray-300">Name</span>
                  </th>
                  <th className="py-3 px-6">
                    <span className="text-gray-300">Date</span>
                  </th>

                  <th className="py-3 px-6">
                    <span className="text-gray-300">Time</span>
                  </th>

                  <th className="py-3 px-6">
                    <span className="text-gray-300">Status</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-200">
                <tr className="bg-white border-4 border-gray-200 hover:bg-gray-100">
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      Dean Lynch
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span>05/06/2020</span>
                  </td>
                  <td className="py-4 px-6">
                    <span>10:00</span>
                  </td>

                  <td className="py-4 px-6">
                    <span className="text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h5 "
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                  </td>
                </tr>
                <tr className="bg-white border-4 border-gray-200 hover:bg-gray-100">
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      Ralph Barnes
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span>05/06/2020</span>
                  </td>
                  <td className="py-4 px-6">
                    <span>12:15</span>
                  </td>

                  <td className="py-4 px-6">
                    <span className="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="12 7 12 12 15 15" />
                      </svg>
                    </span>
                  </td>
                </tr>
                <tr className="bg-white border-4 border-gray-200 hover:bg-gray-100">
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      Brett Castillo
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span>05/06/2020</span>
                  </td>
                  <td className="py-4 px-6">
                    <span>08:35</span>
                  </td>

                  <td className="py-4 px-6">
                    <span className="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
        </div>
        <div className="relative shadow-sm sm:rounded-lg">
          <p className="mb-3 p-2 font-serif text-md">Institute Information</p>
            <div className='overflow-y-auto h-80'>
            <table className="table-auto w-full text-sm text-left">
              <thead className="justify-between text-sm">
                <tr className="bg-dark-purple">
                  <th className="py-3 px-6">
                    <span className="text-gray-300">Institute Name</span>
                  </th>
                  <th className="py-3 px-6">
                    <span className="text-gray-300">Address</span>
                  </th>

                  <th className="py-3 px-6">
                    <span className="text-gray-300">Person in charge</span>
                  </th>

                  <th className="py-3 px-6">
                    <span className="text-gray-300">Contact number</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-200">
                <tr className="bg-white border-4 border-gray-200 hover:bg-gray-100">
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      Hospital 01
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span>Adress hhkjhfjksdf dsfs dfs f</span>
                  </td>
                  <td className="py-4 px-6">
                    <span>Mrs.Renuka Jayawardana</span>
                  </td>

                  <td className="py-4 px-6">
                    <span>0779001099</span>
                  </td>
                </tr>
                <tr className="bg-white border-4 border-gray-200 hover:bg-gray-100">
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      Hospital 02
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span>Adress hhkjhfjksdf dsfs dfs f</span>
                  </td>
                  <td className="py-4 px-6">
                    <span>Mrs.Renuka Jayawardana</span>
                  </td>

                  <td className="py-4 px-6">
                    <span>0779001099</span>
                  </td>
                </tr>
                <tr className="bg-white border-4 border-gray-200 hover:bg-gray-100">
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      Hospital 02
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span>Adress hhkjhfjksdf dsfs dfs f</span>
                  </td>
                  <td className="py-4 px-6">
                    <span>Mrs.Renuka Jayawardana</span>
                  </td>

                  <td className="py-4 px-6">
                    <span>0779001099</span>
                  </td>
                </tr>
                <tr className="bg-white border-4 border-gray-200 hover:bg-gray-100">
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      Hospital 02
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span>Adress hhkjhfjksdf dsfs dfs f</span>
                  </td>
                  <td className="py-4 px-6">
                    <span>Mrs.Renuka Jayawardana</span>
                  </td>

                  <td className="py-4 px-6">
                    <span>0779001099</span>
                  </td>
                </tr>
                <tr className="bg-white border-4 border-gray-200 hover:bg-gray-100">
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      Hospital 03
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span>Adress hhkjhfjksdf dsfs dfs f</span>
                  </td>
                  <td className="py-4 px-6">
                    <span>Mrs.Renuka Jayawardana</span>
                  </td>

                  <td className="py-4 px-6">
                    <span>0779001099</span>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>

        </div>
      </div>
      <div>
        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  2,340
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  New products this week
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                14.6%
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  5,355
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  Visitors this week
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  385
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  User signups this week
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                -2.7%
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
