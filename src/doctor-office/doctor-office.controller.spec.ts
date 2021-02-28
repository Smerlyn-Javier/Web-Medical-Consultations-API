import { Test, TestingModule } from '@nestjs/testing';
import { DoctorOfficeController } from './doctor-office.controller';

describe('DoctorOfficeController', () => {
  let controller: DoctorOfficeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorOfficeController],
    }).compile();

    controller = module.get<DoctorOfficeController>(DoctorOfficeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
