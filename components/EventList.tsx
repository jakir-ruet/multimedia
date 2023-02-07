import Image from 'next/image';
import styles from '@/styles/EventList.module.css';

function EventList({ individualEvent }) {
  return (
    <>
      <div className="container mx-auto max-w-7xl p-2 md:p-2 bg-gray-200">
        <div className="columns-3 gap-2">
          <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <Image
              className="w-24 h-24 md:w-480 md:h-auto md:rounded-none rounded-full mx-auto"
              src={
                individualEvent.image
                  ? individualEvent.image
                  : '/images/event-default.png'
              }
              // src="/images/sample/event1.jpg"
              height={250}
              width={250}
              alt="event1"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium">
                  {individualEvent.description}
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  {individualEvent.name}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  <h3>{individualEvent.venue}</h3>
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  <h3>
                    {individualEvent.date} at {individualEvent.time}
                  </h3>
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  <h3>{individualEvent.performers}</h3>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default EventList;
