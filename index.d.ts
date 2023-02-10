import type { ChildProcess } from "child_process";
import type { Environment } from "./wrangler";

export { Environment } from "./wrangler";

export function publish(config: Environment): ChildProcess;

export function preview(config: Environment): ChildProcess;
