import axiosInstance from '@/lib/axiosInstance';
import getBatch from '@/lib/getBatch';
import scrapeBatch from '@/lib/scrapeBatch';

const { BASEURL } = process.env;
const batch = async ({ batchSlug, animeSlug }: {
  batchSlug?: string, animeSlug?: string
}) => {
  let batch: string | undefined = batchSlug;

  if (animeSlug) {
    const response = await axiosInstance.get(`${BASEURL}/anime/${animeSlug}`);
    const batchData = getBatch(response.data);
    batch = batchData?.slug;
  }
  if (!batch) return false;

  const response = await axiosInstance.get(`${BASEURL}/batch/${batch}`);
  const result = scrapeBatch(response.data);

  return result;
};

export default batch;
