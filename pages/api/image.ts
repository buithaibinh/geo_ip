// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import request from 'request';

import geo, { Lookup } from 'geoip-lite';

interface GeoIPResponse extends Lookup {}

type Data = {
  ip: string | null | [string];
  geo: GeoIPResponse | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.headers);
  let ip: any = req.headers['x-real-ip'];

  // if user provide ip as query param. use it instead
  if (req.query.ip) {
    ip = req.query.ip;
  }

  const lookup = geo.lookup(ip);
  console.log('geo data:', lookup, ip);

  const imgStream = request.get(
    'https://www.codewithyou.com/_next/image?url=%2Fstatic%2Fimages%2Faws-cognito-anonymous-user-access-api.jpg&w=828&q=75'
  );
  // pipe the result stream into response
  return imgStream.pipe(res);
}
