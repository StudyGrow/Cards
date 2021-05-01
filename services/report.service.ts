import { Document, Model } from "mongoose";
import { Logger } from "winston";
import { UserService } from "../angular-cards/src/app/services/user.service";
import { ICard } from "../models/cards.model";
import { ILecture } from "../models/lecture.model";
import { IReport } from "../models/report.model";

export default class ReportService {
  constructor({ cardsModel, lectureModel, logger, reportModel }) {
    this.cardsModel = cardsModel;
    this.lectureModel = lectureModel;
    this.logger = logger;
    this.reportModel = reportModel;
  }
  reportModel: Model<Document<IReport>>;
  cardsModel: Model<ICard>;
  lectureModel: Model<ILecture>;
  logger: Logger;
  // returns all the cards matching the query

  reportResource = async (
    report: { resourceId: string; resourceType: string },
    currentUserId: string,
    lectureId?: string
  ) => {
    let existingReport = await this.reportModel.findOne({
      resourceId: report.resourceId,
    });
    if (!existingReport) {
      if (report.resourceType === "card") {
        if (!lectureId) throw new Error("Lecture id not provided ");
        existingReport = new this.reportModel({
          ...report,
          blockedById: [currentUserId],
          lectureId: lectureId,
        });
      } else {
        existingReport = new this.reportModel({
          ...report,
          blockedById: [currentUserId],
        });
      }
      await existingReport.save();
    } else {
      await this.reportModel.updateOne(report, {
        $addToSet: { blockedById: currentUserId },
      });
    }
    return report.resourceId;
  };

  getUserReports = async (userId: string) => {
    if (userId) {
      const reportedResourcesByUser = await this.reportModel.find({
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
  ): Promise<IReport[]> => {
    if (lectureId)
      return await this.reportModel
        .find({
          resourceType: "card",
          blockedById: userId,
          lectureId: lectureId,
        })
        .lean();

    return await this.reportModel
      .find({
        resourceType: "card",
        blockedById: userId,
      })
      .lean();
  };

  getAdminReports = async (): Promise<IReport[]> => {
    return await this.reportModel.find().lean();
  };
}
