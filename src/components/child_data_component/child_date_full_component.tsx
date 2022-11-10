import React from 'react'
import Face6Icon from '@mui/icons-material/Face6'
import { IChildFullData } from '../../childtypes'

function ChildFullData (props: IChildFullData) {
  return (
        <div className="w-full mx-2 h-64">
    <div className="bg-white p-3 shadow-sm rounded-sm border-2">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span className="text-green-500">
                <Face6Icon />
            </span>
            <span className="tracking-wide">Child`s general Information</span>
        </div>
        <div className="text-gray-700">
            <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">Jane</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">Doe</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">Female</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Nationality</div>
                    <div className="px-4 py-2">+11 998001001</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Parent</div>
                    <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact number</div>
                    <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                        <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <div className="px-4 py-2">Feb 06, 1998</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ChildFullData
