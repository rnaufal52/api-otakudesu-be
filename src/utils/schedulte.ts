import axiosInstance from "@/lib/axiosInstance";
import scrapSchedule from "@/lib/scrapeSchedule";

const { BASEURL } = process.env;
const schedule = async () => {
  const response = await axiosInstance.get(`${BASEURL}/jadwal-rilis`);
  const result = scrapSchedule(response.data);

  return result;
};

export default schedule;