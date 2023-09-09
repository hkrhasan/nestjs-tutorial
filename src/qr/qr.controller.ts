import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QrService } from './qr.service';

@Controller({
  path: 'qr',
})
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Get()
  getQr() {
    return this.qrService.getQr();
  }

  @Get(':qrId')
  getQrById(@Param('qrId') qrId: string) {
    return this.qrService.getQrById(qrId);
  }

  @Post()
  postQr(@Body() data: any) {
    console.log({ data });

    return this.qrService.getQr();
  }
}
