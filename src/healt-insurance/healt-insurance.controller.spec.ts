import { Test, TestingModule } from '@nestjs/testing';
import { HealtInsuranceController } from './healt-insurance.controller';

describe('HealtInsuranceController', () => {
  let controller: HealtInsuranceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealtInsuranceController],
    }).compile();

    controller = module.get<HealtInsuranceController>(HealtInsuranceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
