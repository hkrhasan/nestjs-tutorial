import { Injectable } from '@nestjs/common';

@Injectable()
export class QrService {
  getQr(): string {
    return 'here is your qr';
  }

  getQrById(qrId: string) {
    return `here is your qr with your qrId ${qrId}`;
  }
}
