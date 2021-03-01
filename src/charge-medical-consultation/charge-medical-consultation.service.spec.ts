import { Test, TestingModule } from '@nestjs/testing';
import { ChargeMedicalConsultationService } from './charge-medical-consultation.service';

describe('ChargeMedicalConsultationService', () => {
  let service: ChargeMedicalConsultationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeMedicalConsultationService],
    }).compile();

    service = module.get<ChargeMedicalConsultationService>(ChargeMedicalConsultationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
