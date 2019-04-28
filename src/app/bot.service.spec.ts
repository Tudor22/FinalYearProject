import { TestBed } from '@angular/core/testing';
import { BotService } from './bot.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BotService', () => {
  let botService: BotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
    ],
      providers: [BotService]
    });

    botService = TestBed.get(BotService);
  });

  it('should be created', () => { //Test to check if the service is created
    expect(botService).toBeTruthy();
  });
});
