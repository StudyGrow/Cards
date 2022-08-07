import { DbAddLecture } from "../../../../data/usecases/lecture/db.add.lecture";
import { AddLecture } from "../../../../domain/usecases/lecture/add.lecture";
import { LectureMongoRepository } from "../../../../infrastructure/db/mongodb/lecture/lecture.mongodb.repository";

export const makeDbAddLecture = (): AddLecture => {
  const lectureMongoRepository = new LectureMongoRepository();
  return new DbAddLecture(lectureMongoRepository);
};
