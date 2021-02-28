import { Test, TestingModule } from '@nestjs/testing';
import { DoctorOfficeService } from './doctor-office.service';

describe('DoctorOfficeService', () => {
  let service: DoctorOfficeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorOfficeService],
    }).compile();

    service = module.get<DoctorOfficeService>(DoctorOfficeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
