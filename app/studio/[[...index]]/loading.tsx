'use client';

import config from '../../../sanity.config';
import { NextStudioLoading } from 'next-sanity/studio/loading';

const loading = () => {
  return <NextStudioLoading config={config} />;
};

export default loading;
