import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UserService} from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
    ],
      providers: [AuthGuard, AuthService, UserService]
    });

    authGuard = TestBed.get(AuthGuard);
  });

  it('should be created', () => { //Test to check if the service is created
    expect(authGuard).toBeTruthy();
  });

});
