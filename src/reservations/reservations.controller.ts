// src/reservations/reservations.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Reservation } from '../entities/reservation.entity';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  findAll(): Promise<Reservation[]> {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Reservation> {
    return this.reservationsService.findOne(Number(id));
  }

  @Post()
  create(
    @Body()
    body: {
      clientId: number;
      tableId: number;
    },
  ): Promise<Reservation> {
    return this.reservationsService.create(body.clientId, body.tableId);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    body: {
      clientId?: number;
      tableId?: number;
    },
  ): Promise<Reservation> {
    return this.reservationsService.update(
      Number(id),
      body.clientId,
      body.tableId,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.reservationsService.remove(Number(id));
    return { message: `Réservation #${id} supprimée` };
  }
}
