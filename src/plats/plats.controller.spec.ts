import { Test, TestingModule } from '@nestjs/testing';
import { PlatsController } from './plats.controller';
import { PlatsService } from './plats.service';

describe('PlatsController', () => {
  let controller: PlatsController;

  const mockService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlatsController],
      providers: [
        {
          provide: PlatsService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<PlatsController>(PlatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
