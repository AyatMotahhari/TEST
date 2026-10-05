import React from 'react'

function AddReport({isModalOpen,setIsModalOpen}) {

    const closeHandler = () => {
        setIsModalOpen(false);
    }
  return (
    <div 
      className={`fixed inset-0 z-50 flex h-screen items-center justify-center overflow-auto p-4 transition-opacity duration-300 ${
        isModalOpen
          ? 'pointer-events-auto opacity-100 '
          : 'pointer-events-none opacity-0'
      }`}>
      
       <div
        onClick={closeHandler}
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
      />

     <div 
       className={`relative flex max-h-[90vh] min-h-0 max-w-[80vw] transform flex-col overflow-hidden rounded-[15px] bg-linear-to-bl from-black to-gray-600 p-6 text-white shadow-2xl transition-all duration-300 max-2xl:scale-95 max-md:h-160 ${
          isModalOpen
            ? 'translate-y-0 scale-100 opacity-100'
            : '-translate-y-10 scale-0 opacity-0'
        }`}>


        <div className="w-[1000px] h-[423px]">
            <div className="mb-6 flex items-center justify-between gap-4 mt-4">
                <h2 className="text-xl font-bold">
                    ایجاد گزارش جدید
                </h2>

                <button 
                type="button"
                onClick={closeHandler}
                className="text-2xl text-red-500 ">
                    x
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
                <input 
                type="text"
                placeholder="نام"
                className="rounded-xl border border-gray-600 bg-gray-700 px-4 py-3 text-white"
                />
                <input 
                type="text"
                placeholder="تاریخ"
                className="rounded-xl border border-gray-600 bg-gray-700 px-4 py-3 text-white"
                />
                <input 
                type="text"
                placeholder="شیفت"
                className="rounded-xl border border-gray-600 bg-gray-700 px-4 py-3 text-white"
                />

                <textarea
                    type="description"
                    placeholder="گزارش"
                    className="col-span-3 w-[1000px] h-[200px] rounded-xl border border-gray-600 bg-gray-700 px-4 py-3 text-white"
                />

                <div className="col-span-3 flex justify-start">
                    <button
                        type="button"
                        className="rounded-xl bg-green-600 px-8 py-3 font-bold text-white transition hover:bg-green-700 active:scale-95"
                    >
                        ایجاد
                    </button>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default AddReport
