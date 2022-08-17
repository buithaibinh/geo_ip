// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import geo, { Lookup } from 'geoip-lite';

interface GeoIPResponse extends Lookup {}

type Data = {
  ip: string | null | [string];
  geo: GeoIPResponse | null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get client ip
  console.log(req.headers['x-forwarded-for']);
  console.log(req.headers);
  let ip: any = req.headers['x-real-ip'];

  // if user provide ip as query param. use it instead
  if (req.query.ip) {
    ip = req.query.ip;
  }

  const lookup = geo.lookup(ip);

  return res.status(200).json({ ip, geo: lookup });
}
