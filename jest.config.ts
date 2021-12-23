/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  modulePaths: [path.resolve(__dirname, './test/')],
};

export default config;
