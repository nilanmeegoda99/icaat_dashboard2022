import React, { useEffect, useState } from 'react'
import { IChildData } from '../../childtypes'
import { IMentalChromScore } from '../../mentalChronScoreType'
import { getmentalChronometryScrores } from '../../services/mental_chronometry_scores'
import ChildData from '../child_data_component/child_data_component'

function MentalChronoScreen () {
  const [mentalCromResults, setMentalCromResults] = useState([])
  const [childId, setChildId] = React.useState('')
  const candidateData = {
    name: 'nilan',
    institute: 'SLIIT',
    age: 20,
    guardian: 'nandana',
    disorders: 'NA',
    residence: 'Kurunegala'
  }
  const getMentalCromResults = async () => {
    await setMentalCromResults(await getmentalChronometryScrores(childId))
  }
  useEffect(() => {
    const getchildId = async () => {
      if (localStorage) {
        await setChildId(localStorage.getItem('candidateID'))
        getMentalCromResults()
      }
    }
    getchildId()
  }, [])

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl font-bold">
        Mental Chronometry Evaluation
      </h2>

      <ChildData
        name={candidateData.name}
        institute={candidateData.institute}
        age={candidateData.age}
        guardian={candidateData.guardian}
        disorders={candidateData.disorders}
        residence={candidateData.residence}
      />

      <div className="mt-10 ">
        <div className="overflow-y-auto p-4" style={{ height: '50vh' }}>
          <div >
            <div >
            {mentalCromResults.map((item, key) => {
              // eslint-disable-next-line react/jsx-key
              return (<div className="mt-10 relative bg-white p-4 rounded-3xl w-full my-4 shadow-xl">
                  <div className="mt-8">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-dark-purple left-4 -top-6">
            {item.activityName}
            </div>
              </div>
                <p className="text-xl font-semibold my-2">Level no : 1</p>
                <div className="flex space-x-2 text-gray-500 text-sm">
                  <p>Expected Answer :- {item.actualResult[0]} </p>
                </div>
                <div className="flex space-x-2 text-gray-500 text-sm my-3">
                  <p>Provided Answer :- {item.predResult[0]}</p>
                </div>
                <div className="flex space-x-2 text-gray-500 text-sm my-3">
                  <p>Given Answer :- <img src={item.answerImage[0]} alt="description" width={100} /></p>
                </div>

                <p className="text-xl font-semibold my-2">Level no : 2</p>
                <div className="flex space-x-2 text-gray-500 text-sm">
                  <p>Expected Answer :- {item.actualResult[1]} </p>
                </div>
                <div className="flex space-x-2 text-gray-500 text-sm my-3">
                  <p>Provided Answer :- {item.predResult[1]}</p>
                </div>
                <div className="flex space-x-2 text-gray-500 text-sm my-3">
                  <p>Given Answer Image :- <img src={item.answerImage[1]} alt="description" width={100} /></p>
                </div>

                <p className="text-xl font-semibold my-2">Level no : 3</p>
                <div className="flex space-x-2 text-gray-500 text-sm">
                  <p>Expected Answer :- {item.actualResult[2]} </p>
                </div>
                <div className="flex space-x-2 text-gray-500 text-sm my-3">
                  <p>Provided Answer :- {item.predResult[2]}</p>
                </div>
                <div className="flex space-x-2 text-gray-500 text-sm my-3">
                  <p>Given Answer Image :- <img src={item.answerImage[2]} alt="description" width={100} /></p>
                </div>

              {item.activityName !== 'Pair Cancerlation' && <><p className="text-xl font-semibold my-2">Level no : 4</p><div className="flex space-x-2 text-gray-500 text-sm">
                  <p>Expected Answer: - {item.actualResult[3]} </p>
                </div><div className="flex space-x-2 text-gray-500 text-sm my-3">
                    <p>Provided Answer: - {item.predResult[3]}</p>
                  </div><div className="flex space-x-2 text-gray-500 text-sm my-3">
                    <p>Given Answer Image: - <img src={item.answerImage[3]} alt="description" width={100} /></p>
                  </div></>}
                <div className="border-t-2"></div>

                <div className="flex justify-end">
                    <div className="my-2">
                      <p className="font-semibold text-base mb-2">
                              Overall Progress
                      </p>
                <div className="text-base text-blue-400 font-semibold text-end">
                  {item.activityName !== 'Pair Cancerlation' && <p>{item.score / 4 * 100}</p>}
                  {item.activityName === 'Pair Cancerlation' && <p>{item.score / 3 * 100}</p>}
                </div>
                </div>
                </div>
              </div>)
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentalChronoScreen
