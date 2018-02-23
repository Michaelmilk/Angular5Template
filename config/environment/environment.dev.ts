import { LogLevel } from "../../src/app/core/enums";

export const environmentDev = {
    serverBaseUrl: "http://localhost:9080/api",
    defaultVC: "https://cosmos08.osdinfra.net/cosmos/Knowledge.STCA.prod/",
    defaultCouldPriority: 800,
    logLevel: LogLevel.Trace
};