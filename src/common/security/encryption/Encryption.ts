import * as Bcrypt from "bcrypt";
import { Injectable } from '@nestjs/common';
require("dotenv").config()

@Injectable()
export class Encryption {

  private readonly saltRounds: number = Number(process.env.SALTROUNDS);

  async hash(password: string): Promise<string> {
    const hashed = Bcrypt.hash(password, this.saltRounds);
    return hashed;
  }

  validate(password: string): void {}

}