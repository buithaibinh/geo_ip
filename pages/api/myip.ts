// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import geo, { Lookup } from 'geoip-lite';

interface GeoIPResponse extends Lookup {}

type Data = {
  data?: {
    ip: string,
    geo?: GeoIPResponse,
  }
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 // get client ip
  let ip: any = req.headers['x-real-ip'];
  console.log(req.headers);
  return res.status(200).json({ data: { ip } });
}
