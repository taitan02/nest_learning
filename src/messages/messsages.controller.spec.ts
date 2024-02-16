import { Test, TestingModule } from '@nestjs/testing';
import { MesssagesController } from './messsages.controller';

describe('MesssagesController', () => {
  let controller: MesssagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MesssagesController],
    }).compile();

    controller = module.get<MesssagesController>(MesssagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
