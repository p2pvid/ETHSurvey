import BN from 'bn.js';
import Web3 from 'web3';

import { Survey } from '@src/types';

export const getSurveyList = (
  data: {
    0: string[];
    1: string[];
    2: BN[];
  },
  web3: Web3
): Survey[] => {
  const count = data[0].length;

  const FIELD_NAME = 0;
  const FIELD_SHORTID = 1;
  const FIELD_TOTAL_RESPONSES = 2;

  const surveys = [];

  for (let i = 0; i < count; i++) {
    const s = {
      name: web3.utils.hexToAscii(data[FIELD_NAME][i]),
      shortid: web3.utils.hexToAscii(data[FIELD_SHORTID][i]),
      totalResponses: data[FIELD_TOTAL_RESPONSES][i].toString()
    };

    surveys.push(s);
  }

  return surveys;
};
