import { Test, TestingModule } from '@nestjs/testing';
import { CardInfoController } from './card-info.controller';

describe('CardInfoController', () => {
  let controller: CardInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardInfoController],
    }).compile();

    controller = module.get<CardInfoController>(CardInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
