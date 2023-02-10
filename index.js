import * as path from "path";
import * as fs from "fs";
import * as TOML from "@iarna/toml";
import { spawn } from "child_process";

function writeTOML(config = {}) {
  const tempDir = fs.mkdtempSync("wrangler-js-api");
  const tempFile = path.join(tempDir, "wrangler.toml");

  fs.writeFileSync(tempFile, TOML.stringify(config), "utf-8");

  return tempFile;
}

function run(config = {}, args = []) {
  return spawn("wrangler", ["--config", writeTOML(config), ...args], {
    stdio: ["inherit", "inherit", "inherit"],
    env: { ...process.env },
  });
}

export function publish(config = {}) {
  return run(config, ["publish"]);
}

export function dev(config = {}) {
  return run(config, ["dev"]);
}
