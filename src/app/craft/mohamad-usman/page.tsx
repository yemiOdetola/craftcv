import React from 'react'
import Image from 'next/image'
import placeholder from '@/images/placeholder/neil-sims.png'

export default function page() {
  return (
    <div>
      <div className="mt-6 max-w-screen-lg md:flex mx-auto">
        <div className="md:w-1/3 p-2 relative">
          <div className="md:fixed">
            <div className="md:block">
              <Image src={placeholder} alt="Profile" className="h-32 w-32 rounded-full mx-auto" width={128} height={128} />
              <div className="mb-12 text-center mt-4 justify-center items-center">
                <h1 className="text-xl md:text-2xl text-gray-800 font-bold">
                  Mohamad Usman
                </h1>
                <div className="md:text-lg text-gray-600">Software Engineer</div>
                <div className="text-gray-600 md:hidden mt-1">
                  (<a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="79141611570c0a141817484f41391e14181015571a1614">[email&#160;protected]</a>)
                </div>
              </div>
            </div>
            <div className="mx-4 my-4 hidden md:block">
              <div className="my-5 text-lg text-gray-600 flex">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z"
                    />
                    <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z" />
                  </svg>
                </div>
                <a href="https://veilmail.io/e/hpz_Hv">https://veilmail.io/e/hpz_Hv</a>
              </div>
              <div className="my-5 text-lg text-gray-600 flex">
                <div className="mr-2">
                  <svg
                    className="text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z"
                    />
                    <path
                      d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z"
                    />
                  </svg>
                </div>
                Bogor, Indonesia
              </div>
              <a href="https://www.linkedin.com/in/usman168" className="my-5 text-blue-500 text-lg flex">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"
                    />
                  </svg>
                </div>
                LinkedIn
              </a>
            </div>
            <div className="mx-4 hidden md:block">
              <a href="https://veilmail.io/e/hpz_Hv" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out w-full py-2 text-white rounded text-base">
                Hire me
              </a>

            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-2 w-full">
          <div className="mx-4 mb-6">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Summary</h1>
            <p className="text-lg">
              Enthusiastically explore new technologies for efficiency, always
              looking for ways to solve the problem as efficiently as possible,
              giving priority simplicity of code.
            </p>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Experience</h1>
            <ul>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Golang Developer
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">
                      PT. Sigma Cipta Caraka (Telkomsigma)
                    </small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600">Jan 2021 - Present                 </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Data Engineer (ETL, Data Pipeline)
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">
                      PT. Sigma Cipta Caraka (Telkomsigma)
                    </small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600">Jan 2020 - Present</small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Full Stack Developer
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">
                      PT. Sigma Cipta Caraka (Telkomsigma)
                    </small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600"
                    >Jan 2020 - Mar 2020</small
                    >
                  </div>
                </div>
              </li>

              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Senior Frontend Developer
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">
                      Freelance
                    </small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600"
                    >Jan 2020 - Mar 2020</small
                    >
                  </div>
                </div>
              </li>

              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Backend Developer
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">
                      PT. Bonet Utama
                    </small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600"
                    >Dec 2018 - Dec 2019</small
                    >
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Data Center (Linux Sysadmin)
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings text-sm"></i>
                    <small className="text-base text-gray-800">
                      PT. Bonet Utama
                    </small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600"
                    >Agu 2017 - Okt 2018</small
                    >
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  IT Support Internship
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">
                      PT. Nutrifood Indonesia
                    </small>
                  </div>
                  <div className="">
                    <i className="bx bx-calendar"></i>
                    <small className="text-sm text-gray-600">3 Month</small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Skill</h1>
            <ul>
              <li className="mb-6 flex flex-wrap">
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Flask</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Python Pandas</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >ETL Automation</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Laravel/Lumen</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Composer Dependency</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Codeigniter</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Slim</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >ExpressJS</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Code Principles</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Design Database</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Design Pattern</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >System Analysis</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >VueJS</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >ReactJS</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Tailwind css/Bootstrap</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Sass/Scss</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Web Server</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Mail Server</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >PostgreSQL</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Mysql/MariaDB</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >MonggoDB</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Linux Sysadmin</span
                >
                <span
                  className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Networking</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
