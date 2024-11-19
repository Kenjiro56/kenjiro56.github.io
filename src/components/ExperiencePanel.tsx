import React from "react";

const ExperiencePanel = () => {
  return (
    <>
    <h2 className="text-xl font-bold mb-4 text-center">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* <!-- Application Category --> */}
              <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-500">Application</h3>
                  <ul className="space-y-4">
                      <li className="bg-white p-4 rounded-lg shadow-md">
                          <h4 className="text-lg font-semibold">Life is Tech!メンター</h4>
                          <p className="text-gray-600">Internship | Date: 2020/8-</p>
                          <details className="mt-2">
                              <summary className="cursor-pointer text-blue-500">Show Details</summary>
                              <p className="text-gray-700 mt-2"><a href="https://life-is-tech.com/">会社HP</a></p>
                          </details>
                      </li>
                      <li className="bg-white p-4 rounded-lg shadow-md">
                          <h4 className="text-lg font-semibold">JPHacks2020</h4>
                          <p className="text-gray-600">Hackathons | Date: 2020/10/26-2020/11/28</p>
                          <details className="mt-2">
                              <summary className="cursor-pointer text-blue-500">Show Details</summary>
                              <p className="text-gray-700 mt-2"><a href="https://jphacks.com/2020/">大会リンク</a></p>
                          </details>
                      </li>
                      <li className="bg-white p-4 rounded-lg shadow-md">
                          <h2 className="text-lg font-semibold">NAGOYABOOST1000 2021</h2>
                          <p className="text-gray-600">Hackathons | Date: 2021/8-2022/2</p>
                          <details className="mb-2">
                              <summary className="cursor-pointer text-blue-500">Show Details</summary>
                              <p className="text-gray-700"><a href="https://nagoyaboost.jp/2021/">大会サイト</a></p>
                          </details>
                        </li>
                      <li className="bg-white p-4 rounded-lg shadow-md" >
                      <h2 className="text-lg font-semibold">CivitechChallengeCup[U-22]</h2>
                      <p className="text-gray-600">Hackathons | Date: 2021/7-2021/9</p>
                      <details className="mb-2">
                          <summary className="cursor-pointer text-blue-500">Show Details</summary>
                          <p className="text-gray-700"><a href="https://ccc2021.code4japan.org/">大会リンク</a></p>
                      </details>
                      </li>
                      {/* <!-- Add more Application items as needed --> */}
                  </ul>
              </div>

              {/* <!-- Security Category --> */}
              <div>
                  <h3 className="text-lg font-semibold mb-4 text-pink-500">Security</h3>
                  <ul className="space-y-4">
                      <li className="bg-white p-4 rounded-lg shadow-md">
                          <h4 className="text-lg font-semibold">セキュリティキャンプ全国大会 <br/>フィジカルトラックコース</h4>
                          <p className="text-gray-600">Workshop | Date: 2019/8/13-2019/8/17</p>
                          <details className="mt-2">
                              <summary className="cursor-pointer text-blue-500">Show Details</summary>
                              <p className="text-gray-700 mt-2">hogehoge</p>
                          </details>
                      </li>
                      <li className="bg-white p-4 rounded-lg shadow-md">
                          <h4 className="text-lg font-semibold">セキュリティミニキャンプ<br/> in 北海道</h4>
                          <p className="text-gray-600">Workshop | Date: 2019/11/9-2019/11/10</p>
                          <details className="mt-2">
                              <summary className="cursor-pointer text-blue-500">Show Details</summary>
                              <p className="text-gray-700 mt-2">hogehoge</p>
                          </details>
                      </li>
                      <li className="bg-white p-4 rounded-lg shadow-md">
                          <h4 className="text-lg font-semibold">セキュリティミニキャンプ<br/> in 愛知</h4>
                          <p className="text-gray-600">Workshop | Date: 2019/10/5</p>
                          <details className="mt-2">
                              <summary className="cursor-pointer text-blue-500">Show Details</summary>
                              <p className="text-gray-700 mt-2">hogehoge</p>
                          </details>
                      </li>
                      <li className="bg-white p-4 rounded-lg shadow-md">
                          <h2 className="text-lg font-semibold">セキュリティミニキャンプ<br/> in 東京 Aトラック</h2>
                          <p className="text-gray-600">Workshop | Date: 2024/4/27-2024/4/28</p>
                          <details className="mb-2">
                              <summary className="cursor-pointer text-blue-500">Show Details</summary>
                              <p className="text-gray-700">hogehoge</p>
                          </details>
                      </li>

                      {/* <!-- Add more Security items as needed --> */}
                  </ul>
              </div>

              {/* <!-- Robotics Category --> */}
              <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-500">Robotics</h3>
                  <ul className="space-y-4">
                      <li className="bg-white p-4 rounded-lg shadow-md">
                          <h4 className="text-lg font-semibold">名古屋工業大学SAZANKA <br/>制御班/広報</h4>
                          <p className="text-gray-600">Club Activities | Date: 2020/11-2022/3</p>
                          <details className="mt-2">
                              <summary className="cursor-pointer text-blue-500">Show Details</summary>
                              <p className="text-gray-700 mt-2"><a href="https://nitsazanka.studio.site/">部活公式HP</a></p>
                          </details>
                      </li>
                      {/* <!-- Add more Robotics items as needed --> */}
                  </ul>
              </div>
          </div>
    </>
  );
};

export default ExperiencePanel;
