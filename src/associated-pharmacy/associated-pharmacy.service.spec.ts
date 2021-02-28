import { Test, TestingModule } from '@nestjs/testing';
import { AssociatedPharmacyService } from './associated-pharmacy.service';

describe('AssociatedPharmacyService', () => {
  let service: AssociatedPharmacyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociatedPharmacyService],
    }).compile();

    service = module.get<AssociatedPharmacyService>(AssociatedPharmacyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
