import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
  Request,
} from '@nestjs/common';
import { CreateDiagramDto } from './dto/create-diagram.dto';
import { UpdateDiagramDto } from './dto/update-diagram.dto';
import { DiagramsService } from './diagram.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('diagram')
export class DiagramController {
  constructor(private readonly diagramService: DiagramsService) {}

  @Post()
  create(@Body() { flow, options, step, type }: CreateDiagramDto) {
    const diagram = {
      options,
      step,
      type,
    };

    let wrongFormat = false;

    // Timer
    if (type === 1) {
      const isTypeString = typeof options.type === 'string';
      const isStartDate = typeof options.startDate === 'string';
      const isTime = typeof options.time === 'number';
      const isRepeat = typeof options.repeat === 'boolean';

      if (!isTypeString || !isStartDate || !isTime || !isRepeat) {
        wrongFormat = true;
      }
    }

    // Get parameters
    if (type === 2) {
      const isKeysString = typeof options.keys === 'string';

      if (!isKeysString) {
        wrongFormat = true;
      }
    }

    // Conditional
    if (type === 3) {
      const isCondition = typeof options.condition === 'function';
      const isTrueStep = typeof options.trueStep === 'number';
      const isFalseStep = typeof options.falseStep === 'number';

      if (!isCondition || !isTrueStep || !isFalseStep) {
        wrongFormat = true;
      }
    }

    // Each
    if (type === 4) {
      const isEachStep = typeof options.eachStep === 'number';
      const isEachType = typeof options.eachType === 'number';

      if (!isEachStep || !isEachType) {
        wrongFormat = true;
      }
    }

    // Message
    if (type === 5) {
      const isMessage = typeof options.message === 'string';
      const isAttachments = Array.isArray(options.attachments);
      const isTo = Array.isArray(options.to);
      const isFrom = typeof options.from === 'string';

      if (!isMessage || !isAttachments || !isTo || !isFrom) {
        wrongFormat = true;
      }
    }

    // Contact data
    if (type === 6) {
      const isData = typeof options.data === 'string';

      if (!isData) {
        wrongFormat = true;
      }
    }

    if (wrongFormat) {
      throw new Error('Formato de opções inválido');
    }

    return this.diagramService.create({
      flow: {
        id: flow,
      },
      ...diagram,
    });
  }

  @Get(':flowId')
  findAll(@Param('flowId') flowId: string, @Request() req) {
    return this.diagramService.findAll({
      where: {
        flow: {
          id: +flowId,
          user: {
            id: req.user.id,
          },
        },
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    id;
    // return this.diagramService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(@Param('id') id: string, @Body() updateDiagramDto: UpdateDiagramDto) {
    id;
    updateDiagramDto;
    // return this.diagramService.update(+id, updateDiagramDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.diagramService.remove(+id);
  }
}
