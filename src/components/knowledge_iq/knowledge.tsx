/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { getChild } from '../../services/get_child'
import ChildData from '../child_data_component/child_data_component'
import { getKnowledgeIQScores } from '../../services/get_knowledgeIQScores'

function KnowledgeScreen () {
  const [candidateData, setCandidateData] = useState<any[]>([])
  const [knowledgeiqScores, setknowledgeiqScores] = useState<any[]>([])
  const [colourNumbersScores, setColourNumbersScores] = useState<any[]>(
    []
  )
  const [digitSpanScores, setDigitSpanScores] = useState<
  any[]
  >([])

  const fetchKnowledgeIQScores = async () => {
    await setknowledgeiqScores(await getKnowledgeIQScores())
  }

  const getCandidateDate = async () => {
    await setCandidateData(await getChild())
  }

  const restructureScoreArray = async () => {
    let response = []
    let response2 = []
    response = knowledgeiqScores.filter(
      (element) => element.activityName === 'Colour Numbers'
    )
    response2 = knowledgeiqScores.filter(
      (element) => element.activityName === 'Digit Span'
    )
    setColourNumbersScores(response)
    setDigitSpanScores(response2)
  }

  useEffect(() => {
    void fetchKnowledgeIQScores()
    void getCandidateDate()
  }, [])

  useEffect(() => {
    if (knowledgeiqScores.length === 0) {
      return
    }
    void restructureScoreArray()
  }, [knowledgeiqScores])

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl font-bold">Knowledge IQ Evaluation</h2>
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
        <div className="mt-10 ">
          <div className="overflow-y-auto p-4" style={{ height: '50vh' }}>
              <div className="mt-10 relative bg-white p-4 rounded-3xl w-full my-4 shadow-xl">
                  <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-dark-purple left-4 -top-6">
                    Colour Numbers
                  </div>
                  {colourNumbersScores.length > 0 && (
                    <div className="mt-8">
                      {colourNumbersScores.map((item, key) => {
                        return (
                          <div>
                            <p className="text-xl font-semibold my-2">Level no : {item.questionIndex}{' '}</p>
                            <div className="flex space-x-2 text-gray-500 text-sm">
                              <p>Expected Answer :- {item.expectedAnswer} </p>
                            </div>
                            <div className="flex space-x-2 text-gray-500 text-sm my-3">
                              <p>Provided Answer :- {item.refinedTranscript.toString()}</p>
                            </div>
                            <div className="flex space-x-2 text-gray-500 text-sm my-3">
                              <p>Accuracy Score :- {item.accuracyScore}</p>
                            </div>
                            <div className="flex space-x-2 text-gray-500 text-sm my-3">
                              <p>Similarity Score :- {item.similarityScore}</p>
                            </div>
                          </div>
                        )
                      })}
                      <div className="border-t-2"></div>
                      <div className="flex justify-end">
                        {/* <div className="my-2">
                            <p className="font-semibold text-base mb-2">
                              Overall Progress
                            </p>
                            <div className="text-base text-blue-400 font-semibold text-end">
                              <p>{}</p>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-10 relative bg-white p-4 rounded-3xl w-full my-4 shadow-xl">
                  <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-dark-purple left-4 -top-6">
                    Digit Span
                  </div>
                  {digitSpanScores.length > 0 && (
                    <div className="mt-8">
                      {digitSpanScores.map((item, key) => {
                        return (
                          <div>
                            <p className="text-xl font-semibold my-2">Level no : {item.questionIndex}{' '}</p>
                            <div className="flex space-x-2 text-gray-500 text-sm">
                              <p>Expected Answer :- {item.expectedAnswer} </p>
                            </div>
                            <div className="flex space-x-2 text-gray-500 text-sm my-3">
                              <p>Provided Answer :- {item.refinedTranscript}</p>
                            </div>
                            <div className="flex space-x-2 text-gray-500 text-sm my-3">
                              <p>Accuracy Score :- {item.accuracyScore}</p>
                            </div>
                            <div className="flex space-x-2 text-gray-500 text-sm my-3">
                              <p>Similarity Score :- {item.similarityScore}</p>
                            </div>
                          </div>
                        )
                      })}
                      <div className="border-t-2"></div>
                      <div className="flex justify-end">
                        {/* <div className="my-2">
                            <p className="font-semibold text-base mb-2">
                              Overall Progress
                            </p>
                            <div className="text-base text-blue-400 font-semibold text-end">
                              <p>34%</p>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeScreen
