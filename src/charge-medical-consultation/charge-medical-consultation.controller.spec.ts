import { Test, TestingModule } from '@nestjs/testing';
import { ChargeMedicalConsultationController } from './charge-medical-consultation.controller';

describe('ChargeMedicalConsultationController', () => {
  let controller: ChargeMedicalConsultationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeMedicalConsultationController],
    }).compile();

    controller = module.get<ChargeMedicalConsultationController>(ChargeMedicalConsultationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
