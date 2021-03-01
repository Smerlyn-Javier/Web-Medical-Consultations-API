import { Test, TestingModule } from '@nestjs/testing';
import { MedicineComponentController } from './medicine-component.controller';

describe('MedicineComponentController', () => {
  let controller: MedicineComponentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicineComponentController],
    }).compile();

    controller = module.get<MedicineComponentController>(MedicineComponentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
