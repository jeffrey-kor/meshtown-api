import { Injectable } from '@nestjs/common';
import { User } from '../users/domain/User';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {

  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(username: string, email: string, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;
    await this.mailerService.sendMail({
      to: email,
      subject: "Welcome to meshtown app! Confirm your Email",
      template: "./confirmation",
      context: {
        name: username,
        url,
      }
    })
  }


}