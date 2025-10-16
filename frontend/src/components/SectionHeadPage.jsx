import React from 'react';
import logo from '../assets/ducoe.jpg';
import '@fortawesome/fontawesome-free/css/all.css';

function SectionHeadPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={logo}
        alt="logo"
        className="absolute inset-0 object-contain w-full h-full opacity-90 blur-sm" 
      />
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="flex items-center justify-center w-full h-full flex-col">
        <h1 className='text-3xl z-50 text-black relative'>Requests for section head</h1>
        
        {/* Container for cards */}
        <div className="flex flex-col gap-2 z-50 prelative mt-4 items-center w-full"> 
          {/* Example Card 1 */}
          <div className="bg-blue-600 rounded-xl p-1 shadow-sm hover:shadow-lg text-white w-11/12 max-w-3xl h-18"> {/* Fixed height */}
          <div className="flex justify-between text-xs gap-2 h-full">
          <div className="flex-1 flex-col p-1 flex items-start justify-center truncate w-full text-left">
            <div>Eyuel Kebede ID: 0014/14</div>
            <div className="text-xs">3rd Year | Armament Department</div>
          </div>
            <div className="flex-1 flex-col p-1 flex items-start justify-center truncate">
              <div>Leave Date : 00/00/0000</div>
              <div>Return Date : 00/00/0000</div>
            </div>
            <div className="flex-1 p-1 flex items-center justify-center truncate">
            
            <div className='flex flex-col '>
            <div>Approval Status:</div>
              {/* Small Cards for Section, Batch, and Student */}
              <div className="flex space-x-1  mb-1">
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Section H</div>
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Batch H</div>
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Student B</div>
              </div>

              {/* Pending Cards */}
              <div className="flex space-x-2">
                <div className="bg-gray-400 rounded text-center flex-1">Pending</div>
                <div className="bg-gray-400 rounded text-center flex-1">Pending</div>
                <div className="bg-gray-400 rounded  text-center flex-1">Pending</div>
              </div>
            </div>
          
            </div>
            <div className="flex-1 p-1 gap-2 flex items-center justify-center truncate">
              <div>
              <i class="fas fa-check text-green-400 text-xl mr-2"></i>
              </div>
              <div>
              <i class="fa fa-times text-red-500 text-xl mr-2"></i>
              </div>
              <div>
              <i class="fa fa-info-circle text-gray-700 text-xl mr-2"></i>

              </div>
            </div>
          </div>
        </div>
          {/* Example Card 2 */}
          <div className="bg-blue-600 rounded-xl p-1 shadow-sm hover:shadow-lg text-white w-11/12 max-w-3xl h-18"> {/* Fixed height */}
          <div className="flex justify-between text-xs gap-2 h-full">
          <div className="flex-1 flex-col p-1 flex items-start justify-center truncate w-full text-left">
            <div>Eyuel Kebede ID: 0014/14</div>
            <div className="text-xs">3rd Year | Armament Department</div>
          </div>
            <div className="flex-1 flex-col p-1 flex items-start justify-center truncate">
              <div>Leave Date : 00/00/0000</div>
              <div>Return Date : 00/00/0000</div>
            </div>
            <div className="flex-1 p-1 flex items-center justify-center truncate">
            
            <div className='flex flex-col '>
            <div>Approval Status:</div>
              {/* Small Cards for Section, Batch, and Student */}
              <div className="flex space-x-1  mb-1">
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Section H</div>
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Batch H</div>
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Student B</div>
              </div>

              {/* Pending Cards */}
              <div className="flex space-x-2">
                <div className="bg-gray-400 rounded text-center flex-1">Pending</div>
                <div className="bg-gray-400 rounded text-center flex-1">Pending</div>
                <div className="bg-gray-400 rounded  text-center flex-1">Pending</div>
              </div>
            </div>
          
            </div>
            <div className="flex-1 p-1 gap-2 flex items-center justify-center truncate">
              <div>
              <i class="fas fa-check text-green-400 text-xl mr-2"></i>
              </div>
              <div>
              <i class="fa fa-times text-red-500 text-xl mr-2"></i>
              </div>
              <div>
              <i class="fa fa-info-circle text-gray-700 text-xl mr-2"></i>

              </div>
            </div>
          </div>
        </div>
          {/* Example Card 3 */}
          <div className="bg-blue-600 rounded-xl p-1 shadow-sm hover:shadow-lg text-white w-11/12 max-w-3xl h-18"> {/* Fixed height */}
          <div className="flex justify-between text-xs gap-2 h-full">
          <div className="flex-1 flex-col p-1 flex items-start justify-center truncate w-full text-left">
            <div>Eyuel Kebede ID: 0014/14</div>
            <div className="text-xs">3rd Year | Armament Department</div>
          </div>
            <div className="flex-1 flex-col p-1 flex items-start justify-center truncate">
              <div>Leave Date : 00/00/0000</div>
              <div>Return Date : 00/00/0000</div>
            </div>
            <div className="flex-1 p-1 flex items-center justify-center truncate">
            
            <div className='flex flex-col '>
            <div>Approval Status:</div>
              {/* Small Cards for Section, Batch, and Student */}
              <div className="flex space-x-1  mb-1">
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Section H</div>
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Batch H</div>
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Student B</div>
              </div>

              {/* Pending Cards */}
              <div className="flex space-x-2">
                <div className="bg-gray-400 rounded text-center flex-1">Pending</div>
                <div className="bg-gray-400 rounded text-center flex-1">Pending</div>
                <div className="bg-gray-400 rounded  text-center flex-1">Pending</div>
              </div>
            </div>
          
            </div>
            <div className="flex-1 p-1 gap-2 flex items-center justify-center truncate">
              <div>
              <i class="fas fa-check text-green-400 text-xl mr-2"></i>
              </div>
              <div>
              <i class="fa fa-times text-red-500 text-xl mr-2"></i>
              </div>
              <div>
              <i class="fa fa-info-circle text-gray-700 text-xl mr-2"></i>

              </div>
            </div>
          </div>
        </div>
          {/* Example Card 4 */}
          <div className="bg-blue-600 rounded-xl p-1 shadow-sm hover:shadow-lg text-white w-11/12 max-w-3xl h-18"> {/* Fixed height */}
          <div className="flex justify-between text-xs gap-2 h-full">
          <div className="flex-1 flex-col p-1 flex items-start justify-center truncate w-full text-left">
            <div>Eyuel Kebede ID: 0014/14</div>
            <div className="text-xs">3rd Year | Armament Department</div>
          </div>
            <div className="flex-1 flex-col p-1 flex items-start justify-center truncate">
              <div>Leave Date : 00/00/0000</div>
              <div>Return Date : 00/00/0000</div>
            </div>
            <div className="flex-1 p-1 flex items-center justify-center truncate">
            
            <div className='flex flex-col '>
            <div>Approval Status:</div>
              {/* Small Cards for Section, Batch, and Student */}
              <div className="flex space-x-1  mb-1">
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Section H</div>
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Batch H</div>
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Student B</div>
              </div>

              {/* Pending Cards */}
              <div className="flex space-x-2">
                <div className="bg-gray-400 rounded text-center flex-1">Pending</div>
                <div className="bg-gray-400 rounded text-center flex-1">Pending</div>
                <div className="bg-gray-400 rounded  text-center flex-1">Pending</div>
              </div>
            </div>
          
            </div>
            <div className="flex-1 p-1 gap-2 flex items-center justify-center truncate">
              <div>
              <i class="fas fa-check  text-green-400 text-xl mr-2"></i>
              </div>
              <div>
              <i class="fa fa-times text-red-500 text-xl mr-2"></i>
              </div>
              <div>
              <i class="fa fa-info-circle text-gray-700 text-xl mr-2"></i>

              </div>
            </div>
          </div>
        </div>

          {/* Example Card 5 */}
          <div className="bg-blue-600 rounded-xl p-1 shadow-sm hover:shadow-lg text-white w-11/12 max-w-3xl h-18"> {/* Fixed height */}
          <div className="flex justify-between text-xs gap-2 h-full">
          <div className="flex-1 flex-col p-1 flex items-start justify-center truncate w-full text-left">
            <div>Eyuel Kebede ID: 0014/14</div>
            <div className="text-xs">3rd Year | Armament Department</div>
          </div>
            <div className="flex-1 flex-col p-1 flex items-start justify-center truncate">
              <div>Leave Date : 00/00/0000</div>
              <div>Return Date : 00/00/0000</div>
            </div>
            <div className="flex-1 p-1 flex items-center justify-center truncate">
            
            <div className='flex flex-col '>
            <div>Approval Status:</div>
              {/* Small Cards for Section, Batch, and Student */}
              <div className="flex space-x-1  mb-1">
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Section H</div>
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Batch H</div>
                <div className="bg-blue-800 p-1 rounded text-center flex-1">Student B</div>
              </div>

              {/* Pending Cards */}
              <div className="flex space-x-2">
                <div className="bg-gray-400 rounded text-center flex-1">Pending</div>
                <div className="bg-gray-400 rounded text-center flex-1">Pending</div>
                <div className="bg-gray-400 rounded  text-center flex-1">Pending</div>
              </div>
            </div>
          
            </div>
            <div className="flex-1 p-1 gap-2 flex items-center justify-center truncate">
              <div>
              <i class="fas fa-check text-green-400 text-xl mr-2"></i>
              </div>
              <div>
              <i class="fa fa-times text-red-500 text-xl mr-2"></i>
              </div>
              <div>
              <i class="fa fa-info-circle text-gray-700 text-xl mr-2"></i>

              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Submit Button */}
        <button className="mt-6 bg-blue-700 z-50 relative text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-900 transition duration-200">
          Submit
        </button>
      </div>
    </div>
  );
}

export default SectionHeadPage;