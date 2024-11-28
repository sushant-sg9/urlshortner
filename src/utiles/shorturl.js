import { nanoid } from 'nanoid';

const generateShortId = (size = 8) => {
  return nanoid(size);
};

export default generateShortId;
