import { IsDate, IsEnum, IsString, MaxLength } from 'class-validator';

export class CreateFlowDto {
  @IsString({
    message: 'O nome deve ser um texto.',
  })
  @MaxLength(64, {
    message: 'O nome deve ter no máximo 64 caracteres.',
  })
  name?: string;

  @IsString({
    message: 'A url deve ser um texto.',
  })
  @MaxLength(32, {
    message: 'A url deve ter no máximo 32 caracteres.',
  })
  url: string;

  @IsString({
    message: 'A subUrl deve ser um texto.',
  })
  @MaxLength(32, {
    message: 'A subUrl deve ter no máximo 32 caracteres.',
  })
  subUrl?: string;

  @IsString({
    message: 'A descrição deve ser um texto.',
  })
  description?: string;

  @IsDate({
    message: 'A última execução deve ser uma data válida.',
  })
  lastRun?: Date;

  @IsEnum(['draft', 'running', 'stopped', 'error'], {
    message: 'O status deve ser um enum válido.',
  })
  status: 'draft' | 'running' | 'stopped' | 'error';
}
