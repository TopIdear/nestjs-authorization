import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { CatsValidator } from './catValidator';

//管道-》对象结构验证 功能
@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor() {}

  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value)
    const { error } = CatsValidator.schema.validate(value);
    if (error) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
