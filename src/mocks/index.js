import { setupWorker } from "msw";
import { todoHandlers } from "./todo/handlers";

export const worker = setupWorker(...todoHandlers);
