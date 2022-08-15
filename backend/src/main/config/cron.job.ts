import cron from 'node-cron';
import RedisClientInstance from '../../infrastructure/db/redis/redis.client';

export default (): void => {
  cron.schedule('* * * * *', function () {
    RedisClientInstance.getInstance().getClient.BGSAVE();
  });
};
