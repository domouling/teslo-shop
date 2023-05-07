import { existsSync } from 'fs';
import { join } from 'path';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  getStaticproductImage(imageName: string) {
    const path = join(__dirname, '../../static/products', imageName);
    if (!existsSync) {
      throw new BadRequestException(`Product Image ${path} doesn't exist`);
    }
    return path;
  }
}
