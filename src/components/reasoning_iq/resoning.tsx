/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { getChild } from '../../services/get_child'
import ChildData from '../child_data_component/child_data_component'
import { getReasoningIQScores } from '../../services/getReasoningIQscores'

function ReasoningIq () {
  const [candidateData, setCandidateData] = useState<any[]>([])
  const [reasoningIQScores, setReasoningIQScores] = useState<any[]>([])

  const fetchReasoningIQScores = async () => {
    await setReasoningIQScores(await getReasoningIQScores())
  }

  const getCandidateDate = async () => {
    await setCandidateData(await getChild())
  }
  useEffect(() => {
    void fetchReasoningIQScores()
    void getCandidateDate()
  }, [])

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl font-bold"> Reasoning IQ Evluation</h2>
      {candidateData.length > 0 && (
        <ChildData
          firstName={candidateData[0].firstName}
          institute={candidateData[0].institute}
          age={candidateData[0].age}
          parent={candidateData[0].parent}
          disorders={candidateData[0].disorders}
          residence={candidateData[0].residence}
        />
      )}
      {reasoningIQScores.length > 0 && (
        <div className="mt-10 ">
          <div className="overflow-y-auto p-4" style={{ height: '50vh' }}>
            {reasoningIQScores.map((item, key) => {
              return (
                <div className="mt-10 relative bg-white p-4 rounded-3xl w-full my-4 shadow-xl">
                  <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-dark-purple left-4 -top-6">
                    {item.activityName}
                  </div>
                  <div className="mt-8">
                    <div>
                      <p className="text-xl font-semibold my-2">Level no :</p>
                      <div className="flex space-x-2 text-gray-500 text-sm">
                        <p>Expected Answer :- </p>
                      </div>
                      <div className="flex space-x-2 text-gray-500 text-sm my-3">
                        <p>Provided Answer :- </p>
                      </div>
                      <div className="flex space-x-2 text-gray-500 text-sm my-3">
                        <p>Score :- </p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold my-2">Level no :</p>
                        <div className="flex space-x-2 text-gray-500 text-sm">
                          <p>Expected Answer :- </p>
                        </div>
                        <div className="flex space-x-2 text-gray-500 text-sm my-3">
                          <p>Provided Answer :- </p>
                        </div>
                        <div className="flex space-x-2 text-gray-500 text-sm my-3">
                          <p>Score :- </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xl font-semibold my-2">Level no :</p>
                        <div className="flex space-x-2 text-gray-500 text-sm">
                          <p>Expected Answer :- </p>
                        </div>
                        <div className="flex space-x-2 text-gray-500 text-sm my-3">
                          <p>Provided Answer :- </p>
                        </div>
                        <div className="flex space-x-2 text-gray-500 text-sm my-3">
                          <p>Score :- </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2"></div>

                    <div className="flex justify-end">
                      <div className="my-2">
                        <p className="font-semibold text-base mb-2">
                          Overall Progress
                        </p>
                        <div className="text-base text-blue-400 font-semibold text-end">
                          <p>34%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default ReasoningIq
