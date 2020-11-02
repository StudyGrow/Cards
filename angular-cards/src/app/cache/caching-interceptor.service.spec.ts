import { TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { fetchLectures } from "../store/actions/LectureActions";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CachingInterceptor } from "./caching-interceptor.service";
import { LecturesService } from "../services/lectures.service";
import { timeoutWith } from "rxjs/operators";
import { interval } from "rxjs";

describe("CachingInterceptorService", () => {
  let service: CachingInterceptor;
  let lectures: LecturesService;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CachingInterceptor);
    lectures = TestBed.inject(LecturesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should provide cached reeponse", () => {
    lectures.getAllLectures().subscribe();
    httpMock.expectOne("api/lectures");
    lectures
      .getAllLectures()
      .pipe(timeoutWith(3000, interval(1000)))
      .subscribe((res) => {
        expect(res).toBeTruthy();
      });
    httpMock.expectNone("api/lectures");
  });
});
