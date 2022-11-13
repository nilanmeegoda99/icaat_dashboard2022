/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import sidearrow from '../../assets/control.png'
import logo from '../../assets/logo.png'
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined'
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined'
import FifteenMpOutlinedIcon from '@mui/icons-material/FifteenMpOutlined'
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined'
import Dashboard from '../../components/dashboard/dashboard'
import AttentionScreen from '../../components/attention_span/attention'
import KnowledgeScreen from '../../components/knowledge_iq/knowledge'
import AllreportScren from '../../components/all_reports/allreport'
import MentalChronoScreen from '../../components/mental_chronometry/mentalChronometry.jsx'
import ReasoningIq from '../../components/reasoning_iq/resoning'
import Modal from 'react-modal'
import API from '../../services/api'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

Modal.setAppElement('#root')

function Home () {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [open, setOpen] = React.useState(true)
  const [screenNo, setScreenNo] = React.useState(1)
  const [indexNo, setIndexNo] = React.useState(0)
  const [selectedChild, setSelectedChild] = React.useState()

  const Menuss = [
    { title: 'Dashboard', src: InsertChartOutlinedTwoToneIcon },
    { title: 'Reasoning IQ', src: CalculateOutlinedIcon, gap: true },
    { title: 'Knowledge IQ', src: FifteenMpOutlinedIcon },
    { title: 'Mental Chronomrtry', src: HourglassTopOutlinedIcon },
    { title: 'Attention Span', src: CrisisAlertOutlinedIcon },
    { title: 'All', src: BallotOutlinedIcon, gap: true }
  ]

  function openModal (num: number) {
    if (num && num !== 0) {
      setIndexNo(num)
    }
    setIsOpen(true)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function afterOpenModal () {}

  function closeModal () {
    setIsOpen(false)
  }

  function classNames (...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  function getTestComponent () {
    setScreenNo(indexNo + 1)
    closeModal()
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Select child"
        >
          <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-4 md:p-6 dark:bg-dark-purple  dark:border-gray-700">
            <form className="space-y-6 " onSubmit={getTestComponent}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Please select the institute and the child
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Institute
                </label>
                <div className="w-full relative inline-flex">
                  <svg
                    className="w-full h-2 absolute top-0 left-6 m-4 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 412 232"
                  >
                    <path
                      d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                      fill="#648299"
                      fillRule="nonzero"
                    />
                  </svg>
                  <select className="w-full text-center border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                    <option>Select</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Black</option>
                    <option>Orange</option>
                    <option>Purple</option>
                    <option>Gray</option>
                    <option>White</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Child
                </label>
                <div className="w-full relative inline-flex">
                  <svg
                    className="w-full h-2 absolute top-0 left-6 m-4 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 412 232"
                  >
                    <path
                      d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                      fill="#648299"
                      fillRule="nonzero"
                    />
                  </svg>
                  <select className="w-full text-center border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                    <option>Select</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Black</option>
                    <option>Orange</option>
                    <option>Purple</option>
                    <option>Gray</option>
                    <option>White</option>
                  </select>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{' '}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>
      <div className="flex">
        <div
          className={` ${
            open ? 'w-72' : 'w-20 '
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src={sidearrow}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logo}
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && 'scale-0'
              }`}
            >
              ICAAT Dashboard
            </h1>
          </div>
          <ul className="pt-6">
            {Menuss.map((Menus, index) => (
              <li
                key={index}
                onClick={() =>
                  index + 1 !== 1 ? openModal(index) : setScreenNo(1)
                }
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menus.gap ? 'mt-9' : 'mt-2'} ${index === 0} `}
              >
                <Menus.src />
                <span
                  className={`${!open && 'hidden'} origin-left duration-200`}
                >
                  {Menus.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {screenNo === 1 && (
          <div className="h-screen flex-1 p-7">
            <Dashboard />
          </div>
        )}
        {screenNo === 2 && (
          <div className="h-screen flex-1 p-7">
            <ReasoningIq />
          </div>
        )}
        {screenNo === 3 && (
          <div className="h-screen flex-1 p-7">
            <KnowledgeScreen />
          </div>
        )}
        {screenNo === 5 && (
          <div className="h-screen flex-1 p-7">
            <AttentionScreen />
          </div>
        )}
        {screenNo === 4 && (
          <div className="h-screen flex-1 p-7">
            <MentalChronoScreen />
          </div>
        )}
        {screenNo === 6 && (
          <div className="h-screen flex-1 p-7">
            <AllreportScren />
          </div>
        )}
      </div>
    </>
  )
}

export default Home
