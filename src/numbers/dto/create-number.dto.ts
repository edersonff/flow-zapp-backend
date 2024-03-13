import {
  IsEnum,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateNumberDto {
  @IsString({
    message: 'O label deve ser um texto.',
  })
  @MaxLength(64, {
    message: 'O label deve ter no máximo 64 caracteres.',
  })
  label?: string;

  @IsPhoneNumber(null, {
    message: 'O número deve ser um telefone válido.',
  })
  @MaxLength(14, {
    message: 'O número deve ter no máximo 14 caracteres.',
  })
  @MinLength(14, {
    message: 'O número deve ter no mínimo 14 caracteres.',
  })
  number: string;

  @IsString({
    message: 'A sessão deve ser um texto.',
  })
  @MaxLength(64, {
    message: 'A sessão deve ter no máximo 64 caracteres.',
  })
  session?: string;

  @IsEnum(['draft', 'disconnected', 'connected', 'error'], {
    message: 'O status deve ser Rascunho, Desconectado, Conectado ou Erro.',
  })
  status: 'draft' | 'disconnected' | 'connected' | 'error';
}
