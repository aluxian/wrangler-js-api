import type { Environment } from "wrangler";
import type { ChildProcess } from "child_process";

export function publish(config: Environment): ChildProcess;

export function preview(config: Environment): ChildProcess;
