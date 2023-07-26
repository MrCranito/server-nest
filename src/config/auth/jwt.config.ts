export interface IJwtConfig {
  secret: string;
  expiresIn: string;
}

export const JwtConfig: IJwtConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXPIRE_IN || '24h',
};
