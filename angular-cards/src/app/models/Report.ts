export class Report {
  constructor(
    public resourceId: string,
    public lectureId: string,
    public resourceType: string,
    public blockedById: string[]
  ) {} // ids of users
}
