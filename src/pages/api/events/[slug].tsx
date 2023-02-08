/* eslint-disable import/no-anonymous-default-export */
import { events } from '../data.json';
export default (req, res) => {
  //filter the data and checking from remotely
  const individualEvent = events.filter((ie) => ie.slug === req.query.slug);
  if (req.method === 'GET') {
    res.status(200).json(individualEvent);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not Allow` });
  }
};
