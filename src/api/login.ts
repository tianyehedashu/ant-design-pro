import { UmiApiRequest, UmiApiResponse } from 'umi';

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  switch (req.method) {
    case 'POST':
      {
        const { password, username } = req.body;
        if (password === 'ant.design' && username === 'admin') {
          res
            .status(200)

            .json({ currentAuthority: 'admin' });

          return;
        }
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
