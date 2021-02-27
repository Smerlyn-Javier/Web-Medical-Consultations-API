import { Test, TestingModule } from '@nestjs/testing';
import { HealtInsuranceService } from './healt-insurance.service';

describe('HealtInsuranceService', () => {
  let service: HealtInsuranceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealtInsuranceService],
    }).compile();

    service = module.get<HealtInsuranceService>(HealtInsuranceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
