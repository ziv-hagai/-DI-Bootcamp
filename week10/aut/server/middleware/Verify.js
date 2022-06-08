import jwt from 'jsonwebtoken'
import Users from '../models/UsersModel.js'

export const verify = (req, res, next) => {
    const token = req.cookies.accessToken ||
        req.headers['x-access-token'] ||
        req.headers['authorization']

    if (token == null) return res.status(403).json({ msg: 'unauthorized' })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decode) => {
        if (err) return res.status(403).json({ msg: 'unverified token' });
        try {
            const user = await Users.findAll({
                where: {
                    email: decode.email
                }
            })
            await next();
        }
        catch (e) {
            return res.status(403).json({ msg: 'email not verified' });
        }
    })

}