import { IsJSON, IsNumber } from 'class-validator';

export class CreateDiagramDto {
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    {
      message: 'A etapa deve ser um número inteiro.',
    },
  )
  step: number;

  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    {
      message: 'O tipo deve ser um número inteiro.',
    },
  )
  type?: number;

  @IsJSON({
    message: 'As opções devem ser um JSON válido.',
  })
  options: Record<string, unknown>;

  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    {
      message: 'O flow deve ser um número inteiro.',
    },
  )
  flow: number;
}
