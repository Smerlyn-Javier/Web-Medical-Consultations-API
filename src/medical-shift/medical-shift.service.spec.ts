import { Test, TestingModule } from '@nestjs/testing';
import { MedicalShiftService } from './medical-shift.service';

describe('MedicalShiftService', () => {
  let service: MedicalShiftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalShiftService],
    }).compile();

    service = module.get<MedicalShiftService>(MedicalShiftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
