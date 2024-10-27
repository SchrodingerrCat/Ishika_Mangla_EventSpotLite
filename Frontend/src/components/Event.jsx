import React from 'react'
import { Link } from 'react-router-dom'

function Event({item}) {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className='modal-box'>
           <form method='dialog'>
            <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_1").close()}
                >
                ✕
            </Link>

            <figure>
            <img src={item.eventImage} alt="Shoes" />
            </figure>
            <div className="">
                <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p>{item.eventName}</p>
                <div className="card-actions justify-between">
                <div className="badge badge-outline">{item.date}</div>
                <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                    {item.location}
                </div>
                </div>
            </div>

           </form>
        </div>
      </dialog>
    </div>
  )
}

export default Event
