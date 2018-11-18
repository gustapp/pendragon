import { red } from "colors";
import winston from "winston";
const { combine, timestamp, label, printf, prettyPrint, colorize, metadata } = winston.format;

const ignorePrivate = winston.format((info) => {
    if (info.metadata.private) { return false; }
    return info;
});

const myFormat = printf((info) => {
    return `${info.metadata.timestamp} [${red(info.metadata.label)}zv] ${info.level}: ${info.message}`;
});

const defaultFormat = combine(
    label({ label: "right meow!" }),
    timestamp(),
    prettyPrint(),
    metadata(),
    ignorePrivate(),
);

const logger: winston.Logger = winston.createLogger({
    exceptionHandlers: [
        new winston.transports.File({ filename: "./exceptions.log" }),
    ],
    exitOnError: false,
    format: defaultFormat,
    level: "silly",
    transports: [
        new winston.transports.File({ filename: "./debug.log", level: "debug"}),
        new winston.transports.Console({
            format: combine(
                colorize(),
                defaultFormat,
                myFormat,
            ),
        }),
    ],
});

logger.debug("Logging initialized at debug level private ", { private: true });

logger.error("Test error logging", { private: false });
logger.warn("Test warn logging", { private: false });
logger.info("Test info logging", { private: false });
logger.verbose("Test verb logging", { private: false });
logger.debug("Test debug logging", { private: false });
logger.silly("Test silly logging", { private: false });

logger.debug("Logging initialized at debug level", { private: false });

export default logger;
