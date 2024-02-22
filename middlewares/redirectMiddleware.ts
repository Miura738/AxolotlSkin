import { NextApiRequest, NextApiResponse } from 'next';

const redirectMiddleware = (handler: (req: NextApiRequest, res: NextApiResponse) => void) => {
    return (req: NextApiRequest, res: NextApiResponse) => {
        // 获取当前请求的路径
        const url = req.url;

        // 如果路径为 /install，则重定向到 /
        if (url === '/install') {
            res.writeHead(302, { Location: '/' });
            res.end();
            return;
        }

        // 否则，继续执行下一个中间件或路由处理程序
        return handler(req, res);
    };
};

export default redirectMiddleware;
