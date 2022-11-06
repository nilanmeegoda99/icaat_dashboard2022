/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
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
import MentalChronoScreen from '../../components/mental_chronometry/mentalChronometry'
import ReasoningIq from '../../components/reasoning_iq/resoning'

function Home () {
  const [open, setOpen] = useState(true)
  const [screenNo, setScreenNo] = useState(1)

  //   useEffect(() => {

  //   }, [])

  const Menus = [
    { title: 'Dashboard', src: InsertChartOutlinedTwoToneIcon },
    { title: 'Reasoning IQ', src: CalculateOutlinedIcon, gap: true },
    { title: 'Knowledge IQ', src: FifteenMpOutlinedIcon },
    { title: 'Mental Chronomrtry', src: HourglassTopOutlinedIcon },
    { title: 'Attention Span', src: CrisisAlertOutlinedIcon },
    { title: 'All', src: BallotOutlinedIcon, gap: true }
  ]
  return (
    <>
      <div>
        <Toaster />
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
            {Menus.map((Menu, index) => (
              <li
                key={index}
                onClick={() => setScreenNo(index + 1)}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                  index === 0
                } `}
              >
                <Menu.src />
                <span
                  className={`${!open && 'hidden'} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {screenNo === 1 && (<div className="h-screen flex-1 p-7">
          <Dashboard />
        </div>)}
        {screenNo === 2 && (<div className="h-screen flex-1 p-7">
          <ReasoningIq />
        </div>)}
        {screenNo === 3 && (<div className="h-screen flex-1 p-7">
          <KnowledgeScreen />
        </div>)}
        {screenNo === 5 && (<div className="h-screen flex-1 p-7">
          <AttentionScreen />
        </div>) }
        {screenNo === 4 && (<div className="h-screen flex-1 p-7">
          <MentalChronoScreen />
        </div>)}
        {screenNo === 6 && (<div className="h-screen flex-1 p-7">
          <AllreportScren />
        </div>)}

      </div>
    </>
  )
}

export default Home
