import Image from 'next/image';
import styles from '@/styles/ItemList.module.css';

function ItemList() {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <Image
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="/images/sample/event1.jpg"
        height={250}
        width={250}
        alt="event1"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            Use the text generator to create your own text! The Lorem Ipsum
            online text generator creates fictitious, fake, causal, or
            placeholder text.
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">Jakir</div>
          <div className="text-slate-700 dark:text-slate-500">
            Software Engineer
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default ItemList;
