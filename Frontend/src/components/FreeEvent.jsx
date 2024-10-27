import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list  from  "../../public/list_of_events.json"
import Cards from './Cards';
import Modal from 'react-modal' ;

function FreeEvent() {
    const filteredData = list.filter((data) => data.category === "Free");
    // console.log(filteredData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const customStyles = {
        content: {
          position: 'relative',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        },
      };

      // Modal.setAppElement('#yourAppElement');

      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [cardDetails, setCardDetails] = useState({});

      const openModal = (details) => {
        setCardDetails(details);
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };

      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        style.color = '#f00';
      }

  return (
    
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
            <h1 className='font-semibold  text-xl pb-2'>Local Events</h1>
            <p className='mt-6 mb-6'>
              You can read through our local events and find the best event for you. We have a wide range of events to choose from. We have events for all ages and interests. Here you can see a  list of events with details like<b className='text-pink-200'> event name, date, and location</b>.
            </p>
        </div>


        <div>
        <Slider {...settings}>
            {filteredData.map((item)=>(
                <Cards  
                item={item} 
                key={item.id} 
                onClick={() => openModal(item)}
                />
            ))}
        </Slider>
        </div>

        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className='bg-slate-300 border border-black bg-base-100 shadow-xl  rounded-xl'
        // className='h-[70%] w-[70%] mt-28 items-center justify-center text-center'
      >
        <button className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 text-black" onClick={closeModal}>✕</button>

        <figure className='flex flex-col justify-center items-center  '>
            <img className='mt-12' src={cardDetails.eventImage} alt="event"  width={"50%"} height={"50%"} />
            <h2 className="font-bold text-lg text-black">{cardDetails.eventName}</h2>
            <div className='flex flex-row text-pink-400'>
              <div className='pl-12  pr-4'>{cardDetails.date}</div>
              <div className='pl-4  pr-12'>{cardDetails.location}</div>
            </div>
            <div className='mt-3'>
              <p className='text-pink-800'>{cardDetails.description}</p>
            </div>
            
        </figure>
        
      </Modal>

    </div>
    </>
  )
}

export default FreeEvent
