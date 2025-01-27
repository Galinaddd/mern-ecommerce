import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();
console.log("process.env.UPSTASH_REDIS_URL:", process.env.UPSTASH_REDIS_URL);
export const redis_client = new Redis(process.env.UPSTASH_REDIS_URL);
// await redis_client.set("foo", "bar");
