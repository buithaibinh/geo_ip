// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import geo, { Lookup } from 'geoip-lite';

interface GeoIPResponse extends Lookup {}

type Data = {
  data?: GeoIPResponse | null;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let ip: any = req.query.ip;

  //  auto detect ip address from headers sent by the client
  const auto = req.query.auto;

  if (!ip && !auto) {
    res.status(400).json({ error: 'Missing required query parameter: ip' });
    return;
  }

  ip = ip || req.headers.forwarded;
  console.log(req.headers.forwarded);
  if (!ip) {
    res.status(400).json({ error: 'Not found client IP' });
    return;
  }

  const lookup = geo.lookup(ip);

  if (!lookup) {
    res.status(404).json({ error: 'Not found location' });
    return;
  }

  res.status(200).json({ data: lookup });
}
