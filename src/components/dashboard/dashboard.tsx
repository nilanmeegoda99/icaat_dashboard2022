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
      <div className="grid grid-cols-3 gap-3 m-6">
        <div style={{ width: 180, height: 180 }}>
          <CircularProgressbarWithChildren value={percentage}>
            <FaceOutlinedIcon />
            <div style={{ fontSize: 12, marginTop: -5 }}>
              <strong>{percentage}%</strong> Tested children
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div style={{ width: 180, height: 180 }}>
          <CircularProgressbarWithChildren value={percentage2}>
            <FaceOutlinedIcon />
            <div style={{ fontSize: 12, marginTop: -5 }}>
              <strong>{percentage2}%</strong> TBT children
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div style={{ width: 180, height: 180 }}>
          <CircularProgressbarWithChildren value={percentage3}>
            <LocalHospitalOutlinedIcon />
            <div style={{ fontSize: 12, marginTop: -5 }}>
              <strong>{percentage3}%</strong> Institute
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 m-6">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <h5>Child Information</h5>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Child name
                </th>
                <th scope="col" className="py-3 px-6">
                  Age
                </th>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Namal
                </th>
                <td className="py-4 px-6">06</td>
                <td className="py-4 px-6">2022/10/09</td>
                <td className="py-4 px-6">Done</td>
                <td className="py-4 px-6 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Namal
                </th>
                <td className="py-4 px-6">06</td>
                <td className="py-4 px-6">2022/10/09</td>
                <td className="py-4 px-6">Done</td>
                <td className="py-4 px-6 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Namal
                </th>
                <td className="py-4 px-6">06</td>
                <td className="py-4 px-6">2022/10/09</td>
                <td className="py-4 px-6">Done</td>
                <td className="py-4 px-6 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <h5>Institute Information</h5>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-white-50 dark:bg-white-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Child Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Age
                </th>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">View</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-blue-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Child 01
                </th>
                <td className="py-4 px-6">data 01</td>
                <td className="py-4 px-6">data 02</td>
                <td className="py-4 px-6">data 03</td>
                <td className="py-4 px-6 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-white-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Child 02
                </th>
                <td className="py-4 px-6">data 01</td>
                <td className="py-4 px-6">data 02</td>
                <td className="py-4 px-6">data 03</td>
                <td className="py-4 px-6 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-white dark:bg-white-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Child 03
                </th>
                <td className="py-4 px-6">Data 01</td>
                <td className="py-4 px-6">Data 02</td>
                <td className="py-4 px-6">Data 03</td>
                <td className="py-4 px-6 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Dashboard
