export interface ResetPasswordTokenData {
  code: string;
  expiration: Date | undefined;
}

export interface ResetPasswordTokenInput {
  resetPasswordData: ResetPasswordTokenData
}
