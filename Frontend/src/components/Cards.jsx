import React from "react";

function Cards({ item, onClick }) {
  return (
    <>
      <div className="mt-4 my-3 p-3  " onClick={onClick}>
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border cursor-pointer">
          <figure>
            <img src={item.eventImage} alt="Shoes" />
          </figure>
          <div className="card-body">
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
        </div>
      </div>
    </>
  );
}

export default Cards;

