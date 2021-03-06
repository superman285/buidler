import findUp from "find-up";
import path from "path";

import { getPackageRoot } from "../util/packageInfo";

import { BuidlerError, ERRORS } from "./errors";
import { isTypescriptSupported } from "./typescript-support";

const JS_CONFIG_FILENAME = "buidler.config.js";
const TS_CONFIG_FILENAME = "buidler.config.ts";

export function isCwdInsideProject() {
  return (
    !!findUp.sync(JS_CONFIG_FILENAME) ||
    (isTypescriptSupported() && !!findUp.sync(TS_CONFIG_FILENAME))
  );
}

export function getUserConfigPath() {
  if (isTypescriptSupported()) {
    const tsConfigPath = findUp.sync(TS_CONFIG_FILENAME);
    if (tsConfigPath) {
      return tsConfigPath;
    }
  }

  const pathToConfigFile = findUp.sync(JS_CONFIG_FILENAME);
  if (!pathToConfigFile) {
    throw new BuidlerError(ERRORS.GENERAL.NOT_INSIDE_PROJECT);
  }

  return pathToConfigFile;
}

export async function getRecommendedGitIgnore() {
  const fsExtra = await import("fs-extra");
  const packageRoot = await getPackageRoot();
  const gitIgnorePath = path.join(packageRoot, "recommended-gitignore.txt");

  return fsExtra.readFile(gitIgnorePath, "utf-8");
}
