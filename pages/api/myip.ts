// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import geo, { Lookup } from 'geoip-lite';

interface GeoIPResponse extends Lookup {}

type Data = {
  data?: {
    ip: string | null | [string];
    geo: GeoIPResponse | null;
  };
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get client ip
  let ip: any = req.headers['x-real-ip'];

  if (req.query.ip) {
    ip = req.query.ip;
  }

  const lookup = geo.lookup(ip);

  return res.status(200).json({ data: { ip, geo: lookup } });
}
