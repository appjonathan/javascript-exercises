'use client'
import Image from 'next/image';
import { AiOutlineCloudUpload } from "react-icons/ai";

const Mailing = () => {
  return (
    <div>
      <div className="justify-between grid grid-cols-1 sm:grid-cols-3 p-4 py-4">
      <div className="flex sm:col-span-2 m-4 text-sm flex-col">
          <label className="mb-2">Zu beantwortende Email:</label>
          <textarea
            className="w-full  shadow-lg shadow-white rounded-xl p-2"
            placeholder="Füge ein deine Email auf die du die Antwort haben willst"
            name="inputMail"
            id="inputMail"
            rows={10}
          />
        </div>
        <div className="flex sm:col-span-1 m-4 text-sm flex-col">
          <label className="mb-2">Antwort Context:</label>
          <textarea
            className="w-full  shadow-lg shadow-white rounded-xl p-2"
            placeholder="Füge ein Kontext deiner Antwort hinzu"
            name="inputMail"
            id="inputMail"
            rows={10}
          />
        </div>
      </div>

      <div className="flex pl-4 m-4">
        <fieldset>
          <legend>Wähle deine Option aus:</legend>
            <input type="checkbox" id="casual" name="casual" />
            <label className='px-2'for="casual">😌 Lässig</label>
            <input type="checkbox" id="professional" name="professional" />
            <label className='px-2'for="professional">🧳 Formell</label>
            <input type="checkbox" id="yes" name="yes" />
            <label className='px-2'for="yes">👍 Zusage</label>
            <input type="checkbox" id="no" name="no" />
            <label className='px-2'for="no">👎 Absage</label>
            <select>
              <option value="mehr">Sprachen</option>
              <option disabled value="option-1">Deutsch</option>
              <option disabled value="option-2">Englisch</option>
              <option disabled value="option-3">Chinesisch</option>
        </select>
        </fieldset>
        </div>
    
      <div className="justify-between grid grid-cols-1 sm:grid-cols-4 p-4 py-4">
      <div className="flex sm:col-span-3 m-4 text-sm flex-col">
          <label className="mb-2">AI Generated Mail:</label>
          <textarea
            className="w-full shadow-lg shadow-white rounded-xl p-2"
            placeholder="Hier wird deine Email sein"
            name="outputMail"
            id="outputMail"
            rows={10}
          />

          <div className='flex justify-between py-3 '>
            <button className='black_btn'>Generate</button>
            <button className='black_btn'>Copy</button>
          </div>
          
        </div>
        <div className="flex sm:col-span-1 m-4 text-sm flex-col">
          <label className="mb-2">Upload Document:</label>
          <div className='w-full sm:h-[220px] h-[100px] flex border-2 border-white rounded-xl shadow-lg shadow-white'>
          
          <div className='w-full grid sm:grid-cols-2 grid-cols-4 space-x-2flex-col items-end'>
          <div className='m-4 text-xl p-4 border rounded-xl'>
            <AiOutlineCloudUpload
          className='w-9 h-auto' 
          /></div>
          
            {/* Hier kommen dann die Documents hin*/}
            <div className='m-4 text-xl p-4 py-5 border rounded-xl'>Item1</div>
            <div className='m-4 text-xl p-4 py-5 border rounded-xl'>Item1</div>
            <div className='m-4 text-xl p-4 py-5 border rounded-xl'>Item1</div>
            
          </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Mailing