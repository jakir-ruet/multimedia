import Image from 'next/image';
import styles from '@/styles/EventList.module.css';

function EventList({ individualEvent }) {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1 bg-gray-200 p-3 gap-2">
        <div className="mt-3 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <Image
              className="md:w-250 md:h-auto md:rounded-none rounded-full mx-auto"
              src={
                individualEvent.image
                  ? individualEvent.image
                  : '/images/event-default.png'
              }
              height={250}
              width={250}
              alt="event1"
            />
            <div className="p-8">
              <p className="mt-2 text-slate-500">
                {individualEvent.description}
              </p>
              <p>{individualEvent.name}</p>
              <h3>{individualEvent.venue}</h3>
              <p>
                {individualEvent.date} at {individualEvent.time}
              </p>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                <h3>{individualEvent.performers}</h3>
              </div>
            </div>
            <div className="p-8 inline-block align-middle">
              <div className="p-8 inline-block align-middle">
                <button className="bg-red-500 mt-4 p-3 rounded-xl">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventList;
