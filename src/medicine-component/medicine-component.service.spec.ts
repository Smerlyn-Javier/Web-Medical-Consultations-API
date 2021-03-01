import { Test, TestingModule } from '@nestjs/testing';
import { MedicineComponentService } from './medicine-component.service';

describe('MedicineComponentService', () => {
  let service: MedicineComponentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicineComponentService],
    }).compile();

    service = module.get<MedicineComponentService>(MedicineComponentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
