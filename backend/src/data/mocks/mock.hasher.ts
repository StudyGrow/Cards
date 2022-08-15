import faker from 'faker'
import { RoleEnum } from '../../main/docs/models/user.model'
import { TokenChecker } from '../protocols/cryptography/token.checker'
import { TokenGenerator } from '../protocols/cryptography/token.generator'
import { HashComparer } from '../protocols/cryptography/hash.comparer'
import { Hasher } from '../protocols/cryptography/hasher'
import { TokenType } from '../protocols/cryptography/token.type'

export class HasherSpy implements Hasher {
  digest = faker.datatype.uuid()
  plaintext: string = ''

  async hash(plaintext: string): Promise<string> {
    this.plaintext = plaintext
    return this.digest
  }
}

export class HashComparerSpy implements HashComparer {
  plaintext: string = ''
  digest: string = ''
  isValid = true

  async compare(plaintext: string, digest: string): Promise<boolean> {
    this.plaintext = plaintext
    this.digest = digest
    return this.isValid
  }
}

export class TokenGeneratorSpy implements TokenGenerator {
  async generateToken(id: string, role: RoleEnum, tokenType: TokenType) {
    return tokenType + id + role
  }
}

export class TokenCheckerSpy implements TokenChecker {
  _id = "";
  _role = "" as RoleEnum;

  async checkToken(token: string, tokenType: TokenType) {
    return {
      id: this._id,
      role: this._role
    }
  }
}
