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
  let ip: any = req.headers['x-real-ip'];

  // if user provide ip as query param. use it instead
  if (req.query.ip) {
    ip = req.query.ip;
  }

  const lookup = geo.lookup(ip);
  console.log('FOUND data:', lookup);

  const imgStream = request.get(
    'https://i1-dulich.vnecdn.net/2022/09/07/mu1-1662526438-2195-1662526498.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GF4PRNfV83Flt1DhqbADbw'
  );
  // pipe the result stream into response
  return imgStream.pipe(res);
}
