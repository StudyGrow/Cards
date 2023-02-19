import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const IS_REGISTER = 'isRegister';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
export const Register = () => SetMetadata(IS_REGISTER, true);
