/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  rootDir: '.',
  roots: ['<rootDir>/src/'],
  testRegex: '/__test__/.*\\.test\\.[jt]s$',
};

export default config;
