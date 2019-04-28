import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
    ],
      providers: [UserService]
    });

    userService = TestBed.get(UserService);
  });

  it('should be created', () => { //Test to check if the service is created
    expect(userService).toBeTruthy();
  });
});
