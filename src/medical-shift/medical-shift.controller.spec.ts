import { Test, TestingModule } from '@nestjs/testing';
import { MedicalShiftController } from './medical-shift.controller';

describe('MedicalShiftController', () => {
  let controller: MedicalShiftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalShiftController],
    }).compile();

    controller = module.get<MedicalShiftController>(MedicalShiftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
