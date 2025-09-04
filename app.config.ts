
import { ConfigContext, ExpoConfig } from "expo/config";
import 'tsx/cjs';

module.exports = ({ config }: ConfigContext): Partial<ExpoConfig> => ({
  ...config,
  plugins: [...config.plugins!, ['./plugins/withMMKV.ts']],
});
