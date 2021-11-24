import { Injectable } from '@nestjs/common';
import { HttpUserFindPasswordDto } from '../../presentation/dto/http.user.find-password.dto';
import { MailService } from '../../../mail/mail.service';

@Injectable()
export class UserCredentialService {

  constructor(private mailService: MailService) {}

  async reconfigurePassword(userCredentialDto: HttpUserFindPasswordDto) {
    const { username, email, phone } = userCredentialDto;
    const token = this.generateAuthenticationToken(email, phone);
    await this.mailService.sendUserConfirmation(username, email, await token);


  }

  async generateAuthenticationToken(email, phone): Promise<string> {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  async sendEmailToUser() {}




}