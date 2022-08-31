import { Document, Model } from "mongoose";
import { Logger } from "winston";
import { UserService } from "../frontend/src/app/services/user.service";
import { ICard } from "../models/cards.model";
import { ILecture } from "../models/lecture.model";
import { getModelForClass } from "@typegoose/typegoose";
import { Report } from "../models/report.model";

export default class ReportService {
  constructor({ cardsModel, lectureModel, logger }) {
    this.cardsModel = cardsModel;
    this.lectureModel = lectureModel;
    this.logger = logger;
  }
  cardsModel: Model<ICard>;
  lectureModel: Model<ILecture>;
  logger: Logger;
  // returns all the cards matching the query

  reportResource = async (
    report: { resourceId: string; resourceType: string },
    currentUserId: string,
    lectureId?: string
  ) => {
    let existingReport = await getModelForClass(Report).findOne({
      resourceId: report.resourceId,
    });
    if (!existingReport) {
      if (report.resourceType === "card") {
        if (!lectureId) throw new Error("Lecture id not provided ");
        const reportModel = getModelForClass(Report);
        existingReport = new reportModel({
          ...report,
          blockedById: [currentUserId],
          lectureId: lectureId,
        });
      } else {
        const reportModel = getModelForClass(Report);
        existingReport = new reportModel({
          ...report,
          blockedById: [currentUserId],
        });
      }
      await existingReport.save();
    } else {
      await getModelForClass(Report).updateOne(report, {
        $addToSet: { blockedById: currentUserId },
      });
    }
    return report.resourceId;
  };

  getUserReports = async (userId: string) => {
    if (userId) {
      const reportedResourcesByUser = await getModelForClass(Report).find({
        blockedById: userId,
      });
      return reportedResourcesByUser;
    } else {
      throw Error("User not provided");
    }
  };

  getUserCardReports = async (
    userId: string,
    lectureId?: string
  ): Promise<Report[]> => {
    if (lectureId)
      return await getModelForClass(Report)
        .find({
          resourceType: "card",
          blockedById: userId,
          lectureId: lectureId,
        })
        .lean();

    return await getModelForClass(Report)
      .find({
        resourceType: "card",
        blockedById: userId,
      })
      .lean();
  };

  getAdminReports = async (): Promise<Report[]> => {
    return await getModelForClass(Report).find().lean();
  };
}
