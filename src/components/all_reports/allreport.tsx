import React from 'react'
import { IChildFullData } from '../../childtypes'
import ChildFullData from '../child_data_component/child_date_full_component'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import SendEmail from '../../comms/email_template'

function AllreportScren () {
  return (
    <>
      <ChildFullData
        firstname={''}
        lastname={''}
        gender={''}
        contact_no={''}
        address={''}
        age={0}
        guardian={''}
        disorders={''}
        email={''}
      />
      <div className="mt-5">
        <div
          style={{ height: '40rem' }}
          className="overflow-y-auto p-4 bg-white shadow sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Assesments activities overall results
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Based on the four main cognitive factors
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Conducted Institute
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Shewon Kumara
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Conducted date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  2023/08/23
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Reasonning IQ{' '}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-20">
                    <div
                      className="bg-purple-800 h-2.5 rounded-full"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Knowledge IQ
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-20">
                    <div
                      className="bg-blue02 h-2.5 rounded-full"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Mental Chronometry
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-20">
                    <div
                      className="bg-blue03 h-2.5 rounded-full"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Attention Span
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-20">
                    <div
                      className="bg-blue04 h-2.5 rounded-full"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-l font-medium text-dark-purple">
                  Add a comment on Child Cognition
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 rounded-md border border-gray-200"
                  >
                    <li className="justify-between py-3 pl-3 pr-4 text-sm">
                    <form className='grid grid-cols-2 gap-6'>
                      <div className='w-full'>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment" type="text" placeholder="Add expert comments" />
                      </div>
                      <div className="mx-4 flex">
                        <button type="submit" className="px-6 py-2 rounded bg-dark-purple hover:bg-blue-600 text-sky-100"><AddCircleOutlinedIcon /></button>
                      </div>
                      <div className="mx-4 flex">
                        <button type="submit" className="px-6 py-2 rounded bg-dark-purple hover:bg-blue-600 text-sky-100"><SendEmail /></button>
                      </div>
                    </form>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllreportScren
