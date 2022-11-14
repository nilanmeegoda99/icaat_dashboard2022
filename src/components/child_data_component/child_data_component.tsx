import React from 'react'
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined'
import BloodtypeIcon from '@mui/icons-material/Bloodtype'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BugReportIcon from '@mui/icons-material/BugReport'
import { IChildData } from '../../childtypes'

function ChildData (props: IChildData) {
  return (
        <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        <ChildCareOutlinedIcon />
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Child Name</h2>
        <p className="mt-2 text-sm text-gray-500">{props.firstName}</p>
      </div>
    </div>

    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
        <BloodtypeIcon />
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Experiment conducted institute</h2>
        <p className="mt-2 text-sm text-gray-500">{props.institute}</p>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
        <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Age</h2>
        <p className="mt-2 text-sm text-gray-500">{props.age} Yrs</p>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
        <SupervisedUserCircleIcon />
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Guardian </h2>
        <p className="mt-2 text-sm text-gray-500">{props.parent}</p>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-red-50">
        <BugReportIcon />
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Any Disorders </h2>
        <p className="mt-2 text-sm text-gray-500">{props.disorders}</p>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-blue-50">
        <LocationOnIcon />
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Residence </h2>
        <p className="mt-2 text-sm text-gray-500">{props.residence}</p>
      </div>
    </div>
  </div>
  )
}

export default ChildData
