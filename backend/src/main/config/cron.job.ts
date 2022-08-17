import cron from "node-cron";

export default (): void => {
  cron.schedule("* * * * *", function () {});
};
