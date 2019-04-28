import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
    ],
      providers: [AuthService]
    });

    authService = TestBed.get(AuthService);

  });

  it('should be created', () => { //Test to check if the service is created
    expect(authService).toBeTruthy();
  });
});
