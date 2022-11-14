/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { getChild } from '../../services/get_child'
import ChildData from '../child_data_component/child_data_component'
import { getAttentionSpanIQScores } from '../../services/getAttentionSpanScores'
import CustomProgressBar from '../progressbar/progressbar'

function AttentionScreen () {
  const [candidateData, setCandidateData] = useState<any[]>([])
  const [attentionSpanScores, setAttentionSpanScores] = useState<any[]>([])
  const [creativeattentionScores, setCreativeAttentionScores] = useState<any[]>(
    []
  )
  const [analyticalattentionScores, setAnalyticalAttentionScores] = useState<
  any[]
  >([])

  const fetchAttentioonSpanScores = async () => {
    setAttentionSpanScores(await getAttentionSpanIQScores())
  }

  const getCandidateDate = async () => {
    setCandidateData(await getChild())
  }

  const restructureScoreArray = async () => {
    let response = []
    let response2 = []
    response = attentionSpanScores.filter(
      (element) => element.activityName === 'CreativeAttention'
    )
    response2 = attentionSpanScores.filter(
      (element) => element.activityName === 'AnalyticalAttention'
    )
    // console.log('creative att', response)
    // console.log('analytical att', response2)
    // console.log('filtered att', attentionSpanScores)
    setCreativeAttentionScores(response)
    setAnalyticalAttentionScores(response2)
  }

  useEffect(() => {
    void fetchAttentioonSpanScores()
    void getCandidateDate()
  }, [])

  useEffect(() => {
    if (attentionSpanScores.length === 0) {
      return
    }
    void restructureScoreArray()
  }, [attentionSpanScores])

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl font-bold"> Attention Span Evaluation</h2>
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
              Creative Attention
            </div>
            {creativeattentionScores.length > 0 && (
              <div className="mt-8">
                {creativeattentionScores.map((item, key) => {
                  return (
                    <div>
                      <p className="text-xl font-semibold my-2">
                        Level no : {item.questionIndex}{' '}
                      </p>
                      <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Low attention level - {item?.attentionLevelScore?.low_attention * 100}%
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-20">
                            <div
                              className="h-2.5 rounded-full"
                              style={{
                                width: `${item?.attentionLevelScore?.low_attention * 100}%`,
                                backgroundColor: (item?.attentionLevelScore?.low_attention * 100) <= 35 ? 'red' : ((item?.attentionLevelScore?.low_attention * 100) > 35 && (item?.attentionLevelScore?.low_attention * 100) < 75) ? '#FFAA33' : 'green'
                              }}
                            ></div>
                          </div>
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                        Mid attention level - {item?.attentionLevelScore?.mid_attention * 100}%
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-20">
                            <div
                              className="h-2.5 rounded-full"
                              style={{
                                width: `${item?.attentionLevelScore?.mid_attention * 100}%`,
                                backgroundColor: (item?.attentionLevelScore?.mid_attention * 100) <= 35 ? 'red' : ((item?.attentionLevelScore?.mid_attention * 100) > 35 && (item?.attentionLevelScore?.mid_attention * 100) < 75) ? '#FFAA33' : 'green'
                              }}
                            ></div>
                          </div>
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                        High attention level - {item?.attentionLevelScore?.high_attention * 100}%
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-20">
                            <div
                              className="bg-blue04 h-2.5 rounded-full"
                              style={{
                                width: `${item?.attentionLevelScore?.high_attention * 100}%`,
                                backgroundColor: (item?.attentionLevelScore?.high_attention * 100) <= 35 ? 'red' : ((item?.attentionLevelScore?.high_attention * 100) > 35 && (item?.attentionLevelScore?.high_attention * 100) < 75) ? '#FFAA33' : 'green'
                              }}
                            ></div>
                          </div>
                        </dd>
                      </div>
                    </div>
                  )
                })}
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
            )}
          </div>
          <div className="mt-10 relative bg-white p-4 rounded-3xl w-full my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-dark-purple left-4 -top-6">
              Analytical Attention
            </div>
            {analyticalattentionScores.length > 0 && (
              <div className="mt-8">
                {analyticalattentionScores.map((item, key) => {
                  return (
                    <div>
                    <p className="text-xl font-semibold my-2">
                      Level no : {item.questionIndex}{' '}
                    </p>
                    <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Low attention level - {item?.attentionLevelScore?.low_attention * 100}%
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-20">
                          <div
                            className="h-2.5 rounded-full"
                            style={{
                              width: `${item?.attentionLevelScore?.low_attention * 100}%`,
                              backgroundColor: (item?.attentionLevelScore?.low_attention * 100) <= 35 ? 'red' : ((item?.attentionLevelScore?.low_attention * 100) > 35 && (item?.attentionLevelScore?.low_attention * 100) < 75) ? '#FFAA33' : 'green'
                            }}
                          ></div>
                        </div>
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                      Mid attention level - {item?.attentionLevelScore?.mid_attention * 100}%
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-20">
                          <div
                            className="h-2.5 rounded-full"
                            style={{
                              width: `${item?.attentionLevelScore?.mid_attention * 100}%`,
                              backgroundColor: (item?.attentionLevelScore?.mid_attention * 100) <= 35 ? 'red' : ((item?.attentionLevelScore?.mid_attention * 100) > 35 && (item?.attentionLevelScore?.mid_attention * 100) < 75) ? '#FFAA33' : 'green'
                            }}
                          ></div>
                        </div>
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                      High attention level - {item?.attentionLevelScore?.high_attention * 100}%
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-20">
                          <div
                            className="bg-blue04 h-2.5 rounded-full"
                            style={{
                              width: `${item?.attentionLevelScore?.high_attention * 100}%`,
                              backgroundColor: (item?.attentionLevelScore?.high_attention * 100) <= 35 ? 'red' : ((item?.attentionLevelScore?.high_attention * 100) > 35 && (item?.attentionLevelScore?.high_attention * 100) < 75) ? '#FFAA33' : 'green'
                            }}
                          ></div>
                        </div>
                      </dd>
                    </div>
                  </div>
                  )
                })}
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttentionScreen
