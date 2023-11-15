import React from 'react'

export default function Menu() {
  return (
    <div className="bg-white fixed top-0 left-0 right-0 p-2 shadow-md z-10 flex items-center">
      <div className="w-1/2 mx-auto p-4 rounded">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">Resume Editor</span>
            <div className="ml-4">
              <select className="rounded-md px-3 py-1">
                <option value="font-sans">Sans-serif</option>
                <option value="font-serif">Serif</option>
                <option value="font-cursive">Cursive</option>
              </select>
              <select className="rounded-md px-3 py-1 ml-2">
                <option value="theme-light">Light Theme</option>
                <option value="theme-dark">Dark Theme</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mr-4">
        <button className="bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded">Preview</button>
        <button className="bg-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </div>
    </div>
  )
}
