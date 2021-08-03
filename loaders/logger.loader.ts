import { createLogger, format, transports, config } from "winston";

let level, silent;
switch (process.env.NODE_ENV) {
  case "production":
    level = "debug";
    silent = false;
    break;
  case "test":
    level = "error";
    silent = false;
    break;
  default:
    level = "debug";
    silent = false;
    break;
}
const formatter = format.printf((info) => {
  return `${new Date().toISOString()} ${info.level}: ${info.message}`;
});
const enumerateErrorFormat = format((info) => {
  if (info instanceof Error) {
    return Object.assign(
      {
        message: info.stack,
        stack: info.stack,
      },
      info
    );
  }

  return info;
});
const options = {
  console: {
    handleExceptions: true,
    level,
    silent,
    format: format.combine(format.colorize(), format.splat(), formatter),
  },
};

const logger = createLogger({
  levels: config.syslog.levels,
  format: format.combine(enumerateErrorFormat()),
  transports: [new transports.Console(options.console)],
  exitOnError: false,
});

export default logger;
