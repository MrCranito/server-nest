export interface IHashConfig {
  saltOrRounds: string;
}

export const HashConfig: IHashConfig = {
  saltOrRounds: process.env.BCRYPT_PASSWORD,
};
