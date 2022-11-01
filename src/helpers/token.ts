import JWT from 'jsonwebtoken';

export default function generateToken(username: string) {
  const secret = process.env.JWT_SECRET || 'secret';

  return JWT.sign({ name: username }, secret, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });
}