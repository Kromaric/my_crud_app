// src/commandes/commandes.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CommandesService } from './commandes.service';
import { Commande } from '../entities/commande.entity';

@Controller('commandes')
export class CommandesController {
  constructor(private readonly commandesService: CommandesService) {}

  @Get()
  findAll(): Promise<Commande[]> {
    return this.commandesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Commande> {
    return this.commandesService.findOne(Number(id));
  }

  @Post()
  create(
    @Body()
    body: {
      tableId: number;
      clientId: number;
      platId: number;
      prixTotal?: number;
    },
  ): Promise<Commande> {
    return this.commandesService.create(
      body.tableId,
      body.clientId,
      body.platId,
      body.prixTotal,
    );
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    body: {
      tableId?: number;
      clientId?: number;
      platId?: number;
      prixTotal?: number;
    },
  ): Promise<Commande> {
    return this.commandesService.update(
      Number(id),
      body.tableId,
      body.clientId,
      body.platId,
      body.prixTotal,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.commandesService.remove(Number(id));
    return { message: `Commande #${id} supprimée` };
  }
}
