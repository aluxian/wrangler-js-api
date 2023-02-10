import * as path from "path";
import * as fs from "fs";
import * as os from "os";
import * as TOML from "@iarna/toml";
import { spawn } from "child_process";

function writeTOML(config = {}) {
  const tomlPath = path.join(
    os.tmpdir(),
    `wrangler-js-api-${Date.now()}--wrangler.toml`
  );
  fs.writeFileSync(tomlPath, TOML.stringify(config), "utf-8");
  return tomlPath;
}

function run(config = {}, args = []) {
  return spawn("wrangler", ["--config", writeTOML(config), ...args], {
    stdio: [process.stdin, process.stdout, process.stderr],
    env: { ...process.env },
  });
}

export function publish(config = {}, args = []) {
  return run(config, ["publish", ...args]);
}

export function dev(config = {}, args = []) {
  return run(config, ["dev", ...args]);
}
