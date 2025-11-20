// src/clients/clients.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from '../entities/client.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Client> {
    return this.clientsService.findOne(Number(id));
  }

  @Post()
  create(
    @Body()
    body: {
      nom: string;
      allergies: string[];
      majeur: boolean;
      vegetarien: boolean;
    },
  ): Promise<Client> {
    return this.clientsService.create(
      body.nom,
      body.allergies,
      body.majeur,
      body.vegetarien,
    );
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    body: {
      nom?: string;
      allergies?: string[];
      majeur?: boolean;
      vegetarien?: boolean;
    },
  ): Promise<Client> {
    return this.clientsService.update(
      Number(id),
      body.nom,
      body.allergies,
      body.majeur,
      body.vegetarien,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.clientsService.remove(Number(id));
    return { message: `Client #${id} supprimé` };
  }
}
