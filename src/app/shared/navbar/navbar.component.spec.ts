import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unit tests', () => {
    describe('OnInit', () => {
      it('should set the navLinks', () => {
        expect(component.navLinks).toEqual(['design', 'code', 'create']);
      });

      it('should set the blog external link', () => {
        expect(component.blogLink).toEqual('https://dev.to/chiangs');
      });

      it('should set the blog external link', () => {
        expect(component.blogNavTitle).toEqual('.write');
      });
    });
  });

  describe('template integration tests', () => {});
});
