import { PartialType } from '@nestjs/swagger';
import { CreateNumberDto } from './create-number.dto';

export class UpdateNumberDto extends PartialType(CreateNumberDto) {}
