import { MailAdapter, SendMail } from './../mail-adapters';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ca84795b52f45c",
      pass: "c2b3d53cda2464"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMail){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: "Vinicius Teixeira Fernandes <viniciusteixeiravini16@gmail.com",
            subject,
            html: body,
        })
    };
}