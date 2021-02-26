import { Test, TestingModule } from '@nestjs/testing';
import { PacientController } from './pacient.controller';

describe('PacientController', () => {
  let controller: PacientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacientController],
    }).compile();

    controller = module.get<PacientController>(PacientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
