import { environmentDev } from "./environment.dev"
import { environmentProd } from "./environment.prod"
import { environmentAzr } from "./environment.azr"


const commonEnv = {

}

export const environment = Object.assign(commonEnv, environmentDev);
