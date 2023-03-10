/* eslint-disable import/no-anonymous-default-export */
import { events } from '../data.json';
export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(events);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not Allow` });
  }
};
