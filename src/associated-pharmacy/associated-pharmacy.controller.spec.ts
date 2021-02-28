import { Test, TestingModule } from '@nestjs/testing';
import { AssociatedPharmacyController } from './associated-pharmacy.controller';

describe('AssociatedPharmacyController', () => {
  let controller: AssociatedPharmacyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociatedPharmacyController],
    }).compile();

    controller = module.get<AssociatedPharmacyController>(AssociatedPharmacyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
