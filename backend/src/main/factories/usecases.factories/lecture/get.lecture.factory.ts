import { DbGetLecture } from "../../../../data/usecases/lecture/db.get.lecture";
import { GetLecture } from "../../../../domain/usecases/lecture/get.lecture";
import { LectureMongoRepository } from "../../../../infrastructure/db/mongodb/lecture/lecture.mongodb.repository";

export const makeDbGetLecture = (): GetLecture => {
  const lectureMongoRepository = new LectureMongoRepository();
  return new DbGetLecture(lectureMongoRepository);
};
