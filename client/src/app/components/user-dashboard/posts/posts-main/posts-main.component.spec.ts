import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsMainComponent } from './posts-main.component';

describe('PostsMainComponent', () => {
  let component: PostsMainComponent;
  let fixture: ComponentFixture<PostsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
