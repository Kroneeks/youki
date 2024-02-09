import path from "path";
import { type Configuration } from "webpack";
import { buildWebpackConfiguration } from "./config/build/buildWebpackConfig";
import {
  BuildMode,
  type BuildEnv,
  type BuildPaths,
} from "./config/build/types/config";

function getApiUrl(mode: BuildMode, apiURL?: string) {
  if (apiURL) {
    return apiURL;
  }
  if (mode === "production") {
    return "/api";
  }

  return "http://localhost:8000";
}

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    locales: path.resolve(__dirname, "public", "locales"),
    buildLocales: path.resolve(__dirname, "dist", "locales"),
    faviconPath: path.resolve(
      __dirname,
      "src",
      "shared",
      "assets",
      "icons",
      "favicon.png"
    ),
  };

  const mode = env?.mode || "development";
  const PORT = env?.port || 3000;
  const apiURL = getApiUrl(mode, env?.apiURL);

  const isDev = mode === "development";

  const config: Configuration = buildWebpackConfiguration({
    mode,
    paths,
    isDev,
    port: PORT,
    apiURL,
    project: "frontend",
  });

  return config;
};
