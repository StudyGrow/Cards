import { DbGetLectures } from "../../../../data/usecases/lecture/db.get.lectures";
import { GetLectures } from "../../../../domain/usecases/lecture/get.lectures";
import { LectureMongoRepository } from "../../../../infrastructure/db/mongodb/lecture/lecture.mongodb.repository";

export const makeDbGetLectures = (): GetLectures => {
  const lectureMongoRepository = new LectureMongoRepository();
  return new DbGetLectures(lectureMongoRepository);
};
