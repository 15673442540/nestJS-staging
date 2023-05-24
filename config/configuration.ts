import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
const NODE_DEV = process.env.NODE_ENV;
const YAML_CONFIG_FILENAME = `application.${NODE_DEV}.yaml`;
export default () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};