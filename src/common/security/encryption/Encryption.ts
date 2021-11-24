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

  // async validate(req, password: string): Promise<any> {
  //   return Bcrypt.compare(req.body.password, password, function(err, res) {
  //     if (err) {
  //       console.log(`Error:>> ${err.message}`);
  //     } else if (res) {
  //       console.log(`Error:>> ${res}`);
  //     } else {
  //       console.log(`Password do not matched.`);
  //     }
  //   });
  //
  // }

}